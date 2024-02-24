import { inputStyle, labelStyle } from "./InputField";

interface FileFieldProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileField = ({ handleFileChange }: FileFieldProps) => {
  return (
    <div className="mb-6">
      <label className={labelStyle} htmlFor="file">
        회사정보 및 소개자료
      </label>
      <input
        className={inputStyle}
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
  );
};

export default FileField;
