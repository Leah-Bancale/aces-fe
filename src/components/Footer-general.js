import React from 'react'

function FooterGeneral() {
    return (
        <div className=' bg-primary bottom-0 w-full text-white mt-auto '>
            <div className='container mx-auto flex  p-4 '>
                <div className='flex flex-col text-center space-y-8'>
                    <div className="justify-between items-center">
                        <p>Logo here</p>
                    </div>
                </div>

                <div className='flex mx-auto text-right '>
                    <ul className="flex items-center space-x-2 sm:space-x-8 hover:cursor-pointer text-[10px] sm:text-[16px]">
                    <li><a href="Events" className='flex flex-col '>Events</a></li>
                        <li><a href="Jobs" className='flex flex-col '>Jobs</a></li>
                        <li><a href="Notifs" className='flex flex-col '>Notifs</a></li>
                        <li><a href="Help" className='flex flex-col '>Help</a></li>
                        <li><a href="Profile" className='flex flex-col '>Profile</a></li>
                    </ul>
                </div>  
            </div>
        </div>
    )
}

export default FooterGeneral