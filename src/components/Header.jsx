import React from 'react'

const Header = () => {
    return (
        <header
            className="fixed z-[1000] w-screen flex justify-between items-center p-2 bg-black rounded-full shadow-lg" >
            <div className="text-xl font-bold font-serif pl-2">KkJewels</div>
            <nav className="max-md:hidden flex space-x-6">
                <a href="#" className="text-base italic text-gray-200 fons">Home</a>
                <a href="#" className="text-base italic text-gray-200 fons">Products</a>
                <a href="#" className="text-base italic text-gray-200 fons">Contact</a>
                <a href="#" className="text-base italic text-gray-200 fons">Gifting</a>
            </nav>
            <div className="flex items-center">
                <button className="border-l-[1px] border-r-[1px] border-gray-300 rounded-full px-10 py-2 text-base uppercase font-serif">shop</button>
                <button className="border-[1px] border-gray-500 max-md:hidden rounded-full md:px-10 px-6 py-2 text-base bg-white text-black">login</button>
            </div>

        </header>

    )
}

export default Header