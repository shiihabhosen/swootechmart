import React from "react";
import BrandNewCrad from "./BrandNewCrad";
import computercase from "../assets/computercase.png";
import lgmonitor from "../assets/lgmonitor.png";
import chear from "../assets/chear.png";
import ipedmini from "../assets/ipedmini.png";
import Container from "./Container";

const BrandNew = () => {
  return (
    <>
    <Container>
        <div className="h-[498.88px] w-full bg-white my-4 px-7 rounded-[10px] ">
        <h4 className="font-bold uppercase py-8">brand new for you</h4>
        <div className="w-full h-[377.88px] flex justify-between ">
          <BrandNewCrad
            img={computercase}
            productitle="Zumac Steel Computer Case"
            productdetails="And an option to upgrade every three years"
          />
          <BrandNewCrad
            img={lgmonitor}
            productitle="Summer Sale with Sale up to 50% OFF for Foam Gaming Chair."
            productdetails="And an option to upgrade every three years"
          />
          <BrandNewCrad
            img={chear}
            productitle="Summer Sale with Sale up to 50% OFF for Foam Gaming Chair."
            productdetails="And an option to upgrade every three years"
          />
          <BrandNewCrad
            img={ipedmini}
            productitle="iPed Pro Mini 6 - Powerful l in hand"
            productdetails="From $19.99/month for 36 months. $280.35 final payment due in month 37"
          />
        </div>
      </div>
    </Container>
    </>
  );
};

export default BrandNew;
