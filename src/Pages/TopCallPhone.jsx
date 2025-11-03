import React from "react";
import Container from "../Component/Container";
import bannerhedphone from "../assets/bannerhedphon.png";
import phonepart from "../assets/phonepart.png";
import OrderButton from "../Component/OrderButton";
import PopularCategories from "./PopularCategories";
import pupoler01 from "../assets/pupoler01.png";
import pupoler02 from "../assets/pupoler02.png";
import pupoler03 from "../assets/pupoler03.png";
import pupoler04 from "../assets/pupoler04.png";
import pupoler05 from "../assets/pupoler05.png";
import pupoler06 from "../assets/pupoler06.png";
import pupoler07 from "../assets/pupoler07.png";
import pupoler08 from "../assets/pupoler08.png";
import pupoler09 from "../assets/pupoler09.png";
import pupoler10 from "../assets/pupoler10.png";
import minicase from "../assets/minicase.png";
import wacth0 from "../assets/wacth0.png";
import charger from "../assets/charger.png";
import opadpro from "../assets/opadpro.png";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import TopCallPhoneCart from "./TopCallPhoneCart";
import BestSellerCard from "../Component/BestSellerCard";
import OfferWithSave from "../Component/OfferWithSave";
import camera from "../assets/camera.png";

const TopCallPhone = () => {
  return (
    <>
      <Container>
        <div className="w-full h-[421.59px] bg-white rounded-[10px] p-6 ">
          <h5 className="text-[18px] font-bold uppercase">
            top cell phones & tablets
          </h5>
          <div className="flex items-center gap-1">
            <div className="relative my-6">
              <img
                src={bannerhedphone}
                alt=""
                className="bg-cover bg-center w-[864px] h-[310px] rounded-[10px]"
              />
              <div className="w-[350px] h-[280px]  p-[50px] absolute top-0">
                <h1 className="text-[30px] font-bold text-white">
                  Noise Cancelling{" "}
                  <span className="font-normal">Headphone</span>
                </h1>
                <p className="capitalize text-white py-4">
                  Boso Over-Ear Headphone Wifi, Voice Assistant, Low latency
                  game mde
                </p>
                <OrderButton ordertile="buy now" />
              </div>
            </div>
            <div className="relative">
              <img
                src={phonepart}
                alt=""
                className="bg-cover bg-center w-[428px] h-[310px] rounded-[10px]"
              />

              {/* Overlay content */}
              <div className="absolute top-10 ">
                <div className="flex items-start justify-between w-[360px]  ">
                  <div className="ml-10">
                    <h5 className="text-2xl font-medium w-[155px]">
                      redmi note 12 Pro+ 5g
                    </h5>
                    <p className="text-tertiary pt-2">Rise to the challenge</p>
                  </div>

                  <div className="shrink-0 ">
                    <OrderButton
                      ordertile="Buy Now"
                      className="!bg-black text-white "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] bg-white rounded-[10px] my-5 ">
          <h5 className="text-[18px] font-bold uppercase p-6">
            popular categories
          </h5>
          <div className="flex flex-wrap">
            <PopularCategories
              itemname="iPhone (iOS)"
              availableitems="74 Items"
              pupolerimg={pupoler01}
            />
            <PopularCategories
              itemname="Android"
              availableitems="35 Items"
              pupolerimg={pupoler02}
            />
            <PopularCategories
              itemname="5G Support"
              availableitems="12 Items"
              pupolerimg={pupoler03}
            />
            <PopularCategories
              itemname="Apple Tablets"
              availableitems="22 Items"
              pupolerimg={pupoler04}
            />
            <PopularCategories
              itemname="Smartphone Chargers"
              availableitems="33 Items"
              pupolerimg={pupoler05}
            />
            <PopularCategories
              itemname="Gaming"
              availableitems="9 Items"
              pupolerimg={pupoler06}
            />
            <PopularCategories
              itemname="Xiaomi"
              availableitems="52 Items"
              pupolerimg={pupoler07}
            />

            <PopularCategories
              itemname="Accessories"
              availableitems="29 Items"
              pupolerimg={pupoler08}
            />
            <PopularCategories
              itemname="Samsung Tablets"
              availableitems="26 Items"
              pupolerimg={pupoler09}
            />
            <PopularCategories
              itemname="eReader"
              availableitems="5 Items"
              pupolerimg={pupoler10}
            />
          </div>
        </div>
        {/* <TopCallPhoneCart /> */}
        <div className="w-full h-[2632.98px] bg-white rounded-[10px] mb-5 p-6 ">
          <div className="flex gap-6">
            <div className="w-[302.5px] h-[597.39px] bg-secundary rounded-[10px] p-6  ">
              <div>
                <h5 className="text-[18px] font-bold uppercase ">categories</h5>
                <div className="py-4 px-1 mt-6 flex justify-center items-center bg-white rounded-[10px]">
                  All Categories
                </div>
                <h5 className="py-5 font-bold text-[18px] ">
                  Cell Phones & Tablets
                </h5>
                <ul className="text-[16px] space-y-0.5">
                  <li>
                    <a href="">All</a>
                  </li>
                  <li>
                    <a href="">Iphone</a>
                  </li>
                  <li>
                    <a href="">Samsung</a>
                  </li>
                  <li>
                    <a href="">Xiaomi</a>
                  </li>
                  <li>
                    <a href="">Asus</a>
                  </li>
                  <li>
                    <a href="">Oppo</a>
                  </li>
                  <li>
                    <a href="">Gaming Smartphone</a>
                  </li>
                  <li>
                    <a href="">Ipad</a>
                  </li>
                  <li>
                    <a href="">Window Tablets</a>
                  </li>
                  <li>
                    <a href="">eReader</a>
                  </li>
                  <li>
                    <a href="">Smartphone Chargers</a>
                  </li>
                  <li>
                    <a href="">5G Support Smartphone</a>
                  </li>
                  <li>
                    <a href="">Smartphone Accessories</a>
                  </li>
                  <li>
                    <a href="">Tablets Accessories</a>
                  </li>
                  <li>
                    <a href="">Cell Phones $200</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[967.5px] h-[602.06px] border-b-2 border-secundary">
              <h5 className="text-[18px] font-bold uppercase ">
                Best seller in this category
              </h5>
              <div className="flex gap-3">
                <OfferWithSave
                  img={minicase}
                  title="uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB"
                  productnowprice="$1,729.00 "
                  productoldprice="$2,119.00"
                />
                <OfferWithSave
                  img={wacth0}
                  title="Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop"
                  productnowprice="$979.00"
                  productoldprice="$1,259.00"
                />
                <OfferWithSave
                  img={charger}
                  title="iSmart 24V Charger"
                  productnowprice="$9.00 "
                  productoldprice="$12.00"
                />
                <OfferWithSave
                  img={opadpro}
                  title="OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS"
                  productnowprice="$569.00 "
                  productoldprice="$759.00"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 flex gap-4">
            <div>
              <div className="w-[302.5px] h-[1655.59px] bg-secundary rounded-[10px] p-6">
                <div className="flex justify-between">
                  <h5 className="text-[18px] font-bold uppercase ">
                    categories
                  </h5>
                  <p>
                    <a href=""> Reset All</a>
                  </p>
                </div>
                <div className="flex flex-wrap space-y-5 space-x-3 py-8">
                  <div className="w-[116.84px] h-10 flex justify-center items-center bg-white rounded-[10px] ">
                    Min: $45.00{" "}
                  </div>
                  <div className="w-[98.38px] h-10 flex justify-center items-center bg-white rounded-[10px] ">
                    10.9 inch
                  </div>
                  <div className="w-[107.67px] h-10 flex justify-center items-center bg-white rounded-[10px] ">
                    Color: Red
                  </div>
                  <div className="w-[98.38px] h-10 flex justify-center items-center bg-white rounded-[10px] ">
                    128GB
                  </div>
                </div>
                <div className="w-[242.5px] h-[332px] border-b-2 ">
                  <h5 className="font-bold py-5">By Brands</h5>
                  <input
                    type="text"
                    className="w-full h-12 rounded-[5px] bg-white border-2 border-secundary"
                  />
                  <div className="space-y-3 mt-2 pt-4">
                    <div className="flex gap-3">
                      <input type="checkbox" className="w-5" />
                      <img src={brand1} alt="" />
                      <p>(15)</p>
                    </div>
                    <div className="flex gap-3">
                      <input type="checkbox" className="w-5" />
                      <img src={brand2} alt="" />
                      <p>(6)</p>
                    </div>
                    <div className="flex gap-3">
                      <input type="checkbox" className="w-5" />
                      <img src={brand3} alt="" />
                      <p>(7)</p>
                    </div>
                    <div className="flex gap-3">
                      <input type="checkbox" className="w-5" />
                      <img src={brand4} alt="" />
                      <p>(18)</p>
                    </div>
                    <div className="flex gap-3">
                      <input type="checkbox" className="w-5" />
                      <img src={brand5} alt="" />
                      <p>(1)</p>
                    </div>
                  </div>
                </div>
                {/* price range secthion */}
                <div className="mt-6">
                  <h5 className="font-bold mb-4">By Price</h5>

                  {/* Range bar */}
                  <div className="flex items-center mb-4">
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      className="w-full accent-primary"
                    />
                  </div>

                  {/* Price inputs + Go button */}
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center bg-white px-2 py-2 rounded-md border border-gray-200">
                      <span className="font-bold">$</span>
                      <input
                        type="number"
                        defaultValue="0"
                        className="w-16 text-center outline-none"
                      />
                    </div>

                    <span className="font-bold">–</span>

                    <div className="flex items-center bg-white px-2 py-2 rounded-md border border-gray-200">
                      <span className="font-bold">$</span>
                      <input
                        type="number"
                        defaultValue="10000"
                        className="w-16 text-center outline-none"
                      />
                    </div>

                    <button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-bold px-3 py-2 rounded-md">
                      Go
                    </button>
                  </div>
                </div>
                {/* <div className="w-full h-[208px] border-y-2 border-[#9999] my-10">
                <h5 className="font-bold py-5">By Rating</h5>
              </div> */}
                <div className="w-full h-[158px] ">
                  <h5 className="font-bold py-5">By Screen Size</h5>
                  <div className="flex flex-wrap space-y-2 space-x-1 ">
                    <div className="py-2 px-1 cursor-pointer flex justify-center items-center  bg-white rounded-[10px] ">
                      7” & Under
                    </div>
                    <div className="py-2 px-1 cursor-pointer flex justify-center items-center  bg-white rounded-[10px] ">
                      7.1” - 8.9”
                    </div>
                    <div className="py-2 px-1 cursor-pointer flex justify-center items-center  bg-white rounded-[10px] ">
                      9” - 10.9”
                    </div>
                    <div className="py-2 px-1 cursor-pointer flex justify-center items-center  bg-white rounded-[10px] ">
                      11” & Greater
                    </div>
                  </div>
                </div>
                <div className="w-full h-[175px] border-y-2 mt-10 border-[#9999]">
                  <h5 className="font-bold py-5">By Color</h5>
                  <div className="grid grid-cols-5 space-y-5">
                    <div className="w-[30px] h-[30px] bg-[#A42A2A] rounded-[6px] cursor-pointer"></div>
                    <div className="w-[30px] h-[30px] bg-[#2F557B] rounded-[6px] cursor-pointer"></div>
                    <div className="w-[30px] h-[30px] bg-[#439ABB] rounded-[6px] cursor-pointer"></div>
                    <div className="w-[30px] h-[30px] bg-black rounded-[6px] cursor-pointer"></div>
                    <div className="w-[30px] h-[30px] bg-white rounded-[6px] cursor-pointer"></div>
                    <div className="w-[30px] h-[30px] bg-[#1ABA1A] rounded-[6px] cursor-pointer"></div>
                    <div className="w-[30px] h-[30px] bg-[#696969] rounded-[6px] cursor-pointer"></div>
                    <div className="w-[30px] h-[30px] bg-[#534898] rounded-[6px] cursor-pointer"></div>
                  </div>
                </div>
                <div className="w-full h-[237px] space-y-3">
                  <h5 className="font-bold py-5">By Memory</h5>
                  <div className="flex justify-between ">
                    <div className=" space-y-2">
                      <div className="flex items-center gap-1">
                        <input type="checkbox" className="w-5 h-5  " />
                        <h6 className="font-medium">12GB</h6>
                        <span>(4)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="checkbox" className="w-5 h-5  " />
                        <h6 className="font-medium">8GB</h6>
                        <span>(4)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="checkbox" className="w-5 h-5  " />
                        <h6 className="font-medium">6GB</h6>
                        <span>(4)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="checkbox" className="w-5 h-5  " />
                        <h6 className="font-medium">4GB</h6>
                        <span>(4)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="checkbox" className="w-5 h-5  " />
                        <h6 className="font-medium">3GB</h6>
                        <span>(4)</span>
                      </div>
                    </div>
                    <div className=" space-y-2">
                      <div className="flex items-center gap-1">
                        <input type="checkbox" className="w-5 h-5  " />
                        <h6 className="font-medium">12GB</h6>
                        <span>(4)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="checkbox" className="w-5 h-5  " />
                        <h6 className="font-medium">8GB</h6>
                        <span>(4)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="checkbox" className="w-5 h-5  " />
                        <h6 className="font-medium">6GB</h6>
                        <span>(4)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[179px] border-y-2 border-[#9999] mt-10 ">
                  <h5 className="font-bold py-5">By Conditions</h5>
                  <div className=" space-y-2">
                    <div className="flex items-center gap-1">
                      <input type="checkbox" className="w-5 h-5  " />
                      <h6 className="font-medium">New</h6>
                      <span>(4)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input type="checkbox" className="w-5 h-5  " />
                      <h6 className="font-medium">Like New</h6>
                      <span>(4)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input type="checkbox" className="w-5 h-5  " />
                      <h6 className="font-medium">Open Box</h6>
                      <span>(4)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-4">
                {/* <img src={which} alt="" className="bg-cover bg-center " /> */}
                <div className="absolute top-0 pl-[25px] py-5 text-white uppercase ">
                  <h5 className="uppercase font-bold">OKODo</h5>
                  <h4 className="text-[24px] ">
                    hero 11+ <br /> black
                  </h4>
                  <div className="mt-5">
                    <p>FROM</p>
                    <h2 className="text-[24px] text-primary">$169</h2>
                  </div>
                </div>
                <img
                  src={camera}
                  alt=""
                  className="bg-cover bg-center rounded-[10px] w-[300px] h-[300px] "
                />
              </div>
            </div>
            {/* product secthion */}
            <div className="w-[967.5px] h-[1970px] bg-amber-600">
              {/* pasinathion top secthion */}
              <div className="flex items-center justify-between py-3 px-4">
                {/* Left side: Results count */}
                <div>
                  <h6 className="font-bold text-[14px]">
                    1 - 40{" "}
                    <span className="text-[12px] font-medium text-[#666666]">
                      of 120 results
                    </span>
                  </h6>
                </div>

                {/* Middle section: Show item (numbers) */}
                <div className="flex items-center gap-3">
                  <h6 className="text-[#666666] text-[14px]">Show item</h6>
                  <div className="flex items-center bg-[#F3F4F6] rounded-md px-3 py-1 gap-3">
                    <h5 className="cursor-pointer font-semibold text-[14px] text-black bg-[#E5E7EB] px-2 py-0.5 rounded-md">
                      24
                    </h5>
                    <h5 className="cursor-pointer font-medium text-[14px] text-[#666666] hover:text-black">
                      48
                    </h5>
                    <h5 className="cursor-pointer font-medium text-[14px] text-[#666666] hover:text-black">
                      72
                    </h5>
                  </div>
                </div>

                {/* Right section: Sort + View As */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <h6 className="text-[#666666] text-[14px]">Show item</h6>
                    <select className="border border-[#E5E7EB] rounded-md bg-[#F3F4F6] px-3 py-1 text-[14px] font-medium text-black outline-none">
                      <option>Default</option>
                      <option>Newest</option>
                      <option>Popular</option>
                    </select>
                  </div>
                  <h6 className="text-[#666666] text-[14px]">
                    <a href="">View As</a>
                  </h6>
                </div>
              </div>
              {/* all phone secthion  */}
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TopCallPhone;
