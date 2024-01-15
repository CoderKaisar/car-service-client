import React, { useContext } from 'react';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { SiWhatsapp } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";
import { AuthContext } from '../provider/AuthProvider';



const Header = () => {
    const { user, LogOut } = useContext(AuthContext)
    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(err => {
                const erRor = err.message
            })

    }
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
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/addservice">Add Service</Link>
                    <Link to="/service">Blog</Link>
                    <Link to="/service">Contact</Link>
                    <Link>Cart</Link>
                    {
                        user?.uid ? <>
                            <Link to="/bookings">My Bookings</Link>
                            <span>{user?.email}</span>

                            <Link onClick={handleLogOut} className='btn btn-outline btn-sm rounded'>Log Out</Link>

                        </> :
                            <>
                                <Link to="/login" className='btn btn-outline btn-sm rounded'>Login</Link>
                            </>
                    }
                </nav>
            </div>
            <div className='flex justify-between items-center bg-[#E9E743] px-10 h-14'>
                <nav>
                    <button className="btn btn-sm btn-outline rounded-full bg-white">Appointment</button>
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