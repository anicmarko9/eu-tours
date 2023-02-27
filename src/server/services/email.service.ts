import { User } from "@prisma/client";
import nodemailer from "nodemailer";

export const sendVerificationEmail = async (user: User): Promise<void> => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST as string,
    port: parseInt(process.env.EMAIL_PORT as string),
    auth: {
      user: process.env.EMAIL_USERNAME as string,
      pass: process.env.EMAIL_PASSWORD as string,
    },
  });
  const message = {
    from: process.env.EMAIL_FROM as string,
    to: user.email,
    subject: "Verify your email address",
    text: `Please click the following link to verify your email address: ${process.env.NEXTAUTH_URL}/auth/verify-email?id=${user.id}`,
  };

  await transport.sendMail(message);
};
