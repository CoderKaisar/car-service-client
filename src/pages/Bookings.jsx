import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const url = `https://car-service-server-site-eta.vercel.app/bookings?email=${user?.email}`
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-service-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    navigate("/")
                } else {
                    setBookings(data)
                }
            })
    }, [])
    const handleDelete = id => {
        Swal.fire({
            title: "Do you want to delete this booking?",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://car-service-server-site-eta.vercel.app/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire("Your have successfully deleted this booking");
                        }
                        const remaining = bookings.filter(book => book._id !== id);
                        setBookings(remaining)
                    })
            } else if (result.isDenied) {
                Swal.fire("You have wished to delete but cancelled it finally");

            }
        });

    }

    const handleConfirm = id => {
        fetch(`https://car-service-server-site-eta.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    let updatedBooking = bookings.find(booking => booking._id === id);
                    updatedBooking.status = "confirm";
                    const newBookings = [updatedBooking, ...remaining];
                    setBookings(newBookings)
                }
            })
    }

    return (
        <div>
            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Booked Service</th>
                            <th>Booking Date</th>
                            <th>Total Price</th>
                            <th>Paid Advance</th>
                            <th>Payment Due</th>
                            <th>User Name</th>
                            <th>Contact No</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <tr key={booking._id}>
                                <td>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-sm btn-primary btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-20 h-20 rounded border">
                                            <img src={booking.serviceImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    <h2 className="text-lg uppercase font-semibold">{booking.servicingName}</h2>
                                </td>
                                <td>
                                    <h2 className="text-md">{booking.bookingDate}</h2>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <span><TbCurrencyTaka className="text-lg" /></span><h2 className="text-md font-semibold"> {booking.servicingTotalPrice}</h2>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <span><TbCurrencyTaka className="text-lg" /></span><h2 className="text-md font-semibold"> {booking.advancedPayment}</h2>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <span><TbCurrencyTaka className="text-lg" /></span><h2 className="text-md font-semibold"> {booking.duePayment}</h2>
                                    </div>
                                </td>
                                <td>
                                    <h2 className="text-md">{booking.userName}</h2>
                                </td>
                                <td>
                                    <h2 className="text-md">{booking.contactNo}</h2>
                                </td>

                                <th>
                                    {
                                        booking.status === "confirm" ? <span className="text-white bg-orange-400 px-4 py-2 rounded-lg">Confirmed</span> : <button onClick={() => handleConfirm(booking._id)} className="btn hover:btn-secondary btn-warning btn-xs btn-primary">Please Confirm</button>
                                    }
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;