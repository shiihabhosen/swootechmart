import React from "react";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";

const Fotter = () => {
  return (
    <>
      <div className="w-full h-[764px] bg-amber-200">
        <div className=" text-[18px] font-bold uppercase pt-[80px] px-5 flex justify-between">
          <h5>Swoo - 1st NYC tech online market</h5>
          <h5>top Categories</h5>
          <h5>company</h5>
          <h5>help center</h5>
          <h5>partner</h5>
        </div>
        <div className="px-5 pt-[30px]">
          <p className="uppercase ">hotline 24/7</p>
          <h2 className="text-[30px] font-bold text-primary">
            (025) 3686 25 16
          </h2>
          <p className="w-[320px] pt-[30px] ">
            257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
          </p>
          <p>contact@Swootechmart.com</p>
          <div className="pt-10 flex gap-5">
            <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
              <FaTwitter  className="text-2xl"/>
            </div>
            <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
             <RiFacebookFill className="text-2xl" />
            </div>
            <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
              <FaInstagram className="text-2xl" />
            </div>
            <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
             <FaYoutube  className="text-2xl"/>
            </div>
            <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
              <IoLogoPinterest className="text-2xl" />
            </div>
          </div>
          <div className="py-[90px] px-5">
            <div className="w-[99.98px] h-[43px] shadow-sm rounded-[10px]">
                <option value="">USD</option>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
