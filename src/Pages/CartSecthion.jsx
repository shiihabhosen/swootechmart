import React from "react";
import Cart from "./Cart";
import cartimg1 from "../assets/cartimg1.png";
import cartimg2 from "../assets/cartimg2.png";
import cartimg3 from "../assets/cartimg3.png";

const CartSecthion = () => {
  return (
    <>
      <div className="relative h-[987px] p-12 bg-white flex gap-[230px]">
        <div className="space-y-6">
          <Cart
            cartimg={cartimg1}
            productpera="SROK Smart Phone 128GB, Oled Retina"
            price="$579.00"
          />
          <Cart
            cartimg={cartimg2}
            productpera="SROK Smart Phone 128GB, Oled Retina"
            price="$579.00"
          />
          <Cart
            cartimg={cartimg3}
            productpera="SROK Smart Phone 128GB, Oled Retina"
            price="$579.00"
          />
        </div>

        {/* Absolute positioned green box */}
        <div className="absolute w-[401.33px] h-[379px] border-2 border-primary rounded-[10px] bottom-[50px] right-[100px]">
          <div className="p-[30px] ">
            <h5 className="text-[24px] font-bold">Order Summary</h5>
            <div className="w-[339.33px] border-tertiary items-center h-[52px] border-b-2 flex justify-between">
              <p className="text-tertiary">Sub Total:</p>
              <p>$1,000.00</p>
            </div>
            <div className="w-[339.33px] border-tertiary items-center h-[52px] border-b-2 flex justify-between">
              <p className="text-tertiary">Shpping estimate:</p>
              <p>$600.00</p>
            </div>
            <div className="w-[339.33px] border-tertiary items-center h-[52px] border-b-2 flex justify-between">
              <p className="text-tertiary">Tax estimate:</p>
              <p>$137.00</p>
            </div>
            <div className="flex py-[15px] justify-between font-bold">
              <h4>Order total:</h4>
              <h4>$1,737.00</h4>
            </div>
          </div>
          <button  className="group ml-[123px] relative w-[154.66px] h-[50px] bg-primary rounded-[10px] flex justify-center items-center uppercase text-white  overflow-hidden overflow-x-hidden px-8 py-2">
            <span className="relative z-10">checkout</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSecthion;
