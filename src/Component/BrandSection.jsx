import React from 'react'
import BrandCard from './BrandCard'
import TopCatagorise from './TopCatagorise'
import laptop from "../assets/laptop.png";

const BrandSection = () => {
  return (
    <>
      <div className='px-4 mt-4 flex gap-4'>
        <BrandCard />
        <TopCatagorise img={laptop} name='Laptop'/>
      </div>
    </>
  )
}

export default BrandSection
