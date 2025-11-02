import React from "react";
import RecentlyViewdCard from "./RecentlyViewdCard";
import viewpic1 from "../assets/viewpic1.png";
import viewpic2 from "../assets/viewpic2.png";
import viewpic3 from "../assets/viewpic3.png";
import viewpic4 from "../assets/viewpic4.png";
import Container from "./Container";

const RecentlyViewd = () => {
  return (
    <>
      <Container>
        <div className="w-full h-[237.69px] bg-white rounded-[10px] my-5 mb-4 ">
          <div className="p-[30px] flex gap-[30px] ">
            <h5 className="uppercase text-[18px] font-bold ">
              your recently viewed
            </h5>
            <p className="text-tertiary">
              <a href="">View all</a>
            </p>
          </div>
          <div className="flex justify-between">
            <RecentlyViewdCard
              viewpic={viewpic1}
              posithion="NEW"
              productTitle="Xomie Remid 8 Sport Water Resitance Watch"
              price="$579.00"
            />
            <RecentlyViewdCard
              viewpic={viewpic2}
              posithion="NEW"
              productTitle="Microte Surface 2.0 Laptop"
              price="$979.00"
            />
            <RecentlyViewdCard
              viewpic={viewpic3}
              posithion="NEW"
              productTitle="aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB"
              price="$579.00"
            />
            <RecentlyViewdCard
              viewpic={viewpic4}
              posithion="NEW"
              productTitle="Xomie Remid 8 Sport Water Resitance Watch"
              price="$979.00 - $1,259.00"
            />
          </div>
        </div>
        <div className="px-4">
          <h4 className="tect-[18px] font-bold py-[50px] ">
            Swoo – #1 Online Marketplace for technology
          </h4>
          <p className="w-[1150px] pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            posuere mi. Quisque iaculis dignissim scelerisque. Morbi condimentum
            sagittis leo vitae tempor. Suspendisse in dolor odio. Sed aliquet ac
            lacus ut luctus. Fusce mattis sollicitudin sem, id lobortis nibh
            ullamcorper a. Donec vehicula dolor et arcu consequat mattis. Fusce
            mattis nec nulla in scelerisque.
          </p>
          <p className="pt-5 w-[1150px]">
            Morbi pharetra sem mauris, nec aliquet ipsum vestibulum suscipit.
            Curabitur non euismod dui. Proin eget justo eu erat luctus placerat.
            Nam rhoncus ipsum ac enim faucibus, at consequat ante maximus.
            Vestibulum at nibh ac odio ultrices varius. Duis vitae libero
            mollis, lobortis ligula id, varius erat. Sed id odio dictum, laoreet
            enim ac, commodo magna. Praesent sodales porttitor maximus. Sed a
            lacus felis. Maecenas consectetur consequat orci scelerisque
            malesuada. Fusce vel orci eu tortor consequat mattis quis at ante.
            Class aptent taciti sociosqu ad litora torquent per conubi,
          </p>
        </div>
      </Container>
    </>
  );
};

export default RecentlyViewd;
