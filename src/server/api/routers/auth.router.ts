import { signUp } from "src/server/services/auth.service";
import { validateLogin, validateRegister } from "src/utils/validator";
import { publicProcedure, createTRPCRouter } from "../trpc";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input((input: unknown) => {
      return validateRegister(input);
    })
    .mutation(async ({ input }) => await signUp(input)),
});
