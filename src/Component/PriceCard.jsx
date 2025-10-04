import React from "react";

const PriceCard = ({realpice ,oldprice,className}) => {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className={`text-red-500 text-2xl font-bold ${className}`}>{realpice}</span>
        <span className="text-gray-500 line-through">{oldprice}</span>
      </div>
    </>
  );
};

export default PriceCard;
