import React, { useContext } from 'react';
import login from '../assets/images/login.jpg'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const logUser = { email, password }
        logIn(email, password)
            .then(res => {
                const user = res.user;
                if (user) {
                    navigate(from, { replace: true })
                    form.reset();
                }
            })
            .catch(err => {
                const errMsg = err.message
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                if (user) {
                    navigate(from, { replace: true })
                }
            })
            .catch(err => {
                const errMsg = err.message;
                console.log(errMsg)
            })
    }
    return (
        <div>
            <div className=' flex jusitfy-center items-center h-screen w-80 mx-auto '>
                <div className='w-96 flex justify-between items-center gap-4 rounded-lg shadow-xl '>
                    <img className='w-56' src={login} alt="" />
                    <form onSubmit={handleSubmit}>
                        <div className='w-80 h-full  space-y-2 p-10 py-6 bg-gray-300 rounded-r-md'>
                            <h2 className='text-xl text-center font-semibold mb-8'>Login Please</h2>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="uName">Email</label>
                                <input type="email" className='rounded-lg h-8 w-56' name="email" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="password">Password</label>
                                <input className=' rounded-lg h-8 w-56' type="password" name="password" />
                            </div>
                            <div className='flex justify-center items-center '>
                                <input type="submit" value="Login" className='bg-blue-400 px-2  rounded-md my-4' />
                            </div>
                            <h2 className='text-sm'>Don't have an account. Please <Link className='font-semibold text-blue-600' to="/register">Register</Link></h2>
                            <div>
                                <h2 className='text-center text-md font-semibold'>Or Login Using</h2>
                                <div className='flex justify-center items-center py-4 gap-6'>
                                    <button onClick={handleGoogleSignIn}>
                                        <FaGoogle />
                                    </button>
                                    <span>
                                        <FaFacebookF />
                                    </span>
                                    <span>
                                        <FaLinkedin />

                                    </span>
                                    <span>
                                        <FaYoutube />

                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;