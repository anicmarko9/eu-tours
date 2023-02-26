import { Session } from "@prisma/client";
import jwt from "jsonwebtoken";
import { prisma } from "./../db";
import bcrypt from "bcryptjs";

const signToken = (id: string): string => {
  if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN)
    throw new Error("Please try other login methods.");
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSession = async (userId: string): Promise<Session> => {
  const token: string = signToken(userId);
  const session: Session = await prisma.session.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      sessionToken: token,
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
    include: {
      user: true,
    },
  });
  return session;
};

export const signUp = async (input: {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}): Promise<Session> => {
  try {
    if (input.password !== input.passwordConfirm)
      throw new Error("Passwords are not the same!");
    input.password = await bcrypt.hash(input.password, 12);
    input.passwordConfirm = "";
    const newUser = await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
      },
    });
    const session = await createSession(newUser.id);
    await prisma.account.create({
      data: {
        provider: "jwt",
        providerAccountId: session.sessionToken,
        type: "custom",
        userId: newUser.id,
        password: input.password,
      },
    });
    return session;
  } catch (err) {
    const error = err as Error;
    if (error.message.includes("email"))
      throw new Error("User with this email already exists.");
    throw err;
  }
};
