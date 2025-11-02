import React from "react";
import BestSellerCard from "./BestSellerCard";
import headphone from "../assets/head.png";
import opadpro from "../assets/opadpro.png";
import minicase from "../assets/minicase.png";
import applewath from "../assets/applewath.png";
import charger from "../assets/charger.png";
import Save from "./Save";
import { FaRegHeart } from "react-icons/fa6";
import Container from "./Container";

const BestSeller = () => {
  return (
    <>
     <Container>
       <div className="h-[636.47px] my-5 py-5 w-full bg-white rounded-[10px]">
        <div className="flex justify-between px-4">
          <div className="px-10 uppercase flex gap-10  ">
            <h5 className="cursor-pointer">Best seller</h5>
            <h5 className="cursor-pointer">New in</h5>
            <h5 className="cursor-pointer">popular</h5>
          </div>
          <p>
            <a href="">View All</a>
          </p>
        </div>
        <div className="w-[1120px] h-[524.47px] my-10 mx-auto">
          <div className="flex justify-between gap-4">
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$199.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={headphone}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
              />
            </div>
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$199.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={opadpro}
                title="OPod Pro 12.9 Inch M1 2023,64GB + Wifi, GPS"
                productnowprice="$569.00"
                productoldprice='$759.00'
              />
            </div>
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$59.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={minicase}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
              />
            </div>
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$9.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={applewath}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
              />
            </div>
            <div>
              <div className="flex gap-[80px]">
                <Save saveparsen="$5.00" />
                <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                  <FaRegHeart className=" text-2xl" />
                </div>
              </div>
              <BestSellerCard
                img={charger}
                title="BOSO 2 Wireless On Ear Headphone"
                productnowprice="$359.00"
              />
            </div>
          </div>
        </div>
      </div>
     </Container>
    </>
  );
};

export default BestSeller;
