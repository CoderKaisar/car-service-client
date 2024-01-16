import React from 'react';
import image1 from "../assets/images/partner/alianz.jpg"
import image2 from "../assets/images/partner/bro4u.png"
import image3 from "../assets/images/partner/ola.png"
import image4 from "../assets/images/partner/pitstop.png"
import image5 from "../assets/images/partner/uber.png"
import image6 from "../assets/images/partner/urban.png"

const Partner = () => {
    const partners = [
        {
            src: image1
        },
        {
            src: image2
        },
        {
            src: image3
        },
        {
            src: image4
        },
        {
            src: image5
        },
        {
            src: image6
        },

    ]
    return (
        <div className='mt-10 '>
            <h2 className='mt-4 text-xl font-semibold text-center'>Our Partner</h2>
            <div className='flex gap-10 justify-center items-center mt-10 bg-gray-200'>
                {
                    partners.map((partner) => <div key={partner._id}><img className='w-40 rounded-full' src={partner.src} /></div>)
                }
            </div>
        </div>
    );
};

export default Partner;