import React, { useEffect, useState } from 'react';
import '../assets/css/car.service.card.css'
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";


const Service = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch("https://car-service-server-site-eta.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServiceData(data)
            })
    }, [])

    return (
        <div className='py-10'>
            <h2 className='text-2xl text-center mb-6 font-bold'>Our Services</h2>
            <div className='grid grid-cols-4 justify-center items-center gap-2 w-2/3 mx-auto '>
                {
                    serviceData.map(service => <div className='flex justify-center items-center' key={service._id}>
                        <div className='border-2 border-gray-300 rounded-md hover:rounded-lg  w-64  my-4 h-60  flex flex-col justify-center items-center gap-6 hover:border-0 hover:bg-amber-500' key={service.id}>
                            <div className='flex justify-between gap-10'>
                                <div className='w-20'>
                                    <img src={service.servicePhotoURL} className='rounded-lg w-full h-18 ' alt="" />
                                </div>
                                <div className='flex jusitfy-center items-center'>
                                    <span><TbCurrencyTaka className='text-xl' /></span>
                                    <p className='text-md text-gray-900'> {service.servicingPrice}</p>
                                </div>
                            </div>
                            <h2 className='text-left text-lg font-bold'>{service.servicingName}</h2>
                            <div className='flex justify-center items-center'>
                                <Link to={`/services/${service._id}`} className=' btn btn-outline rounded-md btn-xs'>
                                    <FaArrowRightLong />
                                </Link>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Service;