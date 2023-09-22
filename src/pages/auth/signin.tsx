import React from "react";
import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";
import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import Logo from "src/components/images/Logo";

const SignIn: NextPage = () => {
  return (
    <main className="min-h-screen flex">
      <div className="hidden md:w-1/2 h-screen bg-gradient-to-t md:flex justify-center items-center overflow-hidden">
        <img src="https://images.pexels.com/photos/3254754/pexels-photo-3254754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
        <div className="flex flex-col mt-4 md:mt-6 p-8 md:p-12 rounded-lg">
        <h1 className="descriptionText text-3xl tracking-tighter text-lighterBlack">Sign in to EU TOURS</h1>
          <p className="descriptionText text-secondary mb-4">
            Unleash your European adventure today and 
            immerse yourself in the beauty of its diverse 
            destinations.
          </p>
          
      
          <div className=" mx-auto">
          <button
            onClick={() => void signIn("github", { callbackUrl: "/" })}
            className=" text-white bg-[#1C2128]  md:px-5 py-2 md:py-3 my-2 border-b rounded-full hoverButton hover:text-bodyBg flex items-center"
          >
            <FaGithub size={32} className="inline-block mr-2" />
            <span>Sign in with GitHub</span>
          </button>
          <button
            onClick={() => void signIn("google", { callbackUrl: "/" })}
            className="text-white bg-[#DB4437] px-4 md:px-5 py-2 md:py-3 my-2 border-b rounded-full hoverButton hover:text-bodyBg flex items-center"
          >
            <FaGoogle size={32} className="inline-block mr-2" />
            <span>Sign in with Google</span>
          </button>
          </div>

        </div>
      </div>
    </main>
  );
};

export default SignIn;
