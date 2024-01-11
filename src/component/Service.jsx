import React from 'react';
import A from "../assets/images/services/01.png"
import B from "../assets/images/services/02.png"
import C from "../assets/images/services/03.png"
import D from "../assets/images/services/04.png"
import E from "../assets/images/services/05.png"
import F from "../assets/images/services/07.png"
import G from "../assets/images/services/08.png"
import H from "../assets/images/services/09.png"
import I from "../assets/images/services/10.png"
import J from "../assets/images/services/11.png"
import K from "../assets/images/services/12.png"
import L from "../assets/images/services/13.png"
import M from "../assets/images/services/14.png"
import N from "../assets/images/services/15.png"
import O from "../assets/images/services/16.png"
import '../assets/css/car.service.card.css'
const Service = () => {
    const carServices = [
        {
            id: 1,
            text: "General Service",
            src: A
        },
        {
            id: 2,
            text: "Denting and Painting",
            src: B
        },
        {
            id: 3,
            text: "Car Inspection",
            src: C
        },
        {
            id: 4,
            text: "Battery replacement",
            src: D
        },
        {
            id: 5,
            text: "AC service & repair",
            src: E
        },
        {
            id: 6,
            text: "Car fitments",
            src: F
        },
        {
            id: 7,
            text: "Car Detailing Services",
            src: G
        },
        {
            id: 8,
            text: "Car major repairs",
            src: H
        },
        {
            id: 9,
            text: "Windshield & Lights",
            src: I
        },
        {
            id: 10,
            text: "Suspeension Repairs",
            src: J
        },
        {
            id: 11,
            text: "Clutch Repairs",
            src: K
        },
        {
            id: 12,
            text: "Tires & Wheels",
            src: L
        },
        {
            id: 13,
            text: "Brake Repairs",
            src: M
        },
        {
            id: 14,
            text: "Car Services",
            src: N
        },
        {
            id: 15,
            text: "Membership",
            src: O
        }
        // {
        //     id: 16,
        //     text: "Insurence Claims",
        //     src: P
        // },
    ]
    return (
        <div className='py-10' id="#service">
            <h2 className='text-2xl text-center mb-6 font-bold'>Our Services</h2>
            <div className='grid grid-cols-4 justify-center items-center gap-2 w-2/3 mx-auto '>
                {
                    carServices.map(service => <div className='flex justify-center items-center serviceCard hover:bg-amber-500 '>
                        <div className='border-2 border-gray-300 rounded-md hover:rounded-lg p-4 w-64 h-60 py-4  flex flex-col justify-center items-center gap-6 hover:border-0 ' key={service.id}>
                            <div className='flex justify-between '>
                                <img src={service.src} className='w-32 mr-32' alt="" />
                                <h2 className='text-xl text-gray-400'>{service.id}</h2>
                            </div>
                            <h2 className='text-left text-xl'>{service.text}</h2>
                            <div className='flex justify-center items-center my-4 btn-div'>
                                <button className='btn btn-outline rounded-md btn-xs'>Enquire Us</button>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;