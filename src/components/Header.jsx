import React from 'react'

const Header = () => {
    return (
        <header
            className="fixed z-[1000] w-screen flex justify-between items-center p-2 bg-black rounded-full shadow-lg" >
            <div className="text-2xl font-bold font-mango pl-2">KkJewels</div>
            <nav className="max-md:hidden flex space-x-6">
                <a href="#" className="text-base italic text-gray-200 fons">Home</a>
                <a href="#" className="text-base italic text-gray-200 fons">Products</a>
                <a href="#" className="text-base italic text-gray-200 fons">Contact</a>
                <a href="#" className="text-base italic text-gray-200 fons">Gifting</a>
            </nav>
            <div className="flex items-center">
                <button className="border font-mango rounded-full px-10 py-2 text-base">shop</button>
                <button className="border font-mango rounded-full px-10 py-2 text-base bg-white text-black">login</button>
            </div>

        </header>

    )
}

export default Header