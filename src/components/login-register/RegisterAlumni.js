import React from 'react'
import placeholder from '../../assets/placeholder.webp'
import { FaFacebook, FaGoogle, FaEnvelope, FaLock, FaIdBadge, FaUserAlt } from "react-icons/fa";

function RegisterAlumni() {
    return (
        <div>

            <div className='container mx-auto flex py-8 gap-2  p-2 sm:p-0'>
            <div className='hidden md:flex md:w-[30%] lg:w-[40%]'>
                    <img
                        src={placeholder}
                        alt="placeholder"
                        className='mb-4 w-full h-full object-cover'
                    />
                </div>

                <div className='w-full md:w-[70%] lg:w-[60%] ml-auto justify-end border rounded-md p-8 space-y-4 border-slate-300 bg-white '>

                    <h1 className='text-2xl'> Welcome to <br /> <span className='font-extrabold text-main text-3xl'>ACES!</span></h1>

                    <button className='flex w-full rounded-md shadow-md justify-center border p-4'><FaFacebook size={25} className='mx-2' /> Login with Facebook</button>

                    <button className='flex w-full rounded-md shadow-md justify-center border p-4'><FaGoogle size={25} className='mx-2' /> Login with Google</button>


                    <div class="flex items-center justify-center">
                        <div class="border border-solid border-slate-200 h-px w-1/3"></div>
                        <div class="mx-4 text-slate-400">OR</div>
                        <div class="border border-solid border-slate-200 h-px w-1/3"></div>
                    </div>

                    <div className='flex items-center border rounded-md shadow-md p-2'>
                        <FaUserAlt size={25} className='mx-2' />
                        <input
                            type='name'
                            name='name'
                            placeholder='Name'
                            className='outline-none p-2  '
                        />
                    </div>

                    <div className='flex items-center border rounded-md shadow-md p-2'>
                        <FaIdBadge size={25} className='mx-2' />
                        <input
                            type='number'
                            name='number'
                            placeholder='ID Number'
                            className='outline-none  p-2  '
                        />
                    </div>


                    <div className='flex items-center border rounded-md shadow-md p-2'>
                        <FaEnvelope size={25} className='mx-2' />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            className='outline-none p-2  '
                        />
                    </div>

                    <div className='flex items-center border rounded-md shadow-md p-2'>
                        <FaLock size={25} className='mx-2' />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='outline-none p-2  '
                        />
                    </div>

                    <div className='flex text-sm '>
                        <input
                            type='checkbox'
                            name='check'
                            className='mx-1'
                        />
                        <p>Remember me</p>

                    </div>

                    <button className='w-full p-4 bg-main rounded-md text-white'>Login</button>
                    <p className='text-[14px] mt-[-15px] mb-4 text-center'>Already have an account? <span className=' text-second underline'>Login</span></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterAlumni