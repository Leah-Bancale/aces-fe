import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

function Navbar() {


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
    <div className="sticky top-0 w-full z-10 ">
      <div className=" container mx-auto p-4 hidden md:flex">
        <div className="flex flex-row justify-between items-center">
          <p className='text-main'>Logo here</p>
        </div>
        <div className="hidden md:flex justify-center ml-auto">
          <ul className="flex p-4 space-x-8 text-main text-bold">
            <li><Link to="Home" spy={true} smooth={true} offset={10} duration={500} className='hover:cursor-pointer' > Home </Link></li>
            <li><Link to="Discover" spy={true} smooth={true} offset={-80} duration={500} className='hover:cursor-pointer'> Discover </Link></li>
            <li><Link to="Explore" spy={true} smooth={true} offset={-80} duration={500} className='hover:cursor-pointer'> Explore </Link></li>
            <li><Link to="Application" spy={true} smooth={true} offset={10} duration={500} className='hover:cursor-pointer'> Application </Link></li>

          </ul>

          <div className='flex flex-row gap-4 m-2 ml-6'>
            <button className='flex items-center justify-center border border-[#2E2376] rounded-lg w-[120px] text-bold'>Login </button>
            <button className='flex items-center justify-center border  rounded-lg w-[120px] bg-[#2E2376] text-bold text-white'>Register </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="container mx-auto p-2 md:hidden">
        <div>
          <div className="flex flex-row justify-between items-center sticky z-20" >
            <div className="flex" >
              <p className='text-main'>Logo here</p>
            </div>

            <div>
              {opened ? (
                <RxCross2 size={25} onClick={toggleMenu} />
              ) : (
                <RxHamburgerMenu size={25} onClick={toggleMenu} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${opened ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out fixed top-0 right-0 bg-white flex flex-col h-screen w-full justify-center items-center text-2xl z-10`}
        style={{ transform: opened ? 'translateX(0)' : 'translateX(100%)' }}
      >

        <div className="flex flex-col items-center text-center">
          <ul className="flex flex-col p-4 gap-6 text-main text-bold">
            <li><Link to="Home" spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu} className='hover:cursor-pointer'> Home </Link></li>
            <li><Link to="Discover" spy={true} smooth={true} offset={-45} duration={500} onClick={closeMenu} className='hover:cursor-pointer'> Discover </Link></li>
            <li><Link to="Explore" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu} className='hover:cursor-pointer'> Explore </Link></li>
            <li><Link to="Application" spy={true} smooth={true} offset={-55} duration={500} onClick={closeMenu} className='hover:cursor-pointer'> Application </Link></li>

          </ul>

          <div className='flex flex-col gap-4'>
            <button className='flex items-center justify-center border border-[#2E2376] rounded-lg w-[120px] text-main text-bold'>Login </button>
            <button className='flex items-center justify-center border  rounded-lg w-[120px] bg-[#2E2376] text-bold text-white'>Register </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar