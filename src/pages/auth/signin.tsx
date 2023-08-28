import React from "react";
import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";
import type { NextPage } from "next";
import { signIn } from "next-auth/react";

const SignIn: NextPage = () => {
  return (
    <main className="min-h-screen flex">
      <div className="hidden md:w-1/2 bg-gradient-to-t from-darkerOrange to-lighterOrange md:flex justify-center items-center">
        <Image
          src="/images/signin.png"
          alt="Login Illustration"
          width={600}
          height={600}
          priority
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center shadow-white">
        <div className="flex flex-col space-y-4 md:space-y-4 mt-4 md:mt-6 bg-white p-8 md:p-12 rounded-lg text-center shadow-md">
          <span className="font-semibold">Sign in to continue</span>
          <button
            onClick={() => void signIn("github", { callbackUrl: "/" })}
            className="gradientBlueButton text-white px-4 md:px-5 py-2 md:py-3 rounded-lg border flex items-center"
          >
            <FaGithub size={16} className="inline-block mr-2" />
            <span>Sign in with GitHub</span>
          </button>
          <button
            onClick={() => void signIn("google", { callbackUrl: "/" })}
            className="gradientOrangeButton text-white px-4 md:px-5 py-2 md:py-3 rounded-lg border flex items-center"
          >
            <FaGoogle size={16} className="inline-block mr-2" />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
