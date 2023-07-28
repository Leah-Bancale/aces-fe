import React from 'react'
import placeholder from '../../assets/placeholder.webp'
import { FaEnvelope } from "react-icons/fa";



function ForgotPassword() {
    return (
        <div>

            <div className='container mx-auto flex py-8 gap-2 p-2 sm:p-0'>
                <div className='hidden md:flex md:w-[30%] lg:w-[40%]'>
                    <img
                        src={placeholder}
                        alt="placeholder"
                        className='mb-4 w-full h-full object-cover'
                    />
                </div>

                <div className='w-full md:w-[70%] lg:w-[60%] ml-auto justify-end border rounded-md p-8 space-y-4 border-slate-300 bg-white '>

                    <h1 className='text-4xl font-bold text-main'> Forgot <br /> Password?</h1>
                    <p className='text-main pb-8'>Dont worry. We can help</p>

                    <div className='space-y-8'>
                        <div className='flex items-center border rounded-md shadow-md p-4 '>
                            <FaEnvelope size={25} className='mx-2' />
                            <input
                                type='email'
                                name='email'
                                placeholder='Email Address'
                                className='outline-none flex-1 '
                            />
                        </div>

                        <button className='w-full p-4 bg-main rounded-md text-white'>Continue</button>
                    </div>

                    <p className='text-[14px] mt-[-15px] mb-4 text-center'>Remember your password? <span className=' text-second underline'>Back to Login</span> </p>

                </div>
            </div>

        </div>
    )
}

export default ForgotPassword