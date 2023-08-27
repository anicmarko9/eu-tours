import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SignInPage = () => {
    return (
        <div className="min-h-screen flex">
            <div className="hidden md:block md:w-1/2 bg-orange-500 md:flex justify-center items-center">
                <img src="/images/Login.png"
                    alt="Login Illustration"
                    width={600}
                    height={600}
                    className='mt-16' />
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 p-4 md:p-8 flex flex-col justify-center items-center shadow-white">
                <div className="bg-white p-8 md:p-20 rounded-lg text-center shadow-md">
                    <span className="font-semibold mb-4 md:mb-6">Sign in to continue</span>
                    <div className="flex flex-col space-y-2 md:space-y-4 mt-4 md:mt-6">
                        <button className="bg-gray-800 text-white px-4 md:px-5 py-2 md:py-3 rounded-lg font-bold hover:bg-gray-700 transition duration-300">
                            <FaGithub size={16} className="inline-block mr-2" />
                            <span>Log in with GitHub</span>
                        </button>
                        <button className="bg-red-600 text-white px-4 md:px-5 py-2 md:py-3 rounded-lg font-bold hover:bg-red-500 transition duration-300">
                            <FaGoogle size={16} className="inline-block mr-2" />
                            <span>Log in with Google</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignInPage;
