import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import laptop from "../assets/laptop.png";
import pc from "../assets/pc.png";
import headphone from "../assets/headphone.png";
import monitor from "../assets/monitor.png";

// import Slider from "react-slick";

const TopCatagorise = () => {
  //   var settings = {
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     pauseOnHover: true,
  //   };
  return (
    <>
      <div className="w-[50%] h-[226.59px] rounded-[10px] bg-white">
        <div className="pt-8 px-10 flex justify-between">
          <div className="flex gap-7">
            <h5 className="uppercase font-bold text-[18px] ">top categories</h5>
            <a href="">
              <p>View all</p>
            </a>
          </div>
          <div className="w-[80px] h-[30px] rounded-[30px] bg-[#EBEDF3] flex justify-between items-center px-2  text-2xl">
            <IoMdArrowRoundBack className="cursor-pointer text-primary " />
            <IoMdArrowRoundForward className="cursor-pointer text-primary" />
          </div>
        </div>

        <div className="w-[682px] h-[135px] mx-[30px] flex justify-between">
          <div className=" w-[140px] h-[135px]  cursor-pointer py-8  ">
            <img src={laptop} alt="" />
            <h4 className="text-[14px] font-bold py-2 text-center">Laptops</h4>
          </div>
          <div className=" w-[140px] h-[135px] cursor-pointer py-8 ">
            <img src={pc} alt="" />
            <h4 className="text-[14px] font-bold py-2 text-center">
              PC Gaming
            </h4>
          </div>
          <div className=" w-[140px] h-[135px] cursor-pointer py-8 ">
            <img src={headphone} alt="" />
            <h4 className="text-[14px] font-bold py-2 text-center">
              Headphones
            </h4>
          </div>
          <div className=" w-[140px] h-[135px] cursor-pointer py-8 ">
            <img src={monitor} alt="" />
            <h4 className="text-[14px] font-bold py-2 text-center">Monitors</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCatagorise;
