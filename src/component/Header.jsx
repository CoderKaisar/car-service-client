import React from 'react';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { SiWhatsapp } from "react-icons/si";
import { IoCall, IoCallOutline } from "react-icons/io5";
import Home from '../pages/Home';



const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center mx-10'>
                <div className='flex justify-center items-center gap-2 py-4'>
                    <p>
                        <FaScrewdriverWrench />
                    </p>
                    <span className='text-lg uppercase font-semibold '>CAR-SERVICES</span>
                </div>
                <nav className='flex gap-4 justify-center items-center'>
                    <Link >Home</Link>
                    <Link to="/service" onScroll={Home}>Services</Link>
                    <Link>Cart</Link>
                    <Link className='btn btn-outline btn-sm rounded'>Login</Link>
                </nav>
            </div>
            <div className='flex justify-between items-center bg-[#E9E743] px-10 h-14'>
                <nav>
                    <button className="btn btn-sm btn-outline rounded-full bg-white">Select A Car</button>
                </nav>
                <div className='flex gap-4'>
                    <SiWhatsapp className='text-blue-400 text-xl' />
                    <IoCallOutline className='text-black-800 text-xl' />
                </div>
            </div>
        </div>
    );
};

export default Header;