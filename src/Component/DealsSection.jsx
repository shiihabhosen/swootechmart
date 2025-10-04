import React from "react";
import phone1 from "../assets/phone01.png";
import phone2 from "../assets/phone02.png";
import phone3 from "../assets/phone03.png";
import phone4 from "../assets/phone04.png";
import joistik from "../assets/joistik.png";
import tablet from "../assets/tablet.png";
import { FaRegHeart } from "react-icons/fa6";
import Button from "./Button";
import Save from "./Save";
import PriceCard from "./PriceCard";

const DealsSection = () => {
  return (
    <div className="px-6 py-10 bg-gray-100">
      {/* Header */}
      <div className="w-[971px] bg-primary text-white uppercase font-bold text-lg px-6 py-3 rounded-[10px]">
        Deals of the day
      </div>

      {/* Main Content */}
      <div className="flex justify-between bg-white rounded-b-lg shadow-md">
        {/* LEFT: Phone Thumbnails */}
        <div className="w-[30%] flex items-center justify-center gap-4 p-6">
          <div className="flex flex-col space-y-4">
            <img
              src={phone1}
              alt="phone1"
              className="w-14 h-20 cursor-pointer"
            />
            <img
              src={phone2}
              alt="phone2"
              className="w-14 h-20 cursor-pointer"
            />
            <img
              src={phone3}
              alt="phone3"
              className="w-14 h-20 cursor-pointer"
            />
            <img
              src={phone4}
              alt="phone4"
              className="w-14 h-20 cursor-pointer"
            />
          </div>
          <div className="relative">
            <img src={phone1} alt="main phone" className="w-60 h-auto" />
            <div className="absolute top-2 left-2">
              <Save saveparsen='$199.00'/>
            </div>
            <div className="absolute top-2 right-2 bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <FaRegHeart className="text-xl text-gray-600" />
            </div>
          </div>
        </div>

        {/* MIDDLE: Product Info */}
        <div className="w-[40%] p-6 flex flex-col justify-center">
          <h3 className="font-semibold text-lg mb-2">
            Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
          </h3>
          {/* <div className="flex items-center gap-3 mb-4">
            <span className="text-red-500 text-2xl font-bold">$569.00</span>
            <span className="text-gray-500 line-through">$759.00</span>
          </div> */}
          <PriceCard realpice='$569.00' oldprice='$759.00'/>

          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
            <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
            <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
            <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
          </ul>

          <div className="flex gap-3 mb-4">
            <Button
              className="bg-[#f4fcf4] text-green-600 px-4 py-1"
              children="Free Shipping"
            />
            <Button
              className="bg-[#fef5f4] text-red-500 px-4 py-1"
              children="Free Gift"
            />
          </div>

          <div className="flex">
            <h4 className="uppercase font-medium w-[150.02px]">
              {" "}
              hurry up! Promotion will expires in{" "}
            </h4>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col font-bold rounded-[6px] bg-[#ebedf3] rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": 15 } /* as React.CSSProperties */}
                    aria-live="polite"
                    // aria-label={counter}
                  >
                    15
                  </span>
                </span>
                days
              </div>
              <div className="flex flex-col font-bold rounded-[6px] bg-[#ebedf3] rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": 10 } /* as React.CSSProperties */}
                    aria-live="polite"
                    // aria-label={counter}
                  >
                    10
                  </span>
                </span>
                hours
              </div>
              <div className="flex flex-col font-bold rounded-[6px] bg-[#ebedf3] rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": 24 } /* as React.CSSProperties */}
                    aria-live="polite"
                    // aria-label={counter}
                  >
                    24
                  </span>
                </span>
                min
              </div>
              <div className="flex flex-col font-bold rounded-[6px] bg-[#ebedf3] rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span
                    style={{ "--value": 59 } /* as React.CSSProperties */}
                    aria-live="polite"
                    // aria-label={counter}
                  >
                    59
                  </span>
                </span>
                sec
              </div>
            </div>
          </div>
          {/* For TSX uncomment the commented types below */}

          <div className="w-[430px]  bg-gray-100 rounded-3xl h-3.5 my-7">
            <div
              className="bg-primary h-3.5 rounded-3xl text-xs text-white text-center"
              role="progressbar"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "30%" }}
            >
              30%
            </div>
          </div>
          <p className="pt-1 text-sm">
            Sold: <span className="font-bold">26/75</span>
          </p>
        </div>

        {/* RIGHT: Extra Deals */}
        <div className="w-[30%] mt-[-75px] space-y-3.5 p-6">
          <div className="  bg-gray-100 rounded-lg ">
            <img
              src={joistik}
              alt="controller"
              className="w-full h-full bg-center bg-cover"
            />
          </div>
          <div className="  bg-gray-100 rounded-lg ">
            <img
              src={tablet}
              alt="controller"
              className="w-full h-full bg-center bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
