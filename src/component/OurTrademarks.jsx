import React from 'react';
import Service from '../assets/images/90.min.car.service.png'
import inHouseService from '../assets/images/in.house.service.png'
import savings from '../assets/images/saving.png'
const OurTrademarks = () => {
    const trademarksData = [
        {
            photo: Service,
            title: "90 Min Car Service",
            text: "Experience Quick Service which completes in just 90 Minutes, which will help you save your precious time and efforts of visiting Workshops to get your Car Serviced."
        },
        {
            photo: inHouseService,
            title: "In-house Technicians",
            text: "Metre Per Second recruits Best in class German Car Technicians with a Minimum of 8+ years of Experience and Train them. After enabling them with Garage Nation's standards they are assigned for Services/repairs."
        },
        {
            photo: savings,
            title: "Savings up to 40%",
            text: "Metre Per Second provides 100% Transparent Service which means all Parts are opened right in front of you while performing service and no more surprised or extra spares or costs."
        }
    ]
    return (
        <div className='py-20 bg-gray-300'>
            <h2 className='text-4xl text-center font-semibold pb-6'>Our Trademarks</h2>
            <div className='mx-auto w-2/3 grid grid-cols-3 gap-2 px-2'>
                {
                    trademarksData.map((data, i) => <div className='flex flex-col justify-center items-start px-6 w-64 gap-6 border-2 bg-white ' key={i}>
                        <div>
                            <div className=' bg-white mt-10 h-32 flex justify-center items-center   '>
                                <img src={data.photo} className='w-64 h-30 relative top-10' alt="" />
                            </div>
                            <div className='mt-20 pb-10'>
                                <h2 className='text-xl font-semibold pb-2'>{data.title}</h2>
                                <h2 className='text-sm leading-2'>{data.text}</h2>
                            </div>
                        </div>
                    </div >)
                }
            </div>
        </div>
    );
};

export default OurTrademarks;