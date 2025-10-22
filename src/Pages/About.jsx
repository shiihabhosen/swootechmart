import React from "react";
import aboutbanner from "../assets/aboutbanner.png";
import aboutmanpic from "../assets/aboutmanpic.png";
const About = () => {
  return (
    <>
      <div className="w-full h-[544.77px] p-5">
        <div className="relative">
          <img src={aboutbanner} alt="" className="w-full" />
          <div className="absolute top-[100px] left-[96px]">
            <h2 className="text-[45px] font-bold w-[356.43px] ">
              Best experience
            </h2>
            <h4 className="text-[45px]">always wins</h4>
            <p className="w-[370px]">
              #1 Online Marketplace for Electronic & Technology in Mahanttan, CA
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center mt-7 ">
          <div>
            <h3 className="text-[18px] font-bold uppercase w-[284.47px]">
              our purpose is to{" "}
              <span className="text-primary">enrich and enhance lives</span>{" "}
              through technology
            </h3>
          </div>
          <div className="flex gap-[75px]">
            <div>
              <h2 className="text-[40px] font-bold">$12,5M</h2>
              <p className="w-[134.39px] ">total revenue from 2001 - 2023</p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold">$12K+</h2>
              <p className="w-[170px] ">
                orders delivered successful on everyday
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold">725+</h2>
              <p className="w-[134.39px] ">
                store and office in U.S and worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[420px] flex justify-between px-[100px] bg-white mt-8">
        <div>
          <img src={aboutmanpic} alt="" className="w-[646px] rounded-[10px]" />
        </div>
        <div className="w-[646px] h-full rounded-[10px] bg-tertiary py-[95px] px-[100px] ">
          <h4 className="font-bold">
            We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all.
          </h4>
          <p className="pt-[30px] ">
            Within our markets, millions of people around the world connect,
            both online and offline, to make, sell and buy unique goods. We also
            offer a wide range of Seller Services and tools that help creative
            entrepreneurs start, manage & scale their businesses.
          </p>
           <button  className="group mt-10 relative w-[154.66px] h-[50px] bg-primary rounded-[10px] flex justify-center items-center uppercase text-white  overflow-hidden overflow-x-hidden px-8 py-2">
            <span className="relative z-10">checkout</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
