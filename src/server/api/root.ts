import { emailRouter } from "./routers/email.router";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  email: emailRouter,
});

export type AppRouter = typeof appRouter;
