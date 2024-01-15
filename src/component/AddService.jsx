import React from 'react';
import addServicePhoto from '../assets/images/addService.jpg'
import Swal from 'sweetalert2';

const AddService = () => {
    // const [file, setFile] = useState(null)
    const handleFile = e => {
        setFile(e.target.files[0])
        // console.log(file)
    }
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        // const formData = new FormData()
        // formData.append("image", file)
        const servicingName = form.servicingName.value;
        const servicingPrice = form.servicingPrice.value;
        const servicingDetails = form.servicingDetails.value;
        const servicingDuration = form.servicingDuration.value;
        const servicePhotoURL = form.servicePhotoURL.value;
        // console.log(servicingName, servicingPrice, servicingDuration, servicingDetails, file)
        const serviceData = { servicingName, servicingPrice, servicingDuration, servicingDetails, servicePhotoURL }
        if (serviceData.length) {
            fetch(`https://car-service-server-site-eta.vercel.app/services`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(serviceData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire(`${servicingName} added successfully`)
                        form.reset()
                    }
                    console.log(data)
                }
                )
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please give all value",

            })
        }
    }



    return (
        <div>
            <div className='flex justify-center items-center gap-4 py-6'>
                <h2 className='text-4xl bg-orange-500 px-8 py-6 uppercase font-bold rounded-full text-white'>Add New Service</h2>
            </div>
            <div className='flex justify-center items-center gap-4 border-2 my-10'>
                <div className='w-2/5 border-r-2'>
                    <img src={addServicePhoto} alt="" />
                </div>
                <div className='w-3/5'>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-3 gap-x-4 gap-y-6'>
                            <div className='space-y-2'>
                                <label>Servicing Name</label>
                                <input name="servicingName" type="text" placeholder="Name of Servicing" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='space-y-2'>
                                <label>Servicing Cost</label>
                                <input name='servicingPrice' type="number" placeholder="Price of Servicing" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='space-y-2'>
                                <label>Servicing Details</label>
                                <input name='servicingDetails' type="text" placeholder="Servicing Details" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='space-y-2'>
                                <label>Servicing Duration</label>
                                <input name='servicingDuration' type="text" placeholder="Short history of service" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='space-y-2'>
                                <label>Servicing Image</label>
                                {/* <input type="file" name='file' onChange={handleFile} className="file-input file-input-bordered file-input-primary w-full max-w-xs" /> */}
                                <input name='servicePhotoURL' type="text" placeholder="Service Image Photo URL" className="input input-bordered w-full max-w-xs" />

                            </div>
                            <div className='col-span-3 flex justify-center items-center h-24'>
                                <input type="submit" value="Add Service" className='bg-orange-600 hover:bg-orange-800 text-white px-4 py-2 rounded-md' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;