import React from "react";

const AboutCart = ({servicetitle,servicepera,className}) => {
  return (
    <>
      <div className="w-[448px] h-[235.56px] p-6 rounded-[10px] bg-white flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h5 className={`font-bold w-[120px] uppercase ${className}`}>{servicetitle}</h5>
          <div className="w-[60px] h-[60px] bg-primary rounded-full"></div>
        </div>
        <p className="w-[392.23px]">
        {servicepera}
        </p>
      </div>
    </>
  );
};

export default AboutCart;
