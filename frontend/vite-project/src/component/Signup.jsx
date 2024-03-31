import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/user/signup", {
                username,
                email,
                password,
            });
            Cookies.set("authorization", response.data.token);
            toast.success(response.data.message, { position: "top-right" });
            console.log(response.data);
            setEmail("")
            setPassword("")
            setUsername("")
        } catch (error) {
            console.log("Error signing up", error);
            if (error.response) {
               
                toast.error(error.response.data.message, { position: "top-right" });
            } else {
              
                toast.error("Network Error", { position: "top-right" });
            }
        }
    };

    return (
        <>
            <div className='bg-white min-h-screen flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <p className='text-white mb-4 font-semibold text-2xl'>Signup to create an account</p>
                    <div className='mb-4'>
                    <div>
              <p className='mb-4 text-white font-semibold text-xl'>
                Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-300">Login</Link>
              </p>
            </div>
                        <label className='block text-gray-100 text-xl font-bold mb-2' htmlFor='name'>Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type='text'
                            placeholder='Enter your name'
                            id='name'
                            name='name'
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
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
                        Signup
                    </button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}

export default Signup;
