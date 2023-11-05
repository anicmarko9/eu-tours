'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

export default function Login(): JSX.Element {
  return (
    <main className='flex min-h-screen'>
      <div className='hidden items-center justify-center bg-gradient-to-t from-darkerOrange to-lighterOrange md:flex md:w-1/2'>
        <Image
          src='/images/signin.png'
          alt='Login Illustration'
          width={600}
          height={600}
          priority
        />
      </div>
      <div className='flex w-full flex-col items-center justify-center shadow-white md:w-1/2'>
        <div className='mt-4 flex flex-col space-y-4 rounded-lg bg-white p-8 text-center shadow-md md:mt-6 md:space-y-4 md:p-12'>
          <span className='font-semibold'>Sign in to continue</span>
          <button
            onClick={() => void signIn('github', { callbackUrl: '/' })}
            className='gradientBlueButton flex items-center rounded-lg border px-4 py-2 text-white md:px-5 md:py-3'
          >
            <FaGithub size={16} className='mr-2 inline-block' />
            <span>Sign in with GitHub</span>
          </button>
          <button
            onClick={() => void signIn('google', { callbackUrl: '/' })}
            className='gradientOrangeButton flex items-center rounded-lg border px-4 py-2 text-white md:px-5 md:py-3'
          >
            <FaGoogle size={16} className='mr-2 inline-block' />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </main>
  );
}
