import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { UseAuth } from '../context/AuthContext';

function Login() {
const [message,setMessage]=useState("")
const {loginUser, loginWithGoogle }=UseAuth();

const { register, handleSubmit, watch, formState: { errors } } = useForm();
const nevigate=useNavigate();
const onSubmit = async(data) =>{
try {
    await loginUser(data.email,data.password);
    alert("login successful");
    nevigate("/");
} catch (error) {
    setMessage("Please provid e proper email and password");
}
}

const handleGoogleSignIn=async()=>{
    try {
        await loginWithGoogle()
        alert("login successful");
        nevigate("/");
    } catch (error) {
        setMessage("unable to login using google");
    }
}

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Email
                    </label>
                    <input 
                    {...register("email", { required: true })}
                    type='text' placeholder='email address' id='email' name='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow'/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Password
                    </label>
                    <input 
                     {...register("password", { required: true })}
                    type='password' placeholder='password' id='password' name='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow'/>
                </div>
                {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Login</button>
                </div>
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'>Haven't an account, please <Link to="/register" className='text-blue-500 hover:text-blue-700'>Register</Link></p>

            <div className='mt-5'>
                <button
                 onClick={handleGoogleSignIn}
                className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                <FaGoogle  className='mr-2'/>
                Sign in with Google
                </button>
            </div>
            <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Login