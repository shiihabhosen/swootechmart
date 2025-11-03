import React from "react";
import profileuserpic from "../assets/profileuserpic.png";
import { useRef, useState } from "react";
import ProfileCart from "./ProfileCart";
import Container from "../Component/Container";

const Profile = () => {
  const userprofile = useRef(null);
  const [image, setImage] = useState("");

  const hundleuserpro = () => {
    userprofile.current.click();
  };
  const hundleprochange = (even) => {
    const file = even.target.files[0];
    console.log(file);
    setImage(even.target.files[0]);
  };

  return (
    <>
      <Container>
        <div className="w-full rounded-[10px] h-[679px] flex justify-between item bg-white p-6">
          <div>
            <div className="w-[254.5px] p-5 h-[620px] bg-red-300">
              <div className="" onClick={hundleuserpro}>
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="rounded-[10px] w-[200px] h-[200px] object-cover cursor-pointer"
                  />
                ) : (
                  <img
                    src={profileuserpic}
                    alt=""
                    className="rounded-[10px] cursor-pointer"
                  />
                )}
                <input
                  type="file"
                  ref={userprofile}
                  className="hidden"
                  onChange={hundleprochange}
                />
              </div>
              <h4 className="py-[25px] text-[18px] font-bold">Mark Cole</h4>
              <p className="text-tertiary">swoo@gmail.com</p>
              <div className="py-[25px] space-y-2.5">
                <ProfileCart text="Account info" />
                <ProfileCart text="My order" />
                <ProfileCart text="My address" />
                <ProfileCart text="Change password " />
              </div>
            </div>
          </div>
          <div className="w-[1100px] h-full bg- p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Account Info</h2>
            <form className="space-y-6">
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

              <div>
                <button
                  type="submit"
                  className="px-8 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition duration-150"
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
