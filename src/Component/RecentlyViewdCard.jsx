import React from "react";


const RecentlyViewdCard = ({viewpic,className,productTitle,price,posithion}) => {
  return (
    <>
      <div className="w-[25%] h-[116.69px] bg-white rounded-xl flex items-center justify-between px-5 py-2">
        <div className="relative">
          <img
            src={viewpic}
            alt="product"
            className="w-[100px] h-auto object-contain"
          />
          <span className={`absolute top-1 left-1 bg-black text-white text-[10px] font-semibold px-2 py-[2px] rounded-md ${className}`}>
           {posithion}
          </span>
        </div>
        <div className="flex flex-col justify-center w-[180px]">
          <span className="text-gray-400 text-sm">(152)</span>
          <h3 className="text-[14px] leading-tight font-bold text-black">
            {productTitle}
          </h3>
          <p className="text-[18px] font-bold text-black mt-1">{price}</p>
        </div>
      </div>
    </>
  );
};

export default RecentlyViewdCard;
