import React from 'react'

const Button = ({ children, onClick, isBorder = false, className }) => {
    return (
        <button
            onClick={onClick}
            className={`${isBorder ? 'border-[1px] border-gray-500 bg-white text-black' : 'border-l-[1px] border-r-[1px] border-gray-300 bg-black text-white'}  rounded-full md:px-10 px-6 py-2 text-base w-max ${className}`}>{children}</button>
    )
}

export default Button