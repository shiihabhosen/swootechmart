import React from 'react'



const PopularCategories = ({itemname,availableitems,pupolerimg}) => {
  return (
    <>
      <div className='flex mx-6 my-[20px] w-[200px] justify-between cursor-pointer items-center' >
        <div>
            <h6 className='font-bold'>{itemname}</h6>
            <p className='text-[13px] text-tertiary'>{availableitems}</p>
        </div>
        <div>
            <img src={pupolerimg} alt="" />
        </div>
      </div>
    </>
  )
}

export default PopularCategories
