import React from 'react';
import hero from "../assets/images/hero.jpg"
const Hero = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-4'  >
                <div className='text-center '>
                    <h2 className='text-2xl font-semibold    mb-5 mt-7'>Car repair at your door step</h2>
                    <button className='w-24 h-7 text-xs btn btn-outline btn-xs rounded-full mb-5 '>Select A Car</button>
                </div>
                <div className='mx-20 text-center mb-5 w-3/5 h-96'>
                    <img src={hero} className='rounded-lg w-full h-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;