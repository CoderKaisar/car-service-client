import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const BookService = () => {
    const { user } = useContext(AuthContext)

    const loadedService = useLoaderData()
    const navigate = useNavigate()

    const handleBooked = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const contactNo = form.contactno.value;
        const servicingTotalPrice = parseFloat(loadedService.servicingPrice);
        const servicingName = loadedService.servicingName;
        const bookingDate = form.bookingDate.value;
        const serviceImage = loadedService.servicePhotoURL
        const advancedPayment = parseFloat(form.advancedPayment.value);
        const duePayment = servicingTotalPrice - advancedPayment;
        const bookedService = {
            userName,
            email,
            contactNo,
            servicingName,
            servicingTotalPrice,
            advancedPayment,
            duePayment,
            bookingDate,
            serviceImage,
        }
        fetch(`https://car-service-server-site-eta.vercel.app/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookedService)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
                    Swal.fire("Your order has been placed successfully")
                    form.reset();
                    navigate("/service")
                }
            })
    }



    return (
        <div className='my-10'>
            <div className='w-2/3 mx-auto border-b-2 border-gray-300 border-b-2 border-r-2 border-l-2 border-orange-500 rounded-lg' >
                <h2 className='w-full text-2xl py-4 text-center uppercase bg-orange-500 rounded-tl-lg rounded-tr-lg'>Booking Memo of <b>{loadedService.servicingName}</b></h2>
                <div className='flex justify-between items-center gap-4 mx-auto py-10 px-6'>
                    <div className='flex justify-center items-center my-4'>
                        <img className='w-80 rounded-lg h-80' src={loadedService.servicePhotoURL} alt="" />
                    </div>
                    <form onSubmit={handleBooked}>
                        <div className='grid grid-cols-3 gap-x-4 gap-y-6'>
                            <div className='flex flex-col gap-4 '>
                                <label>User Name</label>
                                <input name="userName" type="text" defaultValue={user?.uid ? user.displayName : "Default User"} placeholder="User Name" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <label>Email Address</label>
                                <input name='email' type="text" defaultValue={user?.email} placeholder="Price of Servicing" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <label>Contact Number</label>
                                <input name='contactno' type="number" placeholder="Please give your contact number" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <label>Servicing Name</label>
                                <input name='servicingName' type="text" defaultValue={loadedService.servicingName} placeholder="Short history of service" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <label>Advanced Payment</label>
                                <input name='advancedPayment' type="number" placeholder="Please Pay advance to start your servicing" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <label>Booking Date</label>
                                <input name='bookingDate' type="date" placeholder="MM/DD/YY" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <label>Payment Due</label>
                                <input name='duePayment' type="number" placeholder="automatically calculated" className="input input-bordered w-full max-w-xs" readOnly />
                            </div>
                            <div className='col-span-3 flex justify-center items-center h-24'>
                                <input type="submit" value="Book Service" className='bg-orange-600 hover:bg-orange-700 text-white rounded-md w-full py-2 text-xl' />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookService;