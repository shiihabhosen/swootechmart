import React from "react";

const OrderButton = ({ordertile,className}) => {
  return (
    <>
      <button className={`relative uppercase flex py-[10px] font-medium cursor-pointer px-[15px] items-center justify-center overflow-hidden bg-white text-black rounded-[10px] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary before:duration-500 before:ease-out hover:shadow-primary hover:text-white hover:before:h-56 hover:before:w-56 ${className}`}>
        <span className="relative z-10">{ordertile}</span>
      </button>
    </>
  );
};

export default OrderButton;
