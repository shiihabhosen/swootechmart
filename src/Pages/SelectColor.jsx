import React from "react";

const SelectColor = ({imgcolo,className,colorname}) => {
  return (
    <div>
      <div className={`w-[130.59px] h-[63.58px]  gap-2 cursor-pointer  items-center  px-3 rounded-[10px] border-2 flex border-[#CCCCCC] ${className}`}>
        <img src={imgcolo} alt="" className="w-[52px] h-[35px]" />
        <div>
          <h5 className="text-[13px]">{colorname}</h5>
          <h5 className="font-bold">$569.00</h5>
        </div>
      </div>
    </div>
  );
};

export default SelectColor;
