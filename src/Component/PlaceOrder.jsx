import React from "react";

const PlaceOrder = ({className,placenaem}) => {
  return (
    <div>
      <button className={`w-full h-[50px] bg-green-600 rounded-[10px] uppercase flex justify-center items-center font-bold cursor-pointer text-white shadow-md hover:bg-green-700 transition duration-150 ${className}`}>
        {placenaem}
      </button>
    </div>
  );
};

export default PlaceOrder;
