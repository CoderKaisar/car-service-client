import React from 'react';
import aboutBg from "../assets/images/hero2.png"
const AboutUs = () => {
    const aboutData = [
        {
            ser: 1,
            head: "Who we are?",
            data: "Established in 2016, with a Vision to Provide Customers Transparent, Convenient and Reliable Car Service and Repair right at Customer Doorstep in Hyderabad"
        },
        {
            ser: 2,
            head: "What is the problem?",
            data: "Car owners often lack visibility regarding the quality of Mechanics, usage of Spare parts and Transparency in price."
        },
        {
            ser: 3,
            head: "How do we help?",
            data: "Now, Metre Per Second is a Premier Doorstep Car Care Company providing Car Service with Professional Technicians right at your location in Hyderabad."
        },
    ]
    return (
        <div>
            <div className='w-full my-10 flex flex-col justify-center items-center' style={{ backgroundImage: `url(${aboutBg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "70%", padding: "10px 10px", margin: "50px 10px" }}>
                <h2 className='text-2xl font-semibold'>About Us</h2>
                <p className='text-xl'>At meter per second, we take pride in our values</p>
                <p className='text-md'>-service,integrity and excellece.</p>
            </div>
            <div className='grid grid-cols-3 justify-center items-center gap-6 mx-20 '>
                {
                    aboutData.map(about => <div className='flex flex-col jusitfy-center items-start gap-6 mr-32 mb-24'>
                        <h2 className='text-4xl font-semibold'>{about.ser}.</h2>
                        <p className='text-xl font-semibold'>{about.head}</p>
                        <p className=''>{about.data}</p>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AboutUs;