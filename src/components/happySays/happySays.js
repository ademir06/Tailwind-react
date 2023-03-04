import React from 'react';
import png from '../../img/_.png'
import avatar from '../../img/avatar.png'
import {BsArrowRight} from "react-icons/bs";
import {HiOutlineArrowLeft} from "react-icons/hi";
import avatar1 from '../../img/avatar (1).png'
const HappySays = () => {
    return (
        <div className='container pt-32'>
            <div>
                <h1 className='text-6xl text-center'>Happy Clients Says</h1>
            </div>
            <div className='flex items-center justify-center mt-20'>
                <div
                    className='w-[514px] h-[347px] bg-white border-white-200 rounded-3xl shadow dark:bg-white-400 dark:border-white-700'>
                    <div className='flex items-center justify-evenly pt-14'>
                        <div>
                            <img src={avatar} alt=""/>
                        </div>
                        <div>
                            <h1 className='text-2xl'>KHALIL NAZIR</h1>
                            <p className='text-1xl'>CEO of UI.Desk</p>
                        </div>
                        <div>
                            <img src={png} alt=""/>
                        </div>
                    </div>
                    <div className='flex items-center pt-10 pl-16 text-1xl'>
                        <p>Thirty for remove plenty regard you summer though. <br/> He preference Partiality on or
                            continuing in particular <br/> principles as. Do believing oh disposing to
                            supported <br/> allowance we.</p>
                    </div>
                </div>
                <div
                    className='ml-10 w-[514px] h-[347px] bg-white border-white-200 rounded-3xl shadow dark:bg-white-400 dark:border-white-700'>
                    <div className='flex items-center justify-evenly pt-14'>
                        <div>
                            <img src={avatar1} alt=""/>
                        </div>
                        <div>
                            <h1 className='text-2xl'>KHALIL NAZIR</h1>
                            <p className='text-1xl'>CEO of UI.Desk</p>
                        </div>
                        <div>
                            <img src={png} alt=""/>
                        </div>
                    </div>
                    <div className='flex items-center pt-10 pl-16 text-1xl'>
                        <p>
                            Really boy law county she unable her sister. Feet you <br/> off its like like six. Among sex are leave law built now. <br/> In built table in an rapid blush. Merits behind on afraid <br/> or warmly.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center pt-16'>
                <div>
                    <HiOutlineArrowLeft className='text-2xl text-[#E1E1E1]'/>
                </div>
                <div className='pl-5'>
                    <BsArrowRight className='text-5xl text-[#369C50]'/>
                </div>
            </div>
            <div className='pt-40'>
                <div className='text-center'>
                    <h1 className='text-4xl'>Subscribe to the Newsletter</h1>
                    <p className='text-xl pt-3'>Enter your email below to get our daily offers and news</p>
                </div>
                <div className='flex items-center justify-center mt-16'>
                    <div>
                        <input type="text" placeholder='Enter your email.' className='w-[330px] h-[60px] outline-none border rounded-3xl px-5'/>
                    </div>
                    <div>
                        <button
                            className="text-white bg-[#64BB47] hover:bg-[#64BB47] focus:outline-none  font-medium rounded-full text-sm px-14  py-5 text-center mr-2 mb-2 ml-10 dark:bg-[#64BB47] ">Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappySays;