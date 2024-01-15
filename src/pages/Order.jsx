import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import proceed from '../assets/images/proceed.jpg'
import proceedBottom from '../assets/images/proceed-bottom.jpg'
import { TbCurrencyTaka } from "react-icons/tb";
import { FaRegFileAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const ProceedPage = () => {
    const [asideData, setAsideData] = useState([])
    const service = useLoaderData()
    useEffect(() => {
        fetch("https://car-service-server-site-eta.vercel.app/services")
            .then(res => res.json())
            .then(data => setAsideData(data))
    }, [])


    return (
        <div className='my-8'>
            <div className='space-y-2'>
                <img src={proceed} className='w-[80%] h-72 mx-auto rounded-lg' alt="" />

                <div className='flex flex-col jusitfy-center items-center'>
                    <div className=' -mt-14 flex justify-center items-center'>
                        <h2 className='text-center bg-red-500 px-10 py-2 rounded-tl-2xl  rounded-tr-2xl text-2xl font-semibold text-white'>Service Details</h2>
                    </div>
                </div>
            </div>

            <div className='w-[80%] mx-auto'>
                <div className='mt-20  mx-10 flex justify-between'>
                    <div className='w-2/3'>
                        <img src={service.servicePhotoURL} className='w-full rounded-xl h-80' alt="" />
                        <div>
                            <h2 className='text-2xl font-semibold py-4 pl-4 rounded-lg my-6 bg-gray-300'>{service.servicingName}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem sint excepturi, magni quam totam reprehenderit iure ullam. Ad delectus optio minima vitae sint eaque ducimus nesciunt fugiat odit impedit.
                                Ea nobis rem distinctio quis sunt. Eveniet nesciunt nemo architecto accusamus velit nobis commodi fugit ipsa illum repellendus maxime placeat esse accusantium, id ullam. Deleniti neque earum quidem possimus officia?
                                Amet quis fugit aliquam rerum in distinctio. Rem, ut nostrum in ipsam eligendi illum ratione deleniti quia nemo quis delectus accusamus similique aliquam libero, placeat illo quisquam? Quas, consectetur. Voluptatibus.</p>
                        </div>
                        <div>
                            <div>
                                <div className='grid grid-cols-2 gap-4 py-6 '>
                                    <div className='bg-gray-200 rounded-lg p-4 border-t-2 border-red-400'>
                                        <h2 className='text-lg font-semibold'>Instant Car Services</h2>
                                        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis nam veritatis quaerat. </p>
                                    </div>
                                    <div className='bg-gray-200 rounded-lg p-4 border-t-2 border-red-400'>
                                        <h2 className='text-lg font-semibold'>24/7 Quality Service</h2>
                                        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis nam veritatis quaerat. </p>
                                    </div>
                                    <div className='bg-gray-200 rounded-lg p-4 border-t-2 border-red-400'>
                                        <h2 className='text-lg font-semibold'>Easy Customer Service</h2>
                                        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis nam veritatis quaerat. </p>
                                    </div>
                                    <div className='bg-gray-200 rounded-lg p-4 border-t-2 border-red-400'>
                                        <h2 className='text-lg font-semibold'>Quality Cost Service</h2>
                                        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis nam veritatis quaerat. </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-4xl font-bold py-6'>3 Simple Steps to Process</h2>
                            <p className='my-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                            <div className='grid grid-cols-3 gap-4 py-8'>
                                <div className='border rounded-xl flex flex-col jusitfy-center items-center p-4 gap-2'>
                                    <button className='bg-orange-400 w-14 h-14 p-4 rounded-full border-4 border-gray-500 flex jusitfy-center items-center text-lg text-gray-600'>01 </button>
                                    <div className='text-center'>
                                        <h2 className='py-2  text-xl font-bold uppercase'>Step One</h2>
                                        <p>Choose Your Service </p>
                                    </div>
                                </div>
                                <div className='border rounded-xl flex flex-col jusitfy-center items-center p-4 gap-2'>
                                    <button className='bg-orange-400 w-14 h-14 p-4 rounded-full border-4 border-gray-500 flex jusitfy-center items-center text-lg text-gray-600'>02</button>
                                    <div className='text-center'>
                                        <h2 className='py-2  text-xl font-bold uppercase'>Step Two</h2>
                                        <p>Proceed To checkout</p>
                                    </div>
                                </div>
                                <div className='border rounded-xl flex flex-col jusitfy-center items-center p-4 gap-2'>
                                    <button className='bg-orange-400 w-14 h-14 p-4 rounded-full border-4 border-gray-500 flex jusitfy-center items-center text-lg text-gray-600'>03</button>
                                    <div className='text-center'>
                                        <h2 className='py-2  text-xl font-bold uppercase'>Step Three</h2>
                                        <p>Complete Payment </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <img src={proceedBottom} className='w-full rounded-xl h-80' alt="" />
                    </div>
                    <div >
                        <div className='flex flex-col justify-center gap-2 w-72 bg-gray-300 px-6 py-12 rounded-xl'>
                            {
                                asideData.map(data =>
                                    <button className="btn  btn-warning hover:btn-primary">{data.servicingName}</button>).slice(0, 4)
                            }

                            <button className="btn" onClick={() => document.getElementById('serviceNavModal').showModal()}>Show More</button>
                            <dialog id="serviceNavModal" className="modal">
                                <div className="modal-box grid grid-cols-1 gap-2">
                                    {
                                        asideData.map(data =>
                                            <button className="btn  btn-warning hover:btn-primary">{data.servicingName}</button>)
                                    }
                                    <div className="modal-action">
                                        <form method="dialog flex justify-center items-center">
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        <div className='flex justify-center items-center w-full bg-gray-400 rounded-lg my-10'>
                            <div>
                                <h2 className='text-white mt-6 text-2xl'>Download</h2>
                                <div className='py-6 flex flex-col gap-4'>
                                    <div className='flex jusitfy-center items-center gap-8 w-full text-white'>
                                        <span><FaRegFileAlt className='text-white' /></span>
                                        <div>
                                            <h2 className='text-md font-semibold'>Our Brochure</h2>
                                            <p className='text-xs'>Download</p>
                                        </div>
                                        <Link className='bg-red-500 px-4 py-2 rounded-md'><FaLongArrowAltRight className='text-white' /></Link>
                                    </div>
                                    <div className='flex jusitfy-center items-center gap-8 w-full text-white'>
                                        <span><FaRegFileAlt className='text-white' /></span>
                                        <div>
                                            <h2 className='text-md font-semibold'>Our Brochure</h2>
                                            <p className='text-xs'>Download</p>
                                        </div>
                                        <Link className='bg-red-500 px-4 py-2 rounded-md'><FaLongArrowAltRight className='text-white' /></Link>
                                    </div>
                                    <div className='flex jusitfy-center items-center gap-8 w-full text-white'>
                                        <span><FaRegFileAlt className='text-white' /></span>
                                        <div>
                                            <h2 className='text-md font-semibold'>Our Brochure</h2>
                                            <p className='text-xs'>Download</p>
                                        </div>
                                        <Link className='bg-red-500 px-4 py-2 rounded-md'><FaLongArrowAltRight className='text-white' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-8 text-3xl font-bold'>
                            <p>Price: </p><span><TbCurrencyTaka className='text-4xl font-bold ' /></span><p>{service.servicingPrice}</p>
                        </div>
                        <div className='flex gap-2 justify-center items-center py-4 my-10 bg-red-500 rounded-lg'>
                            <Link to={`/book/${service._id}`} className='text-xl text-white'>Proceed to Checkout</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ProceedPage;