"use client";

import { contactEmail } from "@/app/actions";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const [actionState, formAction] = useFormState(contactEmail, null);
  const [file, setFile] = useState<File | string | null>(null);
  const [mimeType, setMimeType] = useState<File | string | null>(null); // ['image', 'pdf']
  const router = useRouter();

  console.log(actionState);

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
      console.log(file);
      const reader = new FileReader();
    }
  };

  if (actionState?.success) {
    router.replace("/contact/success");
  }

  return (
    <form action={formAction} encType="multipart/form-data">
      <div className="mb-6">
        <div>
          <label htmlFor="username" className={labelStyle}>
            성함 또는 회사 *
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={style}
            placeholder="성함 또는 회사를 입력해주세요."
            // required
          />
        </div>
      </div>
      <div className="mb-6">
        <div>
          <label htmlFor="title" className={labelStyle}>
            제목 *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={style}
            placeholder="문의 제목을 입력해주세요."
            // required
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className={labelStyle}>
          내용 *
        </label>
        <textarea
          id="message"
          rows={4}
          name="message"
          className={style}
          placeholder="문의 내용을 입력해주세요."
          // required
        ></textarea>
      </div>
      <div className="mb-6">
        <label className={labelStyle} htmlFor="file">
          파일형식은 image, PDF, 또는 2MB 이하만 가능합니다.
        </label>
        <input
          className={style}
          id="file"
          type="file"
          name="file"
          accept="image/*, .pdf"
          onChange={handleFileChange}
          value={file ? (file as string) : ""}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className={labelStyle}>
          이메일 *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={style}
          placeholder="이메일을 입력해주세요."
          // required
        />
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
