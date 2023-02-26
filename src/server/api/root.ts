import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(() => "Hello World"),
});

export type AppRouter = typeof appRouter;
