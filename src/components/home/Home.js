import React from 'react';
import food from '../../img/header Image.svg'
import sheet from '../../img/bg elements.png'

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='flex justify-around items-center'>
                    <div>
                        <h1 className='text-6xl'>Just <span className='text-[#5FB848]'>Eat healthy</span> <br/> food to
                            live a <br/> healthier life</h1>
                        <p className='text-xl py-10'>Enjoy a healthy life by eating healthy foods <br/> that have
                            extraordinary flavors that make <br/> your life healthier for today and in the future
                        </p>
                        <button
                            className="text-white bg-[#64BB47] hover:bg-[#64BB47] focus:outline-none  font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 dark:bg-[#64BB47] ">Order
                            Now
                        </button>
                    </div>
                    <div className='relative'>
                        <img src={food} alt="" className='w-full'/>
                        <img src={sheet} alt="" className='absolute top-9 left-0 z-[-1]'/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;