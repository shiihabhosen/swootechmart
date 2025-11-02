import React from "react";
import BrandCard from "./BrandCard";
import TopCatagorise from "./TopCatagorise";
import laptop from "../assets/laptop.png";
import Container from "./Container";

const BrandSection = () => {
  return (
    <>
      <Container>
        <div className=" mt-4 flex gap-4">
          <BrandCard />
          <TopCatagorise img={laptop} name="Laptop" />
        </div>
      </Container>
    </>
  );
};

export default BrandSection;
