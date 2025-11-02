import React from "react";
import appdownpic from "../assets/apppic.png";
import Container from "./Container";

const AppDownload = () => {
  return (
    <>
      <Container>
       <div className="flex justify-between gap-4 mt-9">
         <div className="relative ">
          <img src={appdownpic} alt="" />
          <div className="absolute top-10 left-[380px]">
            <h2 className="text-[40px] font-bold text-[#FFE400]">10% Back</h2>
            <p className="w-[180px] text-white">
              Earn 10% Cash back on Swootech.{" "}
              <span className="underline underline-offset-4">
                <a href="">Learn How</a>
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="relative">
            <img src={appdownpic} alt="" />
            <div className="absolute top-10 left-[380px]">
              <h2 className="text-[40px] font-bold text-[#FFE400]">10% Back</h2>
              <p className="w-[180px] text-white">
                Earn 10% Cash back on Swootech.{" "}
                <span className="underline underline-offset-4">
                  <a href="">Learn How</a>
                </span>
              </p>
            </div>
          </div>
        </div>
       </div>
      </Container>
    </>
  );
};

export default AppDownload;
