import React from "react";
import aboutbanner from "../assets/aboutbanner.png";
import aboutmanpic from "../assets/aboutmanpic.png";
import AboutCart from "./AboutCart";
import abboucitypic from "../assets/abboucitypic.png";
import ab1 from "../assets/ab1.png";
import ab2 from "../assets/ab2.png";
import ab3 from "../assets/ab3.png";
import ab4 from "../assets/ab4.png";
import ab5 from "../assets/ab5.png";
import Container from "../Component/Container";
const About = () => {
  return (
    <>
      <Container>
        <div className="">
          <div className="w-full h-[544.77px] bg-white ">
            <div className="relative">
              <img src={aboutbanner} alt="" className="w-full" />
              <div className="absolute top-[100px] left-[96px]">
                <h2 className="text-[45px] font-bold w-[356.43px] ">
                  Best experience
                </h2>
                <h4 className="text-[45px]">always wins</h4>
                <p className="w-[370px]">
                  #1 Online Marketplace for Electronic & Technology in
                  Mahanttan, CA
                </p>
              </div>
            </div>
            <div className="flex justify-around items-center mt-7 ">
              <div>
                <h3 className="text-[18px] font-bold uppercase w-[284.47px]">
                  our purpose is to{" "}
                  <span className="text-primary">enrich and enhance lives</span>{" "}
                  through technology
                </h3>
              </div>
              <div className="flex gap-[75px]">
                <div>
                  <h2 className="text-[40px] font-bold">$12,5M</h2>
                  <p className="w-[134.39px] ">
                    total revenue from 2001 - 2023
                  </p>
                </div>
                <div>
                  <h2 className="text-[40px] font-bold">$12K+</h2>
                  <p className="w-[170px] ">
                    orders delivered successful on everyday
                  </p>
                </div>
                <div>
                  <h2 className="text-[40px] font-bold">725+</h2>
                  <p className="w-[134.39px] ">
                    store and office in U.S and worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-between mt-8">
            <div>
              <img
                src={aboutmanpic}
                alt=""
                className="w-[646px] h-full rounded-[10px]"
              />
            </div>
            <div className="w-[646px] h-full rounded-[10px] bg- py-[95px] px-[100px] ">
              <h4 className="font-bold">
                We connect millions of buyers and sellers around the world,
                empowering people & creating economic opportunity for all.
              </h4>
              <p className="pt-[30px] ">
                Within our markets, millions of people around the world connect,
                both online and offline, to make, sell and buy unique goods. We
                also offer a wide range of Seller Services and tools that help
                creative entrepreneurs start, manage & scale their businesses.
              </p>
              <button className="group mt-10 relative w-[154.66px] h-[50px] bg-primary rounded-[10px] flex justify-center items-center uppercase text-white  overflow-hidden overflow-x-hidden px-8 py-2">
                <span className="relative z-10">checkout</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
                </span>
              </button>
            </div>
          </div>
          <div className="my-5 gap-2 flex justify-between ">
            <AboutCart
              servicetitle="100% authentic products"
              className="w-[160.23px]"
              servicepera="Swoo Tech Mart just distribute 100% authorized products & guarantee quality. Nulla porta nulla nec orci vulputate, id rutrum sapien varius."
            />
            <AboutCart
              servicetitle="fast delivery"
              servicepera="Fast shipping with a lots of option to delivery. 100% guarantee that your goods alway on time and perserve quality."
            />
            <AboutCart
              servicetitle="affordable price"
              className="w-[119.41px]"
              servicepera="We offer an affordable & competitive price with a lots of special promotions."
            />
          </div>
          <div className="w-full h-[1598.97px] bg-white px-5">
            <h5 className="font-bold uppercase py-8">our mission and vision</h5>
            <p>
              Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras
              non elit vel magna molestie pellentesque in eu dui. Donec laoreet
              quis erat vitae finibus. Vestibulum enim eros, porta eget quam et,
              euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi
              id felis placerat porta vel sed augue. Vivamus mollis mauris vitae
              rhoncus egestas. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.
            </p>
            <img src={abboucitypic} alt="" className="w-full my-[30px]" />
            <h5 className="font-bold uppercase py-8">
              from a retail store to the global chain of stores
            </h5>
            <p>
              Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci
              tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in
              consectetur erat.
            </p>
            <div>
              <div class="flex justify-between mt-4">
                <div class="space-y-4  pr-6">
                  <div>
                    <p class="font-semibold text-gray-800">1997:</p>
                    <p class="text-gray-600">
                      A small store located in Brooklyn Town, USA
                    </p>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">1998:</p>
                    <p class="text-gray-600">
                      It is a long established fact that a reader will be
                      distracted...
                    </p>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">2000:</p>
                    <p class="text-gray-600">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">2005:</p>
                    <p class="text-gray-600">
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution...
                    </p>
                  </div>
                </div>

                <div class="space-y-4 pl-6">
                  <div>
                    <p class="font-semibold text-gray-800">2014:</p>
                    <p class="text-gray-600">
                      There are many variations of passages of Lorem Ipsum
                      available...
                    </p>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">2016:</p>
                    <p class="text-gray-600">
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks...
                    </p>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">2021:</p>
                    <p class="text-gray-600">
                      Making this the first true generator on the Internet
                    </p>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">2023:</p>
                    <p class="text-gray-600">
                      There are many variations of passages of Lorem Ipsum
                      available...
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold uppercase  py-8">leaderships</h4>
                  <a href="">View all</a>
                </div>
                <div className="w-full h-[380px] gap-1 flex justify-between">
                  <div>
                    <img src={ab1} alt="" className="rounded-[10px] " />
                    <h5 className="text-[16px] font-bold">Henry Avery</h5>
                    <p className="uppercase">Chairman</p>
                  </div>
                  <div>
                    <img src={ab2} alt="" className="rounded-[10px] " />
                    <h5 className="text-[16px] font-bold">Michael Edward</h5>
                    <p className="uppercase">Vice President</p>
                  </div>
                  <div>
                    <img src={ab3} alt="" className="rounded-[10px] " />
                    <h5 className="text-[16px] font-bold">Eden Hazard</h5>
                    <p className="uppercase">CEO</p>
                  </div>
                  <div>
                    <img src={ab4} alt="" className="rounded-[10px] " />
                    <h5 className="text-[16px] font-bold">Robert Downey Jr</h5>
                    <p className="uppercase">CEO</p>
                  </div>
                  <div>
                    <img src={ab5} alt="" className="rounded-[10px] " />
                    <h5 className="text-[16px] font-bold">Nathan Drake</h5>
                    <p className="uppercase">strategist director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
