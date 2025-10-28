import React from "react";
import Container from "../Component/Container";
import details0 from "../assets/details0.png";
import details01 from "../assets/details01.png";
import details02 from "../assets/details02.png";
import details03 from "../assets/details03.png";
import imgcolo01 from "../assets/imgcolor01.png";
import imgcolo02 from "../assets/imgcolor02.png";
import imgcolo03 from "../assets/imgcolor03.png";
import giftcart from "../assets/giftcart.png";
import sponsor from "../assets/sponsor.png";
import Button from "../Component/Button";
import SelectColor from "./SelectColor";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { AiOutlineDribbble } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import PlaceOrder from "../Component/PlaceOrder";
import paypallogo from "../assets/paypallogo.png";
import { FaHeart } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import paymetoth from "../assets/pay.png";
import { TbTruckDelivery } from "react-icons/tb";
import head from "../assets/minihead.png";
import applewath from "../assets/applewath.png";
import tablet from "../assets/tablet.png";
import joistik from "../assets/joistik.png";
import discupthinpic from "../assets/discupthinpic.png";
import phonereviw from "../assets/phonereviw.png";
import phonereviw0 from "../assets/phonereviw0.png";
import BestSellerCard from "../Component/BestSellerCard";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";
import phone5 from "../assets/phone5.png";
import Save from "../Component/Save";
import { FaRegHeart } from "react-icons/fa6";
import New from "../Component/New";
import RecentlyViewdCard from "../Component/RecentlyViewdCard";
import viewpic1 from "../assets/viewpic1.png";
import viewpic2 from "../assets/viewpic2.png";
import viewpic3 from "../assets/viewpic3.png";
import viewpic4 from "../assets/viewpic4.png";

const ProductDetails = () => {
  return (
    <Container>
      {/* product section */}
      <div className="w-full h-[850.23px] bg-white p-5 flex justify-between gap-6">
        <div className="w-[524.16px] h-[638px] shadow-md">
          <div className="relative">
            <img src={details0} alt="" className="w-[524.16px] h-[550px]" />
            <span className="absolute top-1 left-10 bg-black text-white text-[10px] font-semibold px-3 py-[3px] rounded-md uppercase">
              New
            </span>
          </div>
          <div className="mt-[-12px] flex gap-5">
            <img
              src={details01}
              alt=""
              className="w-[100px] h-[100px]  cursor-pointer"
            />
            <img
              src={details02}
              alt=""
              className="w-[100px] h-[100px]  cursor-pointer"
            />
            <img
              src={details03}
              alt=""
              className="w-[100px] h-[100px]  cursor-pointer"
            />
          </div>
        </div>
        <div className="w-[400px] h-full ">
          <h5 className="font-bold">
            Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone
          </h5>
          <h4 className="font-bold text-[22px]">$569.00 - $609.00</h4>

          <ul className="list-disc ml-5 space-y-1 text-[13px]">
            <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
            <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
            <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
          </ul>
          <div className="mt-5">
            <div className="flex gap-3 mb-4">
              <Button
                className="bg-[#f4fcf4] text-green-600 px-4 py-1"
                children="Free Shipping"
              />
              <Button
                className="bg-[#fef5f4] text-red-500 px-4 py-1"
                children="Free Gift"
              />
            </div>
          </div>
          <div className="w-full h-[260px] border-y-2 border-[#CCCCCC] space-y-5 mt-8">
            <div className="flex gap-3 pt-4">
              <h5 className="font-bold uppercase">Color: </h5>
              <p className="text-tertiary">Midnight Blue</p>
            </div>
            <div className=" flex justify-center gap-5">
              <SelectColor imgcolo={imgcolo01} colorname="Midnight Blue" />
              <SelectColor imgcolo={imgcolo02} colorname="Deep Purple" />
              <SelectColor imgcolo={imgcolo03} colorname="Space Black" />
            </div>
            <div className="flex gap-3">
              <h5 className="font-bold uppercase">memory size:</h5>
              <p className="text-tertiary">128GB</p>
            </div>
            <div className="flex gap-1">
              <div className="w-[64.72px] h-9 rounded-[10px] border-2 border-[#CCCCCC] cursor-pointer flex justify-center items-center">
                64GB
              </div>
              <div className="w-[64.72px] h-9 rounded-[10px] border-2 border-[#CCCCCC] cursor-pointer flex justify-center items-center">
                128GB
              </div>
              <div className="w-[64.72px] h-9 rounded-[10px] border-2 border-[#CCCCCC] cursor-pointer flex justify-center items-center">
                256GB
              </div>
              <div className="w-[64.72px] h-9 rounded-[10px] border-2 border-[#CCCCCC] cursor-pointer flex justify-center items-center">
                512GB
              </div>
            </div>
          </div>
          <div>
            <img src={giftcart} alt="" className="my-5" />
            <div className="flex gap-3">
              <h5 className="font-bold uppercase">SKU:</h5>
              <p className="text-tertiary">ABC025168</p>
            </div>
            <div className="flex gap-3">
              <h5 className="font-bold uppercase">Category:</h5>
              <p className="text-tertiary">Cell Phones & Tablets</p>
            </div>
            <div className="flex gap-3">
              <h5 className="font-bold uppercase">Brand:</h5>
              <p className="text-primary">sumsong</p>
            </div>
            <div className="flex gap-3 pt-5">
              <div className="w-10 h-10 rounded-full cursor-pointer bg-[#E2E4EB] flex items-center justify-center">
                <a href="">
                  <FaTwitter />
                </a>
              </div>
              <div className="w-10 h-10 rounded-full cursor-pointer bg-[#E2E4EB] flex items-center justify-center">
                <a href="">
                  <ImFacebook />
                </a>
              </div>
              <div className="w-10 h-10 rounded-full cursor-pointer bg-[#E2E4EB] flex items-center justify-center">
                <a href="">
                  <IoLogoInstagram />
                </a>
              </div>
              <div className="w-10 h-10 rounded-full cursor-pointer bg-[#E2E4EB] flex items-center justify-center">
                <a href="">
                  <FaYoutube />
                </a>
              </div>
              <div className="w-10 h-10 rounded-full cursor-pointer bg-[#E2E4EB] flex items-center justify-center">
                <a href="">
                  <AiOutlineDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[300px] h-[531.39px] bg-[#edeff6] rounded-[10px] space-y-3 py-[33px] px-[30px] ">
            <h5 className="uppercase text-tertiary">Total Price:</h5>
            <h2 className="text-[30px] font-bold">$609.00</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={sponsor} alt="" className="w-[45px] h-[22px]" />
                <p className="text-red-500 text-[12px] font-bold">$49/m</p>
              </div>
              <p className="text-[12px]">
                in 12 months.
                <span className="text-[#0D6EFD]">
                  <a href="">See more</a>
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <FaCheck className="bg-primary py-1 text-2xl rounded-full text-white" />
              <p className="font-bold">In stock</p>
            </div>
            <div className="w-[242.5px] h-[53px] bg-white rounded-[10px] flex justify-between px-5 items-center text-2xl ">
              <FaMinus className="cursor-pointer" />
              <h3>01</h3>
              <FaPlus className="cursor-pointer" />
            </div>
            <PlaceOrder placenaem="Add To Cart" />
            <button className="w-full h-[50px] bg-[#F6AB4A] rounded-[10px]  flex justify-center items-center uppercase cursor-pointer shadow-md hover:bg-[#F6AB] transition duration-150">
              <h4>buy with </h4>
              <img src={paypallogo} alt="" />
            </button>
            <div className="w-full h-[50px] shadow-2xs rounded-[10px] flex justify-between items-center text-tertiary">
              <div className="flex items-center gap-1">
                <FaHeart className="text-primary" />
                <h6> Wishlist added</h6>
              </div>
              <div className="flex items-center gap-1 ">
                <MdRefresh className="text-2xl" />
                <h6> Compare</h6>
              </div>
            </div>
            <h6>Guaranteed Safe Checkout</h6>
            <img src={paymetoth} alt="" />
          </div>
          <div className="w-full h-[139.39px] bg-[#edeff6] rounded-[10px] mt-2.5 p-[30px]">
            <div className="w-[151.09px] h-[37px] bg-[#333333] text-white flex justify-center items-center rounded-[10px] cursor-pointer ">
              Quick Order 24/7
            </div>
            <h2 className="text-[22px] font-bold pt-[15px]">
              (025) 3886 25 16
            </h2>
          </div>
          <div className="flex items-center gap-3 pt-[15px]">
            <TbTruckDelivery className="text-2xl " />
            <h5>
              Ships from <span className="font-bold">United States</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full h-[409.59px] gap-2 flex">
        <div className="w-[1018px] h-[409px] bg-white rounded-[10px] p-[30px] my-5">
          <h5 className="font-bold uppercase ">frequently bought together</h5>
          <div className="flex justify-start items-center">
            <img
              src={details01}
              alt=""
              className="w-[190px] h-[200px] object-cover"
            />
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer bg-[#E2E4EB] ">
              <FaPlus />
            </div>
            <div className="relative">
              <img
                src={head}
                alt=""
                className="w-[190px] h-[200px] object-cover"
              />
              <div className="absolute inset-1  bg-white/60"></div>
            </div>
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer bg-[#E2E4EB] ">
              <FaPlus />
            </div>
            <div className="relative">
              <img
                src={applewath}
                alt=""
                className="w-[190px] h-[200px] object-cover"
              />
              <div className="absolute inset-1  bg-white/60"></div>
            </div>
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer bg-[#E2E4EB] ">
              <FaPlus />
            </div>
            <div className="mt-[-50px] ml-[50px]">
              <h6>Total Price:</h6>
              <h3 className="text-[30px] font-bold pb-[30px]">$609.00</h3>
              <PlaceOrder
                placenaem="Add To Cart"
                className="!w-[217px] h-[50px]"
              />
              <div className="text-tertiary flex items-center gap-4 py-4">
                <FaHeart />
                <h6> Ad all to Wishlist</h6>
              </div>
            </div>
          </div>
          <div className="my-[50px]">
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <h5>
                {" "}
                <span className="font-bold">This item:</span> Somseng Galatero
                X6 Ultra LTE 4G/128 Gb, Black Smartphone{" "}
                <span className="text-red-500">( $569.00 )</span>
              </h5>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <h5>
                {" "}
                BOSO 2 Wireless On Ear Headphone
                <span className="text-red-500">($369.00 )</span>
              </h5>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <h5>
                {" "}
                Opplo Watch Series 8 GPS + Cellular Stainless Stell Case with
                Milanese Loop <span className="text-red-500">( $129.00 )</span>
              </h5>
            </div>
          </div>
        </div>

        <div className="space-y-2 my-5">
          <img
            src={joistik}
            alt=""
            className=" w-[334px] h-[200px] bg-cover bg-center rounded-[10px] "
          />
          <div className="relative ">
            {/* <img src={which} alt="" className="bg-cover bg-center " /> */}
            <div className="absolute top-0 pl-[25px] py-5 text-white ">
              <h5 className="uppercase font-bold">iPad Pro</h5>
              <h4 className="text-[24px] ">Mini 5</h4>
              <div className="mt-5">
                <p>FROM</p>
                <h2 className="text-[24px] text-primary">$169</h2>
              </div>
            </div>
            <img
              src={tablet}
              alt=""
              className=" w-[334px] h-[200px] bg-cover bg-center rounded-[10px] "
            />
          </div>
        </div>
      </div>
      {/* description section */}
      <div className="w-full h-[1460px] mt-10 rounded-[10px] bg-white">
        <div className="p-[30px] ">
          <ul className="font-bold uppercase cursor-pointer flex items-center gap-[50px]">
            <li>description</li>
            <li>reviews (5)</li>
            <li>additional information</li>
          </ul>
          <p className="text-[14px] py-[35px]">
            Built for ultra-fast performance, the thin and lightweight Samsung
            Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop
            on a crisp, clear Super AMOLED display. Expandable memory lets you
            enjoy more of your favorite content. And connecting and sharing
            between all your Samsung devices is easier than ever. Welcome to
            life with the reimagined Samsung Galaxy Tab S2. Watch thev world
            come to life on your tablet's Super AMOLED display * . With deep
            contrast, rich colors and crisp details, you won't miss a thing
          </p>
          <img
            src={discupthinpic}
            alt=""
            className=" bg-cover bg-center rounded-[10px] "
          />
          <p className="italic text-center py-5 text-[#777777]">
            * The Galaxy Tab S2’s 4 : 3 ratio display provides you with an ideal
            environment for performing office tasks.
          </p>
          <h3 className="text-[18px] font-bold py-2">From the manufacturer</h3>
          <p className="text-[14px] text-[#555555]">
            Dive into the blockbuster movies you can't wait to see. Switch
            between your favorite apps quickly and easily. The new and improved
            octa-core processor gives you the power and speed you need to see
            more and do more. Expand your tablet's memory from 32GB to up to an
            additional 128GB and enjoy more of your favorite music, photos,
            movies and games on the go with a microSD card. With Quick Connect,
            start a show on your Smart TV and, with the touch of a button, take
            it with you by moving it to your Galaxy Tab S2.
          </p>
          <p className="text-[14px] py-4 text-[#555555]">
            Or send videos and photos from your tablet screen to your TV screen
            to share with everyone in the room. Work effortlessly between your
            Samsung tablet and Samsung smartphone with SideSync. Quickly drag
            and drop photos between devices. And even respond to a call from
            your smartphone right on your tablet screen.
          </p>
          <div className="flex gap-4 my-10">
            <img
              src={phonereviw}
              alt=""
              className="w-[600px] h-[400px] bg-cover bg-center rounded-[10px] "
            />
            <img
              src={phonereviw0}
              alt=""
              className="w-[600px] h-[400px] bg-cover bg-center rounded-[10px] "
            />
          </div>
          <h3 className="text-[18px] font-bold py-2">
            Semsong Galaxy Tab S2, 8-Inch, White
          </h3>
          <p className="text-[14px] text-[#555555]">
            The Samsung Galaxy Tab S2 offers dual cameras: a rear-facing
            8-megapixel camera with Auto Focus and a 2.1-megapixel camera on the
            front. Take high-quality pictures and video or video chat with
            friends, family, and colleagues. Customize your Galaxy Tab S2 with
            the apps you use most. The Samsung Galaxy Essentials widget provides
            a collection of premium complimentary apps optimized for your tablet
            screen. Select and download the apps you want to instantly upgrade
            your tablet experience.
            <br />
            <p className="font-bold uppercase text-[#0D6EFD] my-8">
              <a href="">show more </a>
            </p>
          </p>
        </div>
      </div>
      <div className="w-full h-[600px] bg-white rounded-[10px] p-[30px] my-5 ">
        <h5 className="font-bold uppercase pb-5">related products</h5>
        <div className="flex justify-between">
          <div>
            <div className="flex gap-[80px]">
              <Save saveparsen="$59.00" />
              <div className="w-12 h-12 bg-secundary cursor-pointer rounded-full flex justify-center items-center">
                <FaRegHeart className=" text-2xl" />
              </div>
            </div>
            <BestSellerCard
              img={phone1}
              title="SROK Smart Phone 128GB,Oled Retina"
              productnowprice="$579.00"
              productoldprice="$859.00"
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
              img={phone2}
              title="SROK Smart Phone 128GB,Oled Retina"
              productnowprice="$579.00"
              productoldprice="$859.00"
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
              img={phone3}
              title="SROK Smart Phone 128GB,Oled Retina"
              productnowprice="$579.00"
              productoldprice="$859.00"
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
              img={phone4}
              title="SROK Smart Phone 128GB,Oled Retina"
              productnowprice="$579.00"
              productoldprice="$859.00"
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
              img={phone5}
              title="SROK Smart Phone 128GB,Oled Retina"
              productnowprice="$579.00"
              productoldprice="$859.00"
            />
          </div>
        </div>
      </div>
      {/* resently veiw*/}
        <div className="w-full h-[237.69px] bg-white rounded-[10px] mb-5">
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
    </Container>
  );
};

export default ProductDetails;
