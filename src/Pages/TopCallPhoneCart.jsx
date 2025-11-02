import React from "react";
import BestSellerCard from "../Component/BestSellerCard";
import OfferWithSave from "../Component/OfferWithSave";
import minicase from "../assets/minicase.png";

const TopCallPhoneCart = () => {
  return (
    <div className="w-full h-[2632.98px] bg-white rounded-[10px] mb-5 p-6 ">
      <div className="flex gap-6">
        <div className="w-[302.5px] h-[597.39px] bg-secundary rounded-[10px] p-6  ">
          <div>
            <h5 className="text-[18px] font-bold uppercase ">categories</h5>
            <div className="py-4 px-1 mt-6 flex justify-center items-center bg-white rounded-[10px]">
              All Categories
            </div>
            <h5 className="py-5 font-bold text-[18px] ">
              Cell Phones & Tablets
            </h5>
            <ul className="text-[16px] space-y-0.5">
              <li>
                <a href="">All</a>
              </li>
              <li>
                <a href="">Iphone</a>
              </li>
              <li>
                <a href="">Samsung</a>
              </li>
              <li>
                <a href="">Xiaomi</a>
              </li>
              <li>
                <a href="">Asus</a>
              </li>
              <li>
                <a href="">Oppo</a>
              </li>
              <li>
                <a href="">Gaming Smartphone</a>
              </li>
              <li>
                <a href="">Ipad</a>
              </li>
              <li>
                <a href="">Window Tablets</a>
              </li>
              <li>
                <a href="">eReader</a>
              </li>
              <li>
                <a href="">Smartphone Chargers</a>
              </li>
              <li>
                <a href="">5G Support Smartphone</a>
              </li>
              <li>
                <a href="">Smartphone Accessories</a>
              </li>
              <li>
                <a href="">Tablets Accessories</a>
              </li>
              <li>
                <a href="">Cell Phones $200</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[967.5px] h-[602.06px] border-b-2 border-secundary bg-amber-300">
          <h5 className="text-[18px] font-bold uppercase ">
            
          </h5>
         <div>
       
         </div>
        </div>
      </div>
    </div>
  );
};

export default TopCallPhoneCart;
