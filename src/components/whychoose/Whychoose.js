import React from 'react';
import icon from '../../img/Icon.png'
import icon1 from '../../img/Icon (1).png'
import flat from '../../img/Flat.png'

const WhyChoose = () => {
    return (
        <div className='container pt-32'>
            <div>
                <h1 className='text-center text-6xl'>Why Choose US?</h1>
                <p className='text-xl text-center py-5'>Organic food is grown without the use of synthetic chemicals</p>
            </div>
            <div>
                <div className='flex items-center justify-around mt-24'>
                    <div className='flex flex-col items-center'>
                        <img src={icon} alt=""/>
                        <h1 className='text-black text-3xl pt-8'>Easy to order</h1>
                        <p className='pt-3'>foods include fresh produce, <br/> meats as well as processed</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={icon1} alt=""/>
                        <h1 className='text-black text-3xl pt-8'>Live Order</h1>
                        <p className='pt-3'>Place your online Order easily <br/> and get the food instantly</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={flat} alt=""/>
                        <h1 className='text-black text-3xl pt-8'>100% Organic</h1>
                        <p className='pt-3'>Organic food is grown without <br/> the use of synthetic chemicals</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-evenly pt-24'>
                <div>
                    <h1 className='text-center text-6xl text-black'>40+</h1>
                    <p className='text-xl'>Food Partners</p>
                </div>
                <div>
                    <h1 className='text-center text-6xl text-black'>459+</h1>
                    <p className='text-xl'>Trusted Clients</p>
                </div>
                <div>
                    <h1 className='text-center text-6xl text-black'>12k+</h1>
                    <p className='text-xl'>Order Online</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;