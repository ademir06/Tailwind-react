import React from 'react';
import image1 from '../../img/Image 01.png'
import image2 from '../../img/Image 02.png'
import image3 from '../../img/Image 03.png'
import image from '../../img/image.png'
import checkmark from  '../../img/check mark.png'
import elem from '../../img/Image & bg elements.png'
const AboutUs = () => {
    return (
        <div className='container'>
            <div className='flex items-center justify-around pt-52'>
                <div>
                    <h1 className='text-5xl'>About US</h1>
                    <p className='text-xl pt-10'>
                        Organic food is grown without the use of <br/> synthetic chemicals, such as
                        human-made <br/> pesticides and fertilizers, and does not contain <br/> genetically modified
                        organisms (GMOs). <br/> Organic foods include fresh produce, meats, <br/> and dairy products as
                        well as processed foods <br/> such as crackers, drinks, and frozen meals.
                    </p>
                    <button
                        className=" mt-20 text-white bg-[#64BB47] hover:bg-[#64BB47] focus:outline-none  font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 dark:bg-[#64BB47] ">Learn
                        More
                    </button>
                </div>
                <div className='flex'>
                    <div className='pr-5'>
                        <img src={image1} alt=""/>
                        <img src={image2} alt="" className='pt-5'/>
                    </div>
                    <div>
                        <img src={image3} alt="" className='pt-16'/>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-around pt-16'>
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>
                    <h1 className='text-5xl'>
                        Fresh Vegetables <br/>
                        Every Day
                    </h1>
                    <p className='text-xl pt-10'>
                        Healthy life as informed declared we enjoy the <br/> margaret. Joy horrible moreover man feelings <br/> own shy. Request norland neither mistake for yet. <br/> Between the for morning assured country <br/> believe.
                    </p>
                    <button
                        className=" mt-20 text-white bg-[#64BB47] hover:bg-[#64BB47] focus:outline-none  font-medium rounded-full text-sm px-10 py-3 text-center mr-2 mb-2 dark:bg-[#64BB47] ">Learn
                        More
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-around pt-24'>
                <div>
                    <h1 className='text-5xl'>
                        Cooked by the
                        Best Chefs
                    </h1>
                    <p className='text-xl py-10'>
                        Believing neglected so so allowance existence <br/> departure in. In design active temper be <br/> uneasy. Thirty for remove plenty regard you <br/> summer though. He preference connection <br/> astonished on of ye.
                    </p>
                    <div className='flex items-center'>
                        <img src={checkmark} alt=""/>
                        <p className='pl-3'>A guaranteed delicious meal</p>
                    </div>
                    <div className='flex items-center py-6'>
                        <img src={checkmark} alt=""/>
                        <p className='pl-3'>A guaranteed delicious meal</p>
                    </div>
                    <div className='flex items-center'>
                        <img src={checkmark} alt=""/>
                        <p className='pl-3'>A guaranteed delicious meal</p>
                    </div>
                </div>
                <div>
                    <img src={elem} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;