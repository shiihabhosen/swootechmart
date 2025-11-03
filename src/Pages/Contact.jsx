import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { IoLogoTwitter } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import contactimg from "../assets/contactimg.png";
import Container from "../Component/Container";

const Contact = () => {
  const [country, setCountry] = useState(null);

  return (
    <>
      <Container>
        <div className="w-full h-[988.78px] my-5 bg-white px-5 rounded-[10px]">
          <h4 className=" pb-[50px] pt-[30px] font-bold uppercase text-[18px]">
            ready to work with us
          </h4>
          <div className=" flex justify-between gap-2">
            <div >
              <div className="w-[675.83px]  h-[880.78px] ">
                <p className="text-tertiary">
                  Contact us for all your questions and opinions
                </p>
                <form className="space-y-6 mt-[30px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Mark"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Cole"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="swoo@gmail.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number{" "}
                      <span className="text-gray-400 text-sm">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 0231 4554 452"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country / Region <span className="text-red-500">*</span>
                    </label>

                    {/* <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue="US"
                >
                </input> */}
                    <CountrySelect
                      containerClassName="form-group"
                      onChange={(_country) => setCountry(_country)}
                      placeHolder="Select Country"
                    />

                    {/* <div className="absolute right-3 top-[52%] transform -translate-y-1/2 text-gray-500 pointer-events-none">
                  <IoChevronDown />
             
                </div> */}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject{" "}
                      <span className="text-gray-400 text-sm">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      placeholder="Note about your order, e.g. special note for delivery"
                      className="w-full h-[117px] border border-gray-300 rounded-lg px-3 py-2 
               focus:outline-none focus:ring-2 focus:ring-green-500 
               placeholder:text-gray-400 placeholder:align-top resize-none"
                    ></textarea>
                  </div>
                </form>
                <div className="flex gap-2 mt-6">
                  <input type="checkbox" />
                  <p>
                    I want to receive news and updates once in a while. By
                    submitting, I’m agreed to the{" "}
                    <span className="text-primary underline underline-offset-2">
                      <a href="">Terms & Conditons</a>
                    </span>
                  </p>
                </div>
                <button className="group relative mt-[52px] bg-primary rounded-[10px] flex justify-center items-center uppercase text-white  overflow-hidden overflow-x-hidden px-8 py-4">
                  <span className="relative z-10">send message</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
                  </span>
                </button>
              </div>
            </div>
            <div className="">
              <div className="w-[524.16px] h-[466px] bg-[#edeff6] mr-5 rounded-[10px] py-8 px-[30px]">
                <div>
                  <h5 className="uppercase ">united states (head quater)</h5>
                  <p className="w-[331.59px] py-5 text-[18px]">
                    152 Thatcher Road St, Mahattan, 10463, US (+025) 3886 25 16
                    <p className="text-primary underline underline-offset-1 py-1">
                      hello@swattechmart.com
                    </p>
                  </p>
                  <h5 className="uppercase ">united kingdom (branch)</h5>
                  <p className="w-[331.59px] py-5 text-[18px]">
                    12 Buckingham Rd, Thornthwaite, HG3 4TY, UK (+718) 895-5350
                    <p className="text-primary underline underline-offset-1 py-1">
                      contact@swattechmart.co.uk
                    </p>
                  </p>
                </div>
                <div className="flex gap-3.5 mt-[30px]">
                  <div className="w-10 h-10 rounded-full cursor-pointer bg-white flex justify-center items-center text-2xl">
                    <a href="">
                      {" "}
                      <IoLogoTwitter />
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded-full cursor-pointer bg-white flex justify-center items-center text-2xl">
                    <a href="">
                      {" "}
                      <ImFacebook />
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded-full cursor-pointer bg-white flex justify-center items-center text-2xl">
                    <a href="">
                      {" "}
                      <FaInstagram />
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded-full cursor-pointer bg-white flex justify-center items-center text-2xl">
                    <a href="">
                      {" "}
                      <FaYoutube />
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded-full cursor-pointer bg-white flex justify-center items-center text-2xl">
                    <a href="">
                      {" "}
                      <FaPinterest />
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-3 ">
                <img
                  src={contactimg}
                  alt=""
                  className=" bg-center items-center rounded-[10px] bg-cover"
                />
              </div>
            </div>
          </div>
        </div>
          <div className="w-full mt-3 bg-white shadow-md rounded-lg p-4">
            <h4 className="text-[18px] font-bold uppercase mb-4">
              Find us on Google Map
            </h4>

            <div className="w-full h-[363px] overflow-hidden rounded-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428153.28239984275!2d88.81892347849255!3d25.110535088137308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc920e30f74a01%3A0x79daa6e9aa5ecdff!2sJoypurhat!5e0!3m2!1sen!2sbd!4v1760902560494!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Contact;
