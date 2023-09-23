import { createNextApiHandler } from '@trpc/server/adapters/next';

import { type AppRouter, appRouter } from '@Server/api/root';
import { createTRPCContext } from '@Server/api/trpc';

export default createNextApiHandler<AppRouter>({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    process.env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
          );
        }
      : undefined,
  batching: {
    enabled: true,
  },
});
