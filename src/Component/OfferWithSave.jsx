import React from "react";
import Button from "./Button";
import { BsCheckCircleFill } from "react-icons/bs";
import Save from "./Save";

const OfferWithSave = ({ img, title, productnowprice, productoldprice }) => {
  return (
    <>
      <div className="w-[224px] cursor-pointer mt-10 ">
        <Save saveparsen="$59.00" />
        <img src={img} alt="" className="w-full" />
        <h4 className="font-bold">{title}</h4>
        <div className="flex items-center gap-2">
          <h4 className="text-[22px] py-3 font-semibold">{productnowprice}</h4>
          <h4 className="text-gray-500 line-through text-[18px]">
            {productoldprice}
          </h4>
        </div>
        <div className="flex justify-between">
          <Button
            className="bg-[#f4fcf4] text-green-600 "
            children="Free Shipping"
          />
          <Button className="bg-[#fef5f4] text-red-500" children="Free Gift" />
        </div>
        <div className="flex items-center gap-3 font-medium py-5">
          <BsCheckCircleFill className="text-primary text-2xl" />
          <h5 className="text-2xl"> In stock</h5>
        </div>
      </div>
    </>
  );
};

export default OfferWithSave;
