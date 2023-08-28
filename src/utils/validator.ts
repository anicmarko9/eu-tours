import { TRPCClientError } from "@trpc/client";
import { z } from "zod";

type UnknownError = {
  [key: string]: string | undefined;
  message: string;
};

const formatError = (err: unknown): Error => {
  const error = err as UnknownError;
  const parsedMsg = JSON.parse(error?.message) as UnknownError[];
  error.text = parsedMsg[0]?.message;
  return new Error(error.text);
};

const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid format for email address." })
    .max(50, "Please provide shorter email address."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
});

export const validateLogin = (
  input: unknown,
): {
  email: string;
  password: string;
} => {
  try {
    return LoginSchema.parse(input);
  } catch (err) {
    const error = err as UnknownError;
    if (err instanceof TRPCClientError) {
      const parsedMsg = JSON.parse(error?.message) as UnknownError[];
      error.text = parsedMsg[0]?.message;
      console.log("HEY");
      throw error.text;
    }
    throw err;
  }
};

const RegisterSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter longer name.")
    .max(10, "Please enter shorter name."),
  email: z
    .string()
    .email({ message: "Invalid format for email address." })
    .max(50, "Please provide shorter email address."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
  passwordConfirm: z
    .string()
    .min(8, "Confirmed password must be at least 8 characters long."),
});

export const validateRegister = (
  input: unknown,
): {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
} => {
  try {
    return RegisterSchema.parse(input);
  } catch (err) {
    throw formatError(err);
  }
};
