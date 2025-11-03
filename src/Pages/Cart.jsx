import React from "react";
import Save from "../Component/Save";
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
import Button from "../Component/Button";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import Container from "../Component/Container";
const Cart = ({ cartimg, productpera, className, price }) => {
  return (
    <>
      <Container>
        <div className="flex">
          <div className=" px-5 h-[282px] flex items-center  rounded-[10px] bg-[#E2E4EB]">
            <div className="relative">
              <img
                src={cartimg}
                alt="cart"
                className="rounded-[10px] w-[220px] h-[250px] "
              />
              <Save saveparsen="$199.00" className="absolute top-0 left-0" />
            </div>

            <div className="pl-4">
              <h5 className="font-bold">{productpera}</h5>
              <h4 className={`font-bold text-red-500 py-4 ${className}`}>
                {price}
              </h4>
              <div className="w-[130px] h-[38px] shadow-md rounded-[10px] flex justify-between items-center px-3 text-2xl mb-5">
                <HiMinusSm className="cursor-pointer " />
                <p>1</p>
                <HiPlusSm className="cursor-pointer " />
              </div>
              <Button>free shiping</Button>
              <div className="flex items-center gap-3 font-medium mt-3">
                <BsCheckCircleFill className="text-primary text-2xl" />
                <h5 className="text-2xl"> In stock</h5>
              </div>
            </div>

            <div className="w-10 mt-[-200px] ml-[200px] h-10 hover:bg-rose-500 hover:text-white bg-white rounded-full flex justify-center items-center text-2xl cursor-pointer">
              <MdOutlineClose />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
