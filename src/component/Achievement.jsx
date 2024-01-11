import React from 'react';
import achievement from "../assets/images/achieved.png"
import happy from "../assets/images/achievement/happy.png"
import service from "../assets/images/achievement/service.png"
import rate from "../assets/images/achievement/rate.png"
const Achievement = () => {
    const achievementData = [
        {
            src: service,
            title: "150K+",
            text: "Car’s get Serviced"
        },
        {
            src: rate,
            title: "4.8",
            text: "Rated"
        },
        {
            src: happy,
            title: "100K+",
            text: "Happy Customer"
        },
    ]
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center py-10'>What we have achieved till date</h2>
            <div className='flex justify-between gap-4'>
                <img src={achievement} className='w-1/2' alt="" />
                <div className='w-1/2'>
                    <h2 className='w-96'>Metre Per Secod is a 5 year old India's Premium and Best Rated Car Maintenance Startup. A glimpse of what we have achieved is as follows</h2>
                    <div className='grid grid-cols-1 gap-6'>
                        {
                            achievementData.map((data, i) => <div className='flex jusitfy-center items-center gap-2' key={i}>
                                <div className='w-24 p-4'>
                                    <img src={data.src} className='w-full rounded-full m-2' alt="" />
                                </div>
                                <div className='flex justify-center items-center gap-4'>
                                    <h2 className='text-4xl font-bold'>{data.title}</h2>
                                    <p>{data.text}</p>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;