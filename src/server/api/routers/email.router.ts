import type { User } from "@prisma/client";
import { verifyEmail } from "src/server/services/email.service";
import { sendVerificationEmail } from "src/server/services/email.service";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const emailRouter = createTRPCRouter({
  sendEmail: protectedProcedure.mutation(
    async ({ ctx }) => await sendVerificationEmail(ctx.session.user as User)
  ),
  verifyEmail: protectedProcedure.mutation(
    async ({ ctx }) => await verifyEmail(ctx.session.user.id)
  ),
});
