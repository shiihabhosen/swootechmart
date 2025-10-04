import React from "react";
import logo from "../assets/logo.png";
import { TbChevronDown } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";

const Navber = () => {
  return (
    <>
      <div className="w-full h-[70px] flex justify-between items-center px-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="">
          <ul className="font-bold uppercase flex gap-5 ">
            <li className="flex items-end">
              <a href="">homes</a>
              <TbChevronDown className="text-[20px]" />
            </li>
            <li className="flex items-end">
              <a href="">pages</a>
              <TbChevronDown className="text-[20px]" />
            </li>
            <li className="flex items-end">
              <a href="">products</a>
              <TbChevronDown className="text-[20px]" />
            </li>
            <li className="flex items-end">
              <a href="">contact</a>
            </li>
          </ul>
        </div>
        <div className="w-[457.55px] h-full  flex ">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
              <FaRegHeart className=" text-2xl" />
            </div>
            <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
              <FaRegHeart className=" text-2xl" />
            </div>
            <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
              <FaRegHeart className=" text-2xl" />
            </div>
            <div className="uppercase">
              <p className="text-[#666666]">welcome</p>
              <h4 className="font-bold text-[14px]">log in / Register</h4>
            </div>
          </div>
          <div className="flex">
            <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full "></div>
            <div className="w-6 text-white h-6 bg-primary flex justify-center items-center rounded-full mt-8 ml-8 absolute">
              5
            </div>
          </div>
          <div className=" ml-7 uppercase">
            <p className="text-[#666666]">cart</p>
            <h4 className="font-bold">$1,689.00</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
