"use server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function sendEmail(
  username: string,
  email: string,
  message: string,
  title: string,
  file: string,
) {
  try {
    console.log(username, title, message, file, email);
    console.log("node file", file);
    if (!email || !message || !title || !username) {
      return { message: "이메일 전송 실패", status: 400 };
    }

    const transport = nodemailer.createTransport({
      // host: 'smtp.beget.com',
      // port: 465,
      // secure: false,
      service: "gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_KEY,
      },
    });

    const mailOptions: Mail.Options = {
      from: email,
      to: process.env.GMAIL,
      subject: `${username}이 이메일을 보내왔습니다. ${email}`,
      html: `<h2>Category: ${username}</h2>
        <hr />
        <h3>Title: ${title}</h3>
        <hr />
        <p>${message}</p>
        <p>From: ${email}</p>
      `,
      attachments: [{ path: file }],
    };

    await transport.sendMail(mailOptions); // 이메일 전송
    return { message: "전송 성공!!", status: 200 };
  } catch (err) {
    console.log(err);
    return { message: "데이터 전송 실패!!", status: 500 };
  }
}