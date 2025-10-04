import React from 'react'

const Button = ({className,children}) => {
  return (
    <div className={` py-1 px-2 inline-block rounded-[10px] border-2 border-primary  justify-center items-center text-primary uppercase ${className}`}>
      {children}
    </div>
  )
}

export default Button
