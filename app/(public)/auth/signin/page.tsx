"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <section className="flex min-h-screen items-center justify-center dark:bg-[#121212] px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="w-full max-w-md rounded-xl bg-card dark:bg-black px-6 py-10 shadow-lg dark:border dark:border-strokedark"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-center text-black dark:text-white mb-8">
          Login to Your Account
        </h2>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4 mb-6">
          <button
            aria-label="Sign in with Google"
            className="flex w-full items-center justify-center gap-3 rounded-md border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-gray-800 transition hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white dark:hover:border-primary dark:hover:bg-primary/5"
          >
            <span className="w-5 h-5">
              {/* Google Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_95:967)">
                  <path
                    d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                    fill="#34A853"
                  />
                  <path
                    d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_95:967">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Signup with Google
          </button>

          <button
            aria-label="Sign in with Github"
            className="flex w-full items-center justify-center gap-3 rounded-md border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-gray-800 transition hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white dark:hover:border-primary dark:hover:bg-primary/5"
          >
            <span className="w-5 h-5">
              {/* Github Icon */}
              <svg
                fill="currentColor"
                width="22"
                height="22"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z" />
              </svg>
            </span>
            Signup with Github
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <hr className="w-full border-stroke dark:border-strokedark" />
          <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
            Or login with email
          </span>
          <hr className="w-full border-stroke dark:border-strokedark" />
        </div>

        {/* Email Login Form */}
        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full rounded-md border border-stroke bg-white px-4 py-3 text-black placeholder-gray-400 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-[#1E1E1E] dark:text-white dark:placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) =>
              setData({ ...data, password: e.target.value })
            }
            className="w-full rounded-md border border-stroke bg-white px-4 py-3 text-black placeholder-gray-400 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-[#1E1E1E] dark:text-white dark:placeholder-gray-500"
          />

          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" />
              Keep me signed in
            </label>
            <Link href="#" className="hover:text-primary">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-black py-3 text-white transition hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-black hover:text-primary dark:text-white dark:hover:text-primary font-medium"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Signin;
