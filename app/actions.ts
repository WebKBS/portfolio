"use server";
import { z } from "zod";

// 폼 스키마 정의
const schema = z.object({
  username: z
    .string()
    .min(2, { message: "이름은 2자 이상이어야 합니다." })
    .max(50, { message: "이름은 50자 이하여야 합니다." }),
  title: z
    .string()
    .min(2, { message: "제목은 2자 이상이어야 합니다." })
    .max(100, { message: "제목은 100자 이하여야 합니다." }),
  message: z
    .string()
    .min(10, { message: "메시지는 10자 이상이어야 합니다." })
    .max(500, { message: "메시지는 500자 이하여야 합니다." }),
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요." }),
});

export const contactEmail = async (prevState: any, formData: FormData) => {
  try {
    const { username, email, message, title } = schema.parse({
      username: formData.get("username"),
      email: formData.get("email"),
      message: formData.get("message"),
      title: formData.get("title"),
    });

    const file = formData.get("file") as File;

    if (file.size !== 0) {
      if (file.size > 2097152) {
        return { success: false, message: "파일 크기는 2MB 이하여야 합니다." };
      } else if (
        !(file.type.match(/image.*/) || file.type.match(/application\/pdf/))
      ) {
        return {
          success: false,
          message: "파일 형식은 image, PDF만 가능합니다.",
        };
      }
    }

    console.log(username, email, message, title, file);

    return { success: true, message: "문의하기를 성공적으로 전송하였습니다." };
  } catch (error) {
    // 만약 유효성 검사 오류가 발생하면 여기서 잡힐 것입니다.
    if (error instanceof z.ZodError) {
      console.error("유효성 검사 오류:", error.errors);
      return {
        success: false,
        message: "전송에 실패하였습니다.",
        error: error.errors,
      };
    }
  }
};
