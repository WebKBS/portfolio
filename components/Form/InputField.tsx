interface InputFieldProps {
  label: string;
  labelEssential?: boolean;
  type: "text" | "password" | "email" | "number";
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  validateState: boolean;
  inputValue: boolean | string;
  textarea?: boolean;
}

export const inputStyle =
  "block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500";
export const labelStyle =
  "mb-2 block text-sm font-medium text-gray-900 dark:text-white";

const InputField = ({
  label,
  labelEssential,
  type,
  name,
  placeholder,
  value,
  onChange,
  validateState,
  inputValue,
  textarea,
}: InputFieldProps) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className={labelStyle}>
        {label} {labelEssential && <span className="text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          className={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={5}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          className={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {!validateState && inputValue !== "" ? (
        <p className="mt-2 text-xs text-red-500">
          {name === "username"
            ? "이름은 2자 이상, 50자 이하여야 합니다."
            : name === "title"
              ? "제목은 2자 이상, 100자 이하여야 합니다."
              : name === "message"
                ? "내용는 10자 이상, 500자 이하여야 합니다."
                : name === "email"
                  ? "올바른 이메일 주소를 입력해주세요."
                  : ""}
        </p>
      ) : (
        inputValue !== "" && (
          <p className="mt-2 text-xs text-green-500">Success!</p>
        )
      )}
    </div>
  );
};

export default InputField;
