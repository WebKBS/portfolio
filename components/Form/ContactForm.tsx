"use client";

import { contactEmail } from "@/app/actions";
import { useRouter } from "next/navigation";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { z } from "zod";
import FileField from "./FileField";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const [actionState, formAction] = useActionState(contactEmail, null);
  const router = useRouter();
  const [validateState, setValidateState] = useState({
    username: false,
    title: false,
    message: false,
    email: false,
  });

  const [inputValue, setInputValue] = useState({
    username: "",
    title: "",
    message: "",
    email: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      validateState.email &&
      validateState.message &&
      validateState.title &&
      validateState.username
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    if (actionState?.success) {
      router.push("/contact/success");
    }
  }, [validateState, actionState?.success, router]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const file = files && files.length ? files[0] : null;

    if (file) {
      if (
        // 이미지 및 pdf 파일만 허용
        !(file.type.match(/image.*/) || file.type.match(/application\/pdf/))
      ) {
        e.target.value = "";
        alert("파일 형식은 image, PDF만 가능합니다.");
        return;
      }
      if (file.size > 2097152) {
        // 2MB 이상 파일은 허용하지 않음
        e.target.value = "";
        alert("파일 크기는 2MB 이하여야 합니다.");
        return;
      }
    }
  };
  const validateField = (fieldName: string, value: string) => {
    let isValid = false;
    switch (fieldName) {
      case "username":
        isValid = z.string().min(2).max(50).safeParse(value).success;
        break;
      case "title":
        isValid = z.string().min(2).max(100).safeParse(value).success;
        break;
      case "message":
        isValid = z.string().min(10).max(500).safeParse(value).success;
        break;
      case "email":
        isValid = z.string().email().safeParse(value).success;
        break;
      default:
        break;
    }
    return isValid;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    const isValid = validateField(name, value);
    setValidateState((prevState) => ({
      ...prevState,
      [name]: isValid,
    }));
    setInputValue((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form action={formAction}>
      <InputField
        label="성함 또는 회사"
        labelEssential={true}
        type="text"
        name="username"
        placeholder="성함 또는 회사를 입력해주세요."
        value={inputValue.username}
        onChange={handleInputChange}
        validateState={validateState.username}
        inputValue={inputValue.username}
      />
      <InputField
        label="제목"
        labelEssential={true}
        type="text"
        name="title"
        placeholder="문의 제목을 입력해주세요."
        value={inputValue.title}
        onChange={handleInputChange}
        validateState={validateState.title}
        inputValue={inputValue.title}
      />
      <InputField
        label="내용"
        labelEssential={true}
        type="text"
        name="message"
        placeholder="문의 내용을 입력해주세요."
        value={inputValue.message}
        onChange={handleInputChange}
        validateState={validateState.message}
        inputValue={inputValue.message}
        textarea={true}
      />
      <FileField handleFileChange={handleFileChange} />

      <InputField
        label="이메일"
        labelEssential={true}
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요."
        value={inputValue.email}
        onChange={handleInputChange}
        validateState={validateState.email}
        inputValue={inputValue.email}
      />
      {!actionState?.success && (
        <p className="mb-6 text-right text-sm text-red-500">
          {actionState?.message}
        </p>
      )}
      <SubmitButton actionState={actionState?.success} disabled={disabled} />
    </form>
  );
};

export default ContactForm;
