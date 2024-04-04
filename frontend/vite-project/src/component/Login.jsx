import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Header from './Header';
import Navbar from './Navbar';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/user/login", {

                email,
                password,
            });
            Cookies.set("authorization", response.data.token);
            toast.success(response.data.message, { position: "top-right" });
            console.log(response.data);
            setEmail("")
            setPassword("")
            setTimeout(() => {
                navigate("/home");
              }, 6000);
        } catch (error) {
            console.log("Error  login", error);
            if (error.response) {

                toast.error(response.data.message, { position: "top-right" });
            } else {

                toast.error("Network Error", { position: "top-right" });
            }
        }
    };

    return (
        <>
        <Navbar/>
        {/* <Header/> */}
            <div className='bg-gray-900 min-h-screen flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='bg-gray-900 shadow-2xl shadow-sky-900 rounded-2xl px-8 pt-6 pb-8 mb-4'>

                    <p className='mb-9 text-white font-semibold text-2xl'>Login to your account</p>
                    <div>
                        <p className='mb-4 text-white font-semibold text-xl'>
                            Don't have an account yet? <Link to="/signup" className="text-blue-500 hover:text-blue-300">Signup</Link>
                        </p>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-100 text-xl font-bold mb-2' htmlFor='email'>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            placeholder='Enter your email'
                            id='email'
                            name='email'
                            required
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-100 text-xl font-bold mb-2' htmlFor='password'>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            placeholder='Enter your password'
                            id='password'
                            name='password'
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Login
                    </button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}

export default Login;

