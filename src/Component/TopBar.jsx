import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Container from "./Container";

const TopBar = () => {
  return (
    <>
      <Container>
        <div className="w-full h-10  text-center bg-white flex justify-between items-center px-4">
          <div className="flex gap-4">
            <div className="w-[99.39px] h-7 bg-secundary rounded-[6px] text-center">
              <p> Hotline 24/7</p>
            </div>
            <h5 className="font-bold">(025) 3886 25 16</h5>
          </div>
          <div className=" flex gap-4">
            <a href="">Sell on Swoo</a>
            <a href="">Order Tracki</a>
            <div className="w-[99.39px] h-7 items-center gap-1 border-r-2 flex justify-center text-center">
              <h5>USD</h5>
              <BsChevronDown />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TopBar;
