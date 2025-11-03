import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import React, { useState } from "react";
import orderpic from "../assets/orderpic.png";
import { MdOutlineClose } from "react-icons/md";
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
import paypal from "../assets/payple.png";
import PlaceOrder from "../Component/PlaceOrder";
import Container from "../Component/Container";

const Checkout = () => {
  const [country, setCountry] = useState(null);
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <div className="w-full h-[1526.77px] px-4 rounded-[10px] my-5 bg-white">
          <h4 className="text-[18px] font-bold uppercase mb-4">
            Find us on Google Map
          </h4>
          <div className=" flex justify-between">
            <div className="w-[724.83px] h-[1435px] ">
              <div className="w-full h-[61px] rounded-[10px] bg-[#E9E7E8] flex items-center px-[50px]">
                Returning customer?{" "}
                <span className="text-red-500 underline underline-offset-3">
                  <a href="">Click here to log in</a>
                </span>
              </div>
              <form className="space-y-6 mt-[30px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Mark"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Cole"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                    <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country / Region <span className="text-red-500">*</span>
                  </label>

                  {/* <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue="US"
                >
                </input> */}
                  <CountrySelect
                    containerClassName="form-group"
                    onChange={(_country) => setCountry(_country)}
                    placeHolder="Select Country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="House number and street name ..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit, etc (Optional)"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State / County <span className="text-red-500">*</span>
                  </label>

                  {/* <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue="US"
                >
                </input> */}
                  <CountrySelect
                    containerClassName="form-group"
                    onChange={(_country) => setCountry(_country)}
                    placeHolder="Select Country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p>Create an account?</p>
                </div>
                <h4 className="font-bold py-[25px]">Additional Information</h4>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Message{" "}
                    <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <textarea
                    placeholder="Note about your order, e.g. special note for delivery"
                    className="w-full h-[117px] border border-gray-300 rounded-lg px-3 py-2 
               focus:outline-none focus:ring-2 focus:ring-green-500 
               placeholder:text-gray-400 placeholder:align-top resize-none"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="w-[509.16px] h-[1435px] flex flex-col justify-between ">
              {/* ---- উপরের অংশ ---- */}
              <div>
                <div className="w-full h-[61px] rounded-[10px] bg-[#E9E7E8] flex items-center justify-between px-[50px]">
                  <span>Have a coupon?</span>
                  <span className="text-red-500 underline underline-offset-3">
                    <a href="">Click here to enter your code</a>
                  </span>
                </div>
              </div>

              {/* ---- নিচের অংশ (Your Order) ---- */}
              <div className="">
                <p className="pb-4 font-bold text-lg">Your Order</p>

                {/* Order Summary Box */}
                <div className="w-full bg-[#EDEFF5] rounded-[10px] p-6 mb-5">
                  <div className="flex w-full justify-between uppercase items-center border-b pb-3 font-medium">
                    <p>Product</p>
                    <p>Sub Total</p>
                  </div>

                  <div className="pt-5">
                    <div className="flex justify-between pb-4">
                      <div className="flex gap-3">
                        <img
                          src={orderpic}
                          alt=""
                          className="w-[50px] h-[50px] rounded-md object-cover"
                        />
                        <p className="w-[210px] font-medium">
                          Pinnaeple Macbook Pro 2022 M1 / 512GB
                        </p>
                      </div>
                      <div className="text-2xl cursor-pointer">
                        <MdOutlineClose />
                      </div>
                    </div>

                    <div className="w-[130px] h-[38px] shadow-md rounded-[10px] flex justify-between items-center px-3 text-2xl mb-5">
                      <HiMinusSm
                        className="cursor-pointer"
                        onClick={() => setCount(count - 1)}
                      />
                      <p>{count}</p>
                      <HiPlusSm
                        className="cursor-pointer"
                        onClick={() => setCount(count + 1)}
                      />
                    </div>

                    <div className="flex justify-between py-2">
                      <p>Worldwide Standard Shipping Free</p>
                      <p className="text-red-500">+ $9.50</p>
                    </div>

                    <div className="flex justify-between py-4 font-bold text-[20px] border-t mt-2">
                      <h4>Order Total</h4>
                      <h4 className="text-green-600">$1,746.50</h4>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="w-full bg-[#E1E3EB] rounded-[10px] p-6">
                  <div className="flex gap-2 items-start mb-4">
                    <input type="checkbox" className="w-5 h-5 rounded-[10px]" />
                    <p>
                      <span className="font-bold">Direct Bank Transfer</span>{" "}
                      <br />
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>

                  <div className="flex gap-3 mb-3">
                    <input type="checkbox" className="w-5 h-5 rounded-[10px]" />
                    <h4 className="font-bold">Cash on Delivery</h4>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-[10px]"
                      />
                      <h4 className="font-bold">
                        Paypal{" "}
                        <span className="text-[#0D6EFD] underline underline-offset-3 font-normal">
                          <a href="">What’s Paypal?</a>
                        </span>
                      </h4>
                    </div>
                    <img src={paypal} alt="" className="h-5" />
                  </div>

                  <PlaceOrder placenaem="Place Order" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
