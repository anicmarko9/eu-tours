import { signUp, verifyEmail } from "src/server/services/auth.service";
import { sendVerificationEmail } from "src/server/services/email.service";
import { validateLogin, validateRegister } from "src/utils/validator";
import { z } from "zod";
import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input((input: unknown) => {
      return validateRegister(input);
    })
    .mutation(async ({ input }) => await signUp(input)),
  sendEmail: protectedProcedure
    .input(
      z.object({
        user: z.string(),
      })
    )
    .mutation(
      async ({ input }) => await sendVerificationEmail(JSON.parse(input.user))
    ),
  verifyEmail: publicProcedure
    .input(
      z.object({
        id: z.string().cuid("Invalid token"),
      })
    )
    .mutation(async ({ input }) => await verifyEmail(input.id)),
});
