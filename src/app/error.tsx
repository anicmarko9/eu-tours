'use client';

import { useEffect } from 'react';

import Layout from '@Layout/Layout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  useEffect((): void => {
    console.error(error);
  }, [error]);

  return (
    <Layout>
      <h2 className='text-4xl font-bold'>Something went wrong!</h2>
      <button
        onClick={(): void => reset()}
        className='gradientOrangeButton h-12 w-[120px] self-center rounded-lg border-2 border-white px-4 text-base font-bold capitalize tracking-wider text-white sm:text-lg lg:self-end lg:text-xl'
      >
        Try again
      </button>
    </Layout>
  );
}
