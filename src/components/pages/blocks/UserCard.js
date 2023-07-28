import React from 'react'

function UserCard({ data }) {
    return (

        <div className='flex flex-col bg-white border rounded-lg p-4 mx-4 sm:mx-0 space-y-6'>
            <div className='flex flex-col mx-auto justify-center items-center text-center'>
                <img
                    src={data.img}
                    alt="placeholder"
                    className='w-[90px] h-[90px] rounded-full border border-slate-300 '
                />
                <h1 className='font-bold py-2'>{data.Name}</h1>
                <h1 className='text-[12px]'>{data.title}</h1>

            </div>

            <div className='flex flex-col text-[12px] space-y-2'>
                <div className="flex mx-auto border border-solid border-slate-200 h-px w-full my-2" />

                <div className='flex justify-between'>
                    <p>Company</p>
                    <p className='font-bold '>{data.Company}</p>
                </div>

                <div className='flex justify-between'>
                    <p>Location</p>
                    <p className='font-bold '>{data.Location}</p>
                </div>

                <div className='flex justify-between'>
                    <p>Years of Exp</p>
                    <p className='font-bold '>{data.Years}</p>
                </div>

                <div className="flex mx-auto border border-solid border-slate-200 h-px w-full my-2" />

                <div className='flex justify-between'>
                    <p>Graduated</p>
                    <p className='font-bold '>{data.Graduated}</p>
                </div>

                <div className='flex justify-between'>
                    <p>Program</p>
                    <p className='font-bold '>{data.Program}</p>
                </div>

                <div className='flex justify-between'>
                    <p>Department</p>
                    <p className='font-bold '>{data.Department}</p>
                </div>

                <div className="flex mx-auto border border-solid border-slate-200 h-px w-full my-2" />

                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <p>Skills</p>
                        <p className='font-bold '>{data.Skills}</p>
                    </div>
                    <p className='flex justify-end text-[#0098FF]'>View All</p>
                </div>
            </div>
        </div>

    )
}

export default UserCard