import React from "react";
import { TbChevronDown } from "react-icons/tb";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBer = () => {
  return (
    <>
      <div className="w-full h-[75px] bg-primary px-4 flex justify-between items-center ">
        <div>
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md w-[600px] h-11">
            {/* Category Section */}
            <button className="flex items-center gap-2 px-4 bg-white text-black font-semibold">
              All Categories
              <TbChevronDown className="text-[20px]" />
            </button>
            {/* Input Section */}
            <input
              type="text"
              placeholder="Search anything..."
              className="flex-1 px-4 outline-none text-gray-700"
            />

            {/* Search Icon */}
            <button className="px-4 text-2xl">
              <FaMagnifyingGlass />
            </button>
          </div>
        </div>
        <h5 className="uppercase text-white ">free shipping over $199</h5>
        <h5 className="uppercase text-white ">30 days money back</h5>
        <h5 className="uppercase text-white ">100% secure payment</h5>
      </div>
    </>
  );
};

export default SearchBer;
