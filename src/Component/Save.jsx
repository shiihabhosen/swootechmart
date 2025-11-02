import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const Save = ({ className, saveparsen }) => {
  return (
    <div className="flex justify-between">
      <div
        className={`w-[95.08px] h-[49.59px] bg-primary rounded-[10px] px-3 text-white ${className}`}
      >
        <p>save</p>
        <p className="font-medium">{saveparsen}</p>
      </div>

    </div>
  );
};

export default Save;
