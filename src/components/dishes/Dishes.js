import React from 'react';
import green from '../../img/image (1).png'
import green2 from  '../../img/image (2).png'
import green3 from  '../../img/image (3).png'
const Dishes = () => {
    return (
        <div className='container pt-32 '>
            <div className='text-center'>
                <h1 className='text-5xl'>Special Dishes for you</h1>
                <p className='text-xl pt-8'>Made with premium & 100% Organic ingredients</p>
            </div>
            <div>
                <div className='flex items-center justify-around mt-24'>
                    <div
                        className='bg-white border border-white-200 w-[356px] h-[520px] rounded-3xl shadow dark:bg-white-400 dark:border-white-700'>
                        <div>
                            <img src={green} alt="" className='ml-14 mt-14'/>
                            <div className='pt-10'>
                                <h1 className='text-center text-3xl pb-4'>Green Salad</h1>
                                <p className='text-center'>
                                    A salad combined witha delicious <br/>
                                    cut of bacon and mixed with tasty <br/>
                                    and fresh sesome oil.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='bg-white border border-white-200 w-[356px] h-[520px] rounded-3xl shadow dark:bg-white-400 dark:border-white-700'>
                        <div>
                            <img src={green2} alt="" className='ml-14 mt-14'/>
                            <div className='pt-10'>
                                <h1 className='text-center text-3xl pb-4'>Beef Salad</h1>
                                <p className='text-center'>
                                    A salad combined witha delicious <br/>
                                    cut of bacon and mixed with tasty <br/>
                                    and fresh sesome oil.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='bg-white border border-white-200 w-[356px] h-[520px] rounded-3xl shadow dark:bg-white-400 dark:border-white-700'>
                        <div>
                            <img src={green3} alt="" className='ml-14 mt-14'/>
                            <div className='pt-10'>
                                <h1 className='text-center text-3xl pb-4'>Nut Salad</h1>
                                <p className='text-center'>
                                    A salad combined witha delicious <br/>
                                    cut of bacon and mixed with tasty <br/>
                                    and fresh sesome oil.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center pt-20'>
                    <button  className="text-white bg-[#64BB47] hover:bg-[#64BB47] focus:outline-none  font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 dark:bg-[#64BB47] ">View
                        All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dishes;