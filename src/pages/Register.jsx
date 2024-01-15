import React, { useContext } from 'react';
import register from '../assets/images/register.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const uName = form.uName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const newUser = { uName, password, photoURL }
        createUser(email, password)
            .then(res => {
                const regUser = res.user;
                console.log(regUser)
                if (regUser.uid) {
                    Swal.fire(`${regUser.email} has been registered successfully`);
                    form.reset()
                    navigate("/")
                }
            })
            .catch(err => {
                const errMsg = err.message
            })


    }
    return (
        <div>
            <div className=' flex jusitfy-center items-center h-screen w-80 mx-auto '>
                <div className='w-96 flex justify-between items-center gap-4 rounded-lg shadow-xl '>
                    <img className='w-56' src={register} alt="" />
                    <form onSubmit={handleSubmit}>
                        <div className='w-80 h-full  space-y-2 p-10 py-6 bg-gray-300 rounded-r-md'>
                            <h2 className='text-xl text-center font-semibold mb-8'>Register Please</h2>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="uName">User Name</label>
                                <input type="text" className='rounded-lg h-8 w-56' name="uName" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email">Email</label>
                                <input type="email" className='rounded-lg h-8 w-56' name="email" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="uName">Photo URL</label>
                                <input type="text" className='rounded-lg h-8 w-56' name="photoURL" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="password">Password</label>
                                <input className=' rounded-lg h-8 w-56' type="password" name="password" />
                            </div>
                            <div className='flex justify-center items-center '>
                                <input type="submit" value="Register" className='bg-blue-400 px-2  rounded-md my-4' />
                            </div>
                            <h2 className='text-sm'>Already have an account. Please <Link className='font-semibold text-blue-600' to="/login">Login</Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;