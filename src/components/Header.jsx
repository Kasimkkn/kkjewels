import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <header
            className="fixed z-[1000] w-screen flex justify-between font-decorative items-center p-2  rounded-full shadow-lg bg-black/50 bg-opacity-50">
            <div className="text-xl font-bold font-serif pl-2">KkJewels</div>
            <nav className="max-md:hidden flex space-x-6">
                <a href="#" className="text-base text-gray-200 tracking-widest">Home</a>
                <a href="#" className="text-base text-gray-200 tracking-widest">Products</a>
                <a href="#" className="text-base text-gray-200 tracking-widest">Contact</a>
                <a href="#" className="text-base text-gray-200 tracking-widest">Gifting</a>
            </nav>
            <div className="flex items-center">
                <Button>
                    shop
                </Button>
                <Button isBorder={true}>
                    login
                </Button>
            </div>

        </header>

    )
}

export default Header