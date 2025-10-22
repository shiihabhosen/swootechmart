import React from 'react'
import { IoArrowForward } from "react-icons/io5";
const ProfileCart = ({text}) => {
  return (
    <>
      <div className='w-full p-4 cursor-pointer  h-[50px] rounded-[10px]  bg-white shadow-md text-black flex justify-between items-center hover:bg-primary transition-all duration-500  hover:text-white'>
        <h5>{text}</h5>
        <IoArrowForward className='text-2xl'/>
      </div>
    </>
  )
}

export default ProfileCart
