import React from 'react';
import { Link } from 'react-router-dom';

const CompanyOverviews = () => {
    return (
        <div className='bg-blue-200 py-10'>
            <h2 className='text-center text-xl py-10'>Company’s overview car services</h2>
            <div className='flex justify-center items-center gap-6 '>

                <Link className='w-34 h-34 p-4 h-20 border-2 rounded-sm hover:bg-blue-300 hover:text-white hover:border-0 flex justify-center items-center'>Car Repair</Link>
                <Link className='w-34 h-34 p-4 h-20 border-2 rounded-sm hover:bg-blue-300 hover:text-white hover:border-0 flex justify-center items-center'>Car Inspection</Link>
                <Link className='w-34 h-34 p-4 h-20 border-2 rounded-sm hover:bg-blue-300 hover:text-white hover:border-0 flex justify-center items-center'>Car Denting & Painting</Link>
                <Link className='w-34 h-34 p-4 h-20 border-2 rounded-sm hover:bg-blue-300 hover:text-white hover:border-0 flex justify-center items-center'>Car Major Repairs</Link>
                <Link className='w-34 h-34 p-4 h-20 border-2 rounded-sm hover:bg-blue-300 hover:text-white hover:border-0 flex justify-center items-center'>Car Custom Repairs</Link>
                <Link className='w-34 h-34 p-4 h-20 border-2 rounded-sm hover:bg-blue-300 hover:text-white hover:border-0 flex justify-center items-center'>Car AC Service</Link>
            </div>
        </div >
    );
};

export default CompanyOverviews;