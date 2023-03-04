import React from 'react';
import {SlBasket} from "react-icons/sl";
import {CiSearch} from "react-icons/ci";

const Header = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <nav className="bg-white border-gray-200 px-4 mt-4 lg:px-6 py-2.5 dark:bg-gray-800">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a href="#" className="flex items-center">
                                <span
                                    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UI.desk</span>
                            </a>
                            <div className="flex items-center lg:order-2">
                                <p className='mr-6 text-2xl'><CiSearch/></p>
                                <p className='mr-8 text-xl'><SlBasket/></p>
                                <a href="#"
                                   className="bg-primary-700  font-medium rounded-[20px] text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 bg-[#494949] text-white">Order
                                    now</a>
                            </div>
                            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                                 id="mobile-menu-2">
                                <div
                                    className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 cursor-pointer">
                                    <p
                                        className="block text-[#2C3847] py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</p>

                                    <p
                                        className="block text-[#2C3847] py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</p>
                                    <p
                                        className="block text-[#2C3847] py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</p>
                                    <p
                                        className="block text-[#2C3847] py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Testimonials</p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;