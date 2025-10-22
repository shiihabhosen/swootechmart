import React from "react";

const FotterCard = ({item1,item2,item3,item4,item5,item6,item7,item8,item9,catagorryTitle}) => {
  return (
    <>
      <div className="">
        <h5 className="text-[18px] font-bold uppercase px-5">{catagorryTitle}</h5>
        <ul className="space-y-3 pt-[30px] px-5 capitalize text-tertiary">
          <li>
            <a href="">{item1}</a>
          </li>
          <li>
            <a href="">{item2}</a>
          </li>
          <li>
            <a href="">{item3}</a>
          </li>
          <li>
            <a href="">{item4}</a>
          </li>
          <li>
            <a href="">{item5}</a>
          </li>
          <li>
            <a href="">{item6}</a>
          </li>
          <li>
            <a href="">{item7}</a>
          </li>
          <li>
            <a href="">{item8}</a>
          </li>
          <li>
            <a href="">{item9}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FotterCard;
