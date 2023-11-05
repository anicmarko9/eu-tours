'use client';

import { useRouter } from 'next/navigation';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import Layout from '@Layout/Layout';

export default function NotFound(): JSX.Element {
  const router: AppRouterInstance = useRouter();

  return (
    <Layout>
      <h2 className='text-4xl font-bold'>404 Page Not Found</h2>
      <button
        onClick={(): void => router.push('/')}
        className='gradientOrangeButton h-12 w-[120px] self-center rounded-lg border-2 border-white px-4 text-base font-bold capitalize tracking-wider text-white sm:text-lg lg:self-end lg:text-xl'
      >
        Return Home
      </button>
    </Layout>
  );
}
