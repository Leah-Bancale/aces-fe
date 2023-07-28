import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { FaCalendarAlt, FaBriefcase, FaBell, FaQuestionCircle, FaUserCircle } from "react-icons/fa";


function NavbarGeneral() {


    const [opened, setOpened] = useState(false);

    const toggleMenu = () => {
        setOpened(!opened);
    };

    const closeMenu = () => {
        setOpened(false);
    };

    useEffect(() => {
        if (opened && window.innerWidth < 1023) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [opened])




    return (
        <div className="static top-0 w-full bg-primary">
            <div className="container mx-auto p-3 hidden sm:flex ">
                <div className="flex flex-row justify-between items-center">
                    <p className='text-white'>Logo here</p>
                </div>
                <div className="hidden sm:flex justify-center ml-auto">
                    <ul className="flex space-x-8 text-white text-[14px] text-bold items-center ">

                        <li><a href="/Events" className='flex flex-col items-center'><FaCalendarAlt size={25} className='mb-1'/>Events</a></li>
                        <li><a href="/Jobs" className='flex flex-col items-center'><FaBriefcase size={25} className='mb-1'/>Jobs</a></li>
                        <li><a href="/Notifs" className='flex flex-col items-center'><FaBell size={25} className='mb-1'/>Notifs</a></li>
                        <li><a href="/Help" className='flex flex-col items-center'><FaQuestionCircle size={25} className='mb-1'/>Help</a></li>
                        <li><a href="/Profile" className='flex flex-col items-center'><FaUserCircle size={25} className='mb-1'/>Profile</a></li>
                    </ul>
                </div>
            </div>

            {/* mobile */}
            <div className="container mx-auto p-2 sm:hidden">
                <div>
                    <div className="flex flex-row justify-between items-center sticky z-20" >
                        <div className="flex" >
                            <p className='text-white'>Logo here</p>
                        </div>

                        <div>
                            {opened ? (
                                <RxCross2 size={25} onClick={toggleMenu} className='text-white' />
                            ) : (
                                <RxHamburgerMenu size={25} onClick={toggleMenu} className='text-white' />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`${opened ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-500 ease-in-out fixed top-0 right-0 bg-primary flex flex-col h-screen w-full justify-center items-center text-2xl z-10`}
                style={{ transform: opened ? 'translateX(0)' : 'translateX(100%)' }}
            >

                <div className="flex flex-col items-center text-center">
                    <ul className="flex flex-col p-4 gap-6 text-white text-bold">
                    <li><a href="Events" className='flex flex-col items-center' onClick={closeMenu} ><FaCalendarAlt size={25} className='mb-1'/>Events</a></li>
                        <li><a href="/Jobs" className='flex flex-col items-center' onClick={closeMenu} ><FaBriefcase size={25} className='mb-1'/>Jobs</a></li>
                        <li><a href="/Notifs" className='flex flex-col items-center' onClick={closeMenu} ><FaBell size={25} className='mb-1'/>Notifs</a></li>
                        <li><a href="/Help" className='flex flex-col items-center' onClick={closeMenu} ><FaQuestionCircle size={25} className='mb-1'/>Help</a></li>
                        <li><a href="/Profile" className='flex flex-col items-center' onClick={closeMenu} ><FaUserCircle size={25} className='mb-1'/>Profile</a></li>
                    </ul>


                </div>
            </div>

        </div>
    )
}

export default NavbarGeneral