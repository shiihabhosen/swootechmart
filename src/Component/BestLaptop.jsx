import React from "react";
import toplaptopbenner from "../assets/brt.png";
import OrderButton from "./OrderButton";
import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import laptop3 from "../assets/laptop3.png";
import laptop4 from "../assets/laptop4.png";
import laptop5 from "../assets/laptop5.png";
import laptop6 from "../assets/laptop5.png";

import macboobpro from "../assets/macboobpro.png";
import speker from "../assets/speker.png";
import rgbcasing from "../assets/rgbcasing.png";
import gammingcase from "../assets/gammingcase.png";
import monitorr from "../assets/monitorr.png";
import BestSellerCard from "./BestSellerCard";
import { FaRegHeart } from "react-icons/fa6";
import Save from "./Save";
import Container from "./Container";

const BestLaptop = () => {
  return (
    <>
    <Container>
        <div className="w-full h-[880px] bg-white my-5 rounded-[10px] px-5">
        <div className=" flex justify-between py-8">
          <h5 className="font-bold uppercase ">top cellphones & tablets</h5>
          <p>
            <a href="">View All</a>
          </p>
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <img src={toplaptopbenner} alt="" className="w-[700px] h-[220px] rounded-[10px]" />
            <div className="absolute top-[30px] left-[30px] text-white">
              <h2 className="text-2xl font-medium w-[150.87px] capitalize">
                Mobok 2 superchard <span>by m2</span>
              </h2>
              <p className="py-5">Start From: <span className="text-primary">$1,199</span></p>
            </div>
          </div>
          <div className="w-[700px] h-[220px] py-7">
            <div className="grid grid-cols-3 space-y-7 ml-4">
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">Macbook</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={laptop1} alt="" />
              </div>
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">Gaming PC</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={laptop2} alt="" />
              </div>
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">Laptop Office</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={laptop3} alt="" />
              </div>
              <div className="flex gap-[50px] cursor-pointer">
                <div>
                  <h5 className="font-bold">Laptop 15’’</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={laptop4} alt="" />
              </div>
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">M1 2023</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={laptop5} alt="" />
              </div>
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">Secondhand</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={laptop6} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[474.47px]  my-5">
          <div className="flex  justify-between py-10">
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$59.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={macboobpro}
                title="Pineapple Macbook Pro 2022 M1 / 512 GB"
                productnowprice="$579.00"
              />
            </div>
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$59.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={speker}
                title="C&O Bluetooth Speaker"
                productnowprice="$979.00"
              />
            </div>
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$59.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={rgbcasing}
                title="Gigaby Custome Case, i7/ 16GB / SSD 256GB"
                productnowprice="$1,239.00 "
              />
            </div>
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$59.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={gammingcase}
                title="aMoc All-in-one Computer M1"
                productnowprice="$1,729.00"
              />
            </div>
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$59.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={monitorr}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
};

export default BestLaptop;
