import React, { useState } from "react";
import loginimg from "../assets/logimpageimg.png";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";


const Login = () => {
  const [showeye, setShoweye] = useState(true);
  return (
    <>
      <div className="w-full h-[623.39px] py-[100px] bg-white mt-[50px] justify-center flex  gap-[190px]">
        <div>
          <img src={loginimg} alt="" />
        </div>
        <form className="w-[507.16px] h-full">
          <h3 className="text-[28px] font-bold text-primary">Welcome Back</h3>
          <p className="text-[14px] font-normal uppercase tracking-[4px] pt-2 text-tertiary">
            Login to continue
          </p>

          {/* Email Field */}
          <div className="pt-[30px] space-y-2">
            <label htmlFor="email" className="block mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full py-2 border border-[#CCCCCC] px-4 rounded-[6px] focus:outline-none"
              placeholder="Example@gmail.com"
            />
          </div>

          {/* Password Field (same style as email) */}
          <div className="pt-[30px] space-y-2">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showeye ? "password" : "text"}
                className="w-full py-2 border border-[#CCCCCC] px-4 rounded-[6px] focus:outline-none"
                placeholder="......."
              />
              {showeye ? (
                <IoMdEyeOff
                  className="absolute top-2 right-3 text-2xl cursor-pointer"
                  onClick={() => setShoweye(!showeye)}
                />
              ) : (
                <IoEye
                  className="absolute top-2 right-3 text-2xl cursor-pointer"
                  onClick={() => setShoweye(!showeye)}
                />
              )}
            </div>
          </div>
          <p className="text-tertiary underline pt-1">
            <a href="">Forget Password ? </a>
          </p>
          {/* <button className="uppercase py-3  px-6 bg-primary text-white rounded-[10px]  ">login</button> */}
          <button className="group mt-10 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-neutral-200 duration-500">
            <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
              Login
            </div>
            <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
              <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
          <p className="uppercase pt-[15px]">new user ? <span className="text-primary"><a href="">Sign Up</a></span></p>
        </form>
      </div>
    </>
  );
};

export default Login;
