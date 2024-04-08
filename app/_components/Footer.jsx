
import React from "react";

const icons = [
        { src: '/facebook.png', href: '#', name: 'Home', },
        { src: '/instagram.png', href: '#', name: 'Home', },
        { src: '/treads.png', href: '#', name: 'Home', },
        { src: '/xblack.png', href: '#', name: 'Home', },

]


function Footer() {
        return (
                <>
                        <div className="bg-white h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">

                                <div className="p-5 ">

                                        <ul>
                                                <p className="text-gray-800 font-bold text-3xl pb-6">
                                                        The Twenty<span className="text-blue-600"> Hampers</span>
                                                </p>
                                                <div className="flex gap-6 pb-1 cursor">
                                                        {icons.map((item) => (

                                                                <a
                                                                        key={item.name} href={item.href} className="cursor shrink-0 border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black hover:text-bold">
                                                                        <img src={item.src} />
                                                                </a>

                                                        ))}
                                                </div>
                                        </ul>
                                </div>
                                <div className="p-5">
                                        <ul>
                                                <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Stocks
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Futures & Options
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Mutual Funds
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Fixed deposits
                                                </li>
                                        </ul>
                                </div>
                                <div className="p-5">
                                        <ul>
                                                <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        About
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Products
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Pricing
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Careers
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Press & Media
                                                </li>
                                        </ul>
                                </div>
                                <div className="p-5">
                                        <ul>
                                                <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Contact
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Support Portals
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        List Of Charges
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Downloads & Resources
                                                </li>
                                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                                        Videos
                                                </li>
                                        </ul>
                                </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center  p-5 bg-white">
                                <h1 className=" text-gray-800 font-semibold">
                                        ©2022-2023 All rights reserved
                                </h1>
                        </div>
                </>
        );
}

export default Footer;