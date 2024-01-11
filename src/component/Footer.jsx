import React from 'react';
import { MdAddCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

import { TfiEmail } from "react-icons/tfi";
const Footer = () => {
    return (
        <div className='flex justify-around items-center gap-6 py-10 bg-gray-600 text-white'>
            <div className='w-70 flex flex-col gap-2'>
                <h2 className='text-3xl font-semibold'>Contact us</h2>
                <p className='text-2xl w-64 '>
                    If it is something about Cars, let's talk
                </p>
                <p className='w-70 mt-6'>Car Maintenance Service - Uttara, <br />Sector # 04, Road # 10, Dhaka</p>
            </div>
            <div>
                <div className='flex gap-2 justify-start  items-center '>
                    <span><MdAddCall className='text-lg' /></span><p>0096001421</p>
                </div>
                <div className='flex gap-2 justify-start  items-center'>
                    <span><TfiEmail /></span><p>support@carmaintenance.com</p>
                </div>
                <div className='flex gap-2 mt-4'>
                    <span className='bg-white rounded-full px-2 py-2 hover:bg-blue-400'><FaFacebookF className='text-black' /></span>
                    <span className='bg-white rounded-full px-2 py-2 hover:bg-blue-400'><CiInstagram className='text-black' /></span>
                    <span className='bg-white rounded-full px-2 py-2 hover:bg-blue-400'><CiLinkedin className='text-black' /></span>
                    <span className='bg-white rounded-full px-2 py-2 hover:bg-blue-400'><FaWhatsapp className='text-black' /></span>
                    <span className='bg-white rounded-full px-2 py-2 hover:bg-blue-400'><FaYoutube className='text-black' /></span>
                </div>

            </div>
        </div>
    );
};

export default Footer;