import type { user } from '@prisma/client';

import { verifyEmail } from '@Server/services/email.service';
import { sendVerificationEmail } from '@Server/services/email.service';
import { createTRPCRouter, protectedProcedure } from '@Server/api/trpc';

export const emailRouter = createTRPCRouter({
  sendEmail: protectedProcedure.mutation(
    async ({ ctx }) => await sendVerificationEmail(ctx.session.user as user),
  ),
  verifyEmail: protectedProcedure.mutation(
    async ({ ctx }) => await verifyEmail(ctx.session.user.id),
  ),
});
