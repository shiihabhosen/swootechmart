import React from "react";
import Container from "./Container";

const SameProducCard = ({
  areaHeading,
  areaImg,
  areatext,
  areitemproduct1,
  areitemproduct2,
  areitemproduct3,
  areitemproduct4,
  productname1,
  productname2,
  productname3,
  productname4,
  className,
}) => {
  return (
    <>
      <Container>
        <div className="w-[400px] h-[742.19px] bg-white rounded-[10px] my-4 px-7">
          <div className="flex justify-between py-[30px]">
            <h5 className="font-bold uppercase">{areaHeading}</h5>
            <p>
              <a href="">View all</a>
            </p>
          </div>
           <div className="relative ">
            <img
              src={areaImg}
              alt=""
              className="rounded-[10px] bg-center bg-cover  "
            />
            <h5
              className={`absolute w-[56.52px] top-[30px] left-[30px] text-white font-bold ${className}`}
            >
              {areatext}
            </h5>
          </div>
          <div className="w-[368px] h-[410px] my-[30px] py-6 border-secundary  border-t-2  grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center cursor-pointer">
              <div className=" ">
                <img
                  src={areitemproduct1}
                  alt="Speaker"
                  className=" object-contain"
                />
              </div>
              <h5 className="text-gray-800 font-semibold mt-3">
                {productname1}
              </h5>
              <p className="text-gray-500 text-sm">12 Items</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className=" ">
                <img
                  src={areitemproduct2}
                  alt="Speaker"
                  className=" object-contain"
                />
              </div>
              <h5 className="text-gray-800 font-semibold mt-3">
                {productname2}
              </h5>
              <p className="text-gray-500 text-sm">12 Items</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className=" ">
                <img
                  src={areitemproduct3}
                  alt="Speaker"
                  className=" object-contain"
                />
              </div>
              <h5 className="text-gray-800 font-semibold mt-3">
                {productname3}
              </h5>
              <p className="text-gray-500 text-sm">12 Items</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className=" ">
                <img
                  src={areitemproduct4}
                  alt="Speaker"
                  className=" object-contain"
                />
              </div>
              <h5 className="text-gray-800 font-semibold mt-3">
                {productname4}
              </h5>
              <p className="text-gray-500 text-sm">12 Items</p>
            </div>
          </div> 
        </div>
      </Container>
    </>
  );
};

export default SameProducCard;
