import React from 'react'
import placeholder from '../../assets/placeholder.webp'
import { FaKey } from "react-icons/fa";


function ChangePassword() {
    return (
        <div >

            <div className='container mx-auto flex py-8 gap-2 p-2 sm:p-0'>
                <div className='hidden md:flex md:w-[30%] lg:w-[40%]'>
                    <img
                        src={placeholder}
                        alt="placeholder"
                        className='mb-4 w-full h-full object-cover'
                    />
                </div>

                <div className='w-full md:w-[70%] lg:w-[60%] ml-auto justify-end border rounded-md p-8 space-y-4 border-slate-300 bg-white '>

                    <h1 className='text-4xl font-bold text-main'> Change <br /> Password</h1>

                    <div className='space-y-8'>
                        <div className='flex items-center border rounded-md shadow-md p-4 '>
                            <FaKey size={25} className='mr-2' />
                            <input
                                type='password'
                                name='password'
                                placeholder='New Password'
                                className='outline-none'
                            />
                        </div>

                        <div className='flex items-center border rounded-md shadow-md p-4 '>
                            <FaKey size={25} className='mr-2' />
                            <input
                                type='password'
                                name='password'
                                placeholder='Confirm Password'
                                className='outline-none'
                            />
                        </div>

                        <button className='w-full p-4 bg-main rounded-md text-white'>Reset Password</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ChangePassword