import React from "react";
import bannerhedphone from "../assets/bannerhedphon.png";
import bannerjoistik from "../assets/bannerjoistik.png";
import bannerkeybord from "../assets/bannerkeybord.png";
import which from "../assets/which.png";
import camera from "../assets/camera.png";
import OrderButton from "./OrderButton";

const Banner = () => {
  return (
    <>
      <div className=" flex justify-between w-full h-[446px] px-4 mt-4">
        <div className="w-[309px] h-[447px] bg-white rounded-[10px] px-[55px]">
          <h5 className="text-red-500 py-3 font-semibold"> SALE 40% OFF</h5>
          <ul className="space-y-2 font-semibold">
            <li>
              <a href="">Laptops</a>
            </li>
            <li>
              <a href="">PC & Computers</a>
            </li>
            <li>
              <a href="">Cell Phones</a>
            </li>
            <li>
              <a href="">Tablets</a>
            </li>
            <li>
              <a href="">Gaming & VR</a>
            </li>
            <li>
              <a href="">Networking</a>
            </li>
            <li>
              <a href="">Cameras</a>
            </li>
            <li>
              <a href="">Sounds</a>
            </li>
            <li>
              <a href="">Office</a>
            </li>
            <li>
              <a href="">Storage, USB</a>
            </li>
            <li>
              <a href="">Accessories</a>
            </li>
            <li>
              <a href="">Clearance</a>
            </li>
          </ul>
        </div>
        <div className="w-[825px] h-full ">
          <div className="relative">
            <img
              src={bannerhedphone}
              alt=""
              className="bg-cover bg-center w-full h-[310px] rounded-[10px]"
            />
            <div className="w-[350px] h-[280px]  p-[50px] absolute top-0">
              <h1 className="text-[30px] font-bold text-white">
                Noise Cancelling <span className="font-normal">Headphone</span>
              </h1>
              <p className="capitalize text-white py-4">
                Boso Over-Ear Headphone Wifi, Voice Assistant, Low latency game
                mde
              </p>
              {/* <button className="uppercase py-[10px] px-[15px] bg-white rounded-[10px] font-medium cursor-pointer">buy now</button> */}
              {/* <button className="relative uppercase flex py-[10px] font-medium cursor-pointer px-[15px] items-center justify-center overflow-hidden bg-white text-black rounded-[10px] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary before:duration-500 before:ease-out hover:shadow-primary hover:text-white hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">buy now</span>
              </button> */}
              <OrderButton ordertile='buy now'/>
            </div>
          </div>
          <div>
            <div className="flex justify-between py-4 ">
              <div className="relative">
                <img
                  src={bannerjoistik}
                  alt=""
                  className="bg-cover bg-center  rounded-[10px]"
                />
                <div className="absolute top-0 w-[150.16px] py-5 pl-5">
                  <h5 className="font-medium">
                    Sono Playgo 5 from{" "}
                    <span className="text-primary">$569</span>
                  </h5>
                  <h5 className="uppercase underline cursor-pointer py-5">
                    Discover now
                  </h5>
                </div>
              </div>
              <div className="relative">
                <img
                  src={bannerkeybord}
                  alt=""
                  className="bg-cover bg-center  rounded-[10px]"
                />
                <div className="absolute top-0 w-[200.16px] py-5 pl-4">
                  <h5 className="font-medium w-[126.9px] text-white">
                    Logitek Bluetooth
                    <span className="text-[#FFC107]">Keyboard</span>
                  </h5>
                  <h5 className="text-white cursor-pointer py-5">
                    Best for all device
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[324.98px] h-full ">
          <div className="relative">
            <img src={which} alt="" className="bg-cover bg-center " />
            <div className="absolute top-0 pl-[170px] py-5">
              <h5 className="uppercase">xomia</h5>
              <h4 className="text-[19px] font-bold w-[110.81px]">
                Sport Water Resistance Watch
              </h4>
            </div>
          </div>
          <div className="relative mt-4">
            {/* <img src={which} alt="" className="bg-cover bg-center " /> */}
            <div className="absolute top-0 pl-[25px] py-5 text-white uppercase ">
              <h5 className="uppercase font-bold">OKODo</h5>
              <h4 className="text-[24px] ">hero 11+ <br /> black</h4>
              <div className="mt-5">
                <p>FROM</p>
                <h2 className="text-[24px] text-primary">$169</h2>
              </div>
            </div>
            <img src={camera} alt="" className="bg-cover bg-center rounded-[10px] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
