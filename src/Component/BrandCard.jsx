import React from "react";
import brand1 from "../assets/brand01.png";
import brand2 from "../assets/brand02.png";
import brand3 from "../assets/brand03.png";
import brand4 from "../assets/brand04.png";
import brand5 from "../assets/brand05.png";
import brand6 from "../assets/brand06.png";
import brand7 from "../assets/brand07.png";
import brand8 from "../assets/brand08.png";
import brand9 from "../assets/brand09.png";
import brand10 from "../assets/brand10.png";

const BrandCard = () => {
  return (
    <>
      <div className="w-[50%] h-[226.59px] rounded-[10px] bg-white">
        <div className="py-8 px-10">
          <div className="flex justify-between">
            <h5 className="uppercase font-bold text-[18px] ">
              featured brands
            </h5>
            <a href="">
              <p>View all</p>
            </a>
          </div>
          <div className="grid grid-cols-5 space-y-[30px] py-10 ">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
            <img src={brand9} alt="" />
            <img src={brand10} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCard;
