"use client";

import { contactEmail } from "@/app/actions";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useFormState } from "react-dom";
import { z } from "zod";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const [actionState, formAction] = useFormState(contactEmail, null);
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

  const style =
    "block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500";
  const labelStyle =
    "mb-2 block text-sm font-medium text-gray-900 dark:text-white";

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

  if (actionState?.success) {
    router.replace("/contact/success");
  }

  return (
    <form action={formAction}>
      <div className="mb-6">
        <div>
          <label htmlFor="username" className={labelStyle}>
            성함 또는 회사 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={style}
            placeholder="성함 또는 회사를 입력해주세요."
            value={inputValue.username}
            onChange={handleInputChange}
          />
          {!validateState.username && inputValue.username !== "" ? (
            <p className="mt-2 text-xs text-red-500">
              이름은 2자 이상, 50자 이하여야 합니다.
            </p>
          ) : (
            inputValue.username !== "" && (
              <p className="mt-2 text-xs text-green-500">Success!</p>
            )
          )}
        </div>
      </div>
      <div className="mb-6">
        <div>
          <label htmlFor="title" className={labelStyle}>
            제목 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={style}
            placeholder="문의 제목을 입력해주세요."
            value={inputValue.title}
            onChange={handleInputChange}
          />
          {!validateState.title && inputValue.title !== "" ? (
            <p className="mt-2 text-xs text-red-500">
              제목은 2자 이상, 100자 이하여야 합니다.
            </p>
          ) : (
            inputValue.title !== "" && (
              <p className="mt-2 text-xs text-green-500">Success!</p>
            )
          )}
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className={labelStyle}>
          내용 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          name="message"
          className={style}
          placeholder="문의 내용을 입력해주세요."
          value={inputValue.message}
          onChange={handleInputChange}
        ></textarea>
        {!validateState.message && inputValue.message ? (
          <p className="mt-2 text-xs text-red-500">
            내용은 10자 이상, 500자 이하여야 합니다.
          </p>
        ) : (
          inputValue.message !== "" && (
            <p className="mt-2 text-xs text-green-500">Success!</p>
          )
        )}
      </div>
      <div className="mb-6">
        <label className={labelStyle} htmlFor="file">
          회사정보 및 소개자료
        </label>
        <input
          className={style}
          id="file"
          type="file"
          name="file"
          accept="image/*, .pdf"
          onChange={handleFileChange}
        />
        <p className="mt-2 text-right text-xs">
          파일형식은 image, PDF, 또는 2MB 이하만 가능합니다.
        </p>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className={labelStyle}>
          이메일 <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={style}
          placeholder="이메일을 입력해주세요."
          value={inputValue.email}
          onChange={handleInputChange}
        />
        {!validateState.email && inputValue.email ? (
          <p className="mt-2 text-xs text-red-500">
            올바른 이메일 주소를 입력해주세요.
          </p>
        ) : (
          inputValue.email !== "" && (
            <p className="mt-2 text-xs text-green-500">Success!</p>
          )
        )}
      </div>
      {!actionState?.success && (
        <p className="mb-6 text-right text-sm text-red-500">
          {actionState?.message}
        </p>
      )}
      <SubmitButton actionState={actionState?.success} />
    </form>
  );
};

export default ContactForm;
