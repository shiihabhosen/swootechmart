import React from "react";
import SameProducCard from "./SameProducCard";
import bestspeker from "../assets/bestspeker.png";
import bestmuse from '../assets/bestmuse.png'
import bestprojector from '../assets/bestprojector.png'
import samepic1 from "../assets/samepic1.png";
import samepic2 from "../assets/samepic2.png";
import samepic3 from "../assets/samepic3.png";
import samepic4 from "../assets/samepic4.png";
import samepic5 from "../assets/samepic5.png";
import samepic6 from "../assets/samepic6.png";
import samepic7 from "../assets/samepic7.png";
import samepic8 from "../assets/samepic8.png";
import samepic9 from "../assets/samepic9.png";
import samepic10 from "../assets/samepic10.png";
import samepic11 from "../assets/samepic11.png";
import samepic12 from "../assets/samepic12.png";

const SameProduct = () => {
  return (
    <>
      <div className="flex justify-between">
        <SameProducCard
          areaHeading="Audios & Cameras"
          areaImg={bestspeker}
          areatext="Best Speaker 2023"
          areitemproduct1={samepic1}
          areitemproduct2={samepic2}
          areitemproduct3={samepic3}
          areitemproduct4={samepic4}
          productname1="Speaker"
          productname2="DSLR Camera"
          productname3="Earbuds"
          productname4="Microphone"
        />
        <SameProducCard
          areaHeading="gaming"
          className='!text-black w-[110px] uppercase'
          areaImg={bestmuse}
          areatext="wireless rgb gaming mouse"
          areitemproduct1={samepic5}
          areitemproduct2={samepic6}
          areitemproduct3={samepic7}
          areitemproduct4={samepic8}
          productname1="Speaker"
          productname2="DSLR Camera"
          productname3="Earbuds"
          productname4="Microphone"
        />
        <SameProducCard
          areaHeading="office equipments"
          areaImg={bestprojector}
          areitemproduct1={samepic9}
          areitemproduct2={samepic10}
          areitemproduct3={samepic11}
          areitemproduct4={samepic12}
          productname1="Printers"
          productname2="Network"
          productname3="Security"
          productname4="Projectors"
        />
      </div>
    </>
  );
};

export default SameProduct;
