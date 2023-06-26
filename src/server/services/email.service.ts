import type { user } from "@prisma/client";
import nodemailer from "nodemailer";
import { prisma } from "./../db";

export const sendVerificationEmail = async (user: user): Promise<void> => {
  try {
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
      text: `Please click the following link to verify your email address: ${
        process.env.NEXTAUTH_URL as string
      }/auth/verify-email?id=${user.id}`,
    };
    await transport.sendMail(message);
  } catch (err) {
    throw new Error("Technical difficulties with email operator.");
  }
};

export const verifyEmail = async (id: string): Promise<void> => {
  try {
    const user: user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        emailVerified: new Date(Date.now()),
      },
    });
    if (!user) throw new Error("This user doesn't exist.");
  } catch (err) {
    throw err;
  }
};
