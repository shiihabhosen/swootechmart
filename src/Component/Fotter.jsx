import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import FotterCard from "./FotterCard";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import Container from "./Container";

const Fotter = () => {
  const [showcurrency, setShowcurrency] = useState(true);
  const [showLanguage, setShowLanguage] = useState(true);

  return (
    <>
      <div className="w-full h-[764px] bg-white my-6">
        <Container>
          <div className="flex justify-between pt-[80px]">
            <div className="px-5 ">
              <h5 className="text-[18px] font-bold uppercase">
                Swoo - 1st NYC tech online market
              </h5>
              <p className="uppercase pt-[30px] ">hotline 24/7</p>
              <h2 className="text-[30px] font-bold text-primary">
                (025) 3686 25 16
              </h2>
              <p className="w-[320px] pt-[30px] ">
                257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
              </p>
              <p>contact@Swootechmart.com</p>
              <div className="pt-10 flex gap-5">
                <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
                  <RiFacebookFill className="text-2xl" />
                </div>
                <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
                  <FaYoutube className="text-2xl" />
                </div>
                <div className="w-[50px] h-[50px] rounded-full cursor-pointer bg-[#E1E3EB] flex justify-center items-center ">
                  <IoLogoPinterest className="text-2xl" />
                </div>
              </div>
            </div>
            <div>
              <FotterCard
                catagorryTitle="top Categories"
                item1="Laptops"
                item2="PC & Computers"
                item3="Cell Phones"
                item4="Tablets"
                item5="Gaming & VR"
                item6="networks"
                item7="Cameras"
                item8="Sounds"
                item9="Office"
              />
            </div>
            <div>
              <FotterCard
                catagorryTitle="company"
                item1="About Swoo"
                item2="Contact"
                item3="Career"
                item4="Blog"
                item5="Sitemap"
                item6="Store Locations"
              />
            </div>
            <div>
              <FotterCard
                catagorryTitle="help center"
                item1="Customer Service"
                item2="Policy"
                item3="Terms & Conditions"
                item4="Trach Order"
                item5="FAQs"
                item6="My Account"
                item7="Product Support"
              />
            </div>
            <div>
              <FotterCard
                catagorryTitle="partner"
                item1="Become Seller"
                item2="Affiliate"
                item3="Advertise"
                item4="Partnership"
              />
            </div>
          </div>
          <div className="flex py-[60px] gap-[190px]">
            <div className=" px-5 flex gap-7">
              <div className="">
                <button
                  onClick={() => setShowcurrency(!showcurrency)} // এখানে দিলাম
                  className="flex items-center justify-center gap-2 py-[10px] px-[34px] border-2 border-secundary rounded-[10px]"
                >
                  <span>USD</span>
                  {showcurrency ? (
                    <IoChevronDown className="text-2xl" />
                  ) : (
                    <IoChevronUpOutline className="text-2xl" />
                  )}
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => setShowLanguage(!showLanguage)} // এখানে দিলাম
                  className="flex items-center justify-center gap-2 py-[10px] px-[34px] border-2 border-secundary rounded-[10px]"
                >
                  <span>USD</span>
                  {showLanguage ? (
                    <IoChevronDown className="text-2xl" />
                  ) : (
                    <IoChevronUpOutline className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <h5 className="text-[18px] font-bold uppercase">
                subscribe & get <span className="text-red-500">10% off</span>{" "}
                for your first order
              </h5>
              <div className="relative flex justify-end items-center pt-[30px]">
                <input
                  type="text"
                  className="shadow-md w-[700px] px-8 py-2 focuse: outline-none rounded-[5px]"
                  placeholder="Enter your email address "
                />
                <h6 className="uppercase px-8 font-bold text-primary cursor-pointer absolute ">
                  subscribe
                </h6>
              </div>
              <p className="italic text-tertiary py-[10px] ">
                By subscribing, you’re accepted the our{" "}
                <span className="underline  underline-offset-[4px]">
                  <a href="">Policy</a>
                </span>
              </p>
            </div>
          </div>
          <div className="  flex justify-between items-center border-t-1 border: text-tertiary px-5 ">
            <p>
              © 2024{" "}
              <span className="font-bold">
                <a href="https://www.facebook.com/shiihabhosen">
                  😽shihab hosen
                </a>
              </span>{" "}
              . All Rights Reserved
            </p>
            <div className="flex gap-6">
              <img src={card1} alt="" />
              <img src={card2} alt="" />
              <img src={card3} alt="" />
              <img src={card4} alt="" />
              <img src={card5} alt="" />
            </div>
            <p className="text-[#0D6EFD] font-bold"> Mobile Site</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Fotter;
