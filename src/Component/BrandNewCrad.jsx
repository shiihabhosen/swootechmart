import React from "react";

import Button from "./Button";
import OrderButton from "./OrderButton";

const BrandNewCrad = ({img,productitle,productdetails}) => {
  return (
    <>
      <div className="h-full w-[302.5px]">
        <img src={img} alt="" className="bg-center bg-cover rounded-[10px] " />
        <h5 className="font-bold py-3">{productitle}</h5>
        <p className="text-[15px] font-normal py-3 text-[#666666]">{productdetails}</p>
       <OrderButton ordertile='Shop now' className='!bg-white  text-primary border-2 border-primary'/>
      </div>
    </>
  );
};

export default BrandNewCrad;
