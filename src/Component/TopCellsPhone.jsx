import React from "react";
import topsellsbanner from "../assets/topsellsbanner.png";
import OrderButton from "./OrderButton";
import iphone from "../assets/iphone.png";
import android from "../assets/android.png";
import support from "../assets/support.png";
import gamming from "../assets/gamming.png";
import xiami from "../assets/xiami.png";
import accessories from "../assets/accessories.png";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";
import phone5 from "../assets/phone5.png";
import BestSellerCard from "./BestSellerCard";
import { FaRegHeart } from "react-icons/fa6";
import Save from "./Save";

const TopCellsPhone = () => {
  return (
    <>
      <div className="w-full h-[880px] bg-white px-5">
        <div className=" flex justify-between py-8">
          <h5 className="font-bold uppercase ">top cellphones & tablets</h5>
          <p>
            <a href="">View All</a>
          </p>
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <img src={topsellsbanner} alt="" className="w-[700px] h-[220px]" />
            <div className="absolute top-[30px] left-[30px]">
              <h2 className="text-2xl font-medium w-[150.87px] uppercase">
                redmi note 12 Pro+ 5g
              </h2>
              <p className="py-5">Rise to the challenge</p>
              <OrderButton
                ordertile="shop now"
                className="!bg-black text-white"
              />
            </div>
          </div>
          <div className="w-[700px] h-[220px] py-7">
            <div className="grid grid-cols-3 space-y-7">
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">iPhone (iOS)</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={iphone} alt="" />
              </div>
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">Android</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={android} alt="" />
              </div>
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">5G Support</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={support} alt="" />
              </div>
              <div className="flex gap-[50px] cursor-pointer">
                <div>
                  <h5 className="font-bold">Gaming</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={gamming} alt="" />
              </div>
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">Xiaomi</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={xiami} alt="" />
              </div>
              <div className="flex gap-5 cursor-pointer">
                <div>
                  <h5 className="font-bold">Accessories</h5>
                  <p className="text-tertiary">72 Items</p>
                </div>
                <img src={accessories} alt="" />
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
                img={phone1}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
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
                img={phone2}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
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
                img={phone3}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
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
                img={phone4}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
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
                img={phone5}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCellsPhone;
