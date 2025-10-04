import React from 'react'

const Save = ({className,saveparsen}) => {
  return (
    <div className={`w-[95.08px] h-[49.59px] bg-primary rounded-[10px] px-3 text-white ${className}`}>
      <p >save</p>
      <p className='font-medium'>{saveparsen}</p>
    </div>
  )
}

export default Save
