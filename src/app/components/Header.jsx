'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import LinkTag from './LinkTag';
import logoHeader from '../../../public/images/LogoHeader.svg';
import search from '../../../public/images/Search.svg';
import close from '../../../public/images/close.svg';
import menu from '../../../public/images/menu.svg';

const Header = () => {
    // State to manage mobile menu open/close
    const [isOpen, setIsOpen] = useState(false);
    // Reference to the navigation container for mobile view
    const navRef = useRef(null);

    // Function to toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle click outside menu to close it
    const handleOutsideClick = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Effect to add event listener for outside click when menu is open
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('click', handleOutsideClick);
        } else {
            window.removeEventListener('click', handleOutsideClick);
        }
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile View */}
            <div ref={navRef} className='px-[5vw] py-7 absolute w-full lg:hidden'>
                <div className="flex justify-between">
                    <Image src={logoHeader} alt='Logo Header' width={150} priority={true} />
                    <button
                        aria-label="toggle menu"
                        onClick={toggleMenu}
                        className="text-purple focus:outline-none focus:text-purple"
                    >
                        {/* Conditional rendering of menu icon */}
                        {isOpen ? (
                            <Image src={close} alt="Close Icon" />
                        ) : (
                            <Image src={menu} alt="Menu Icon " />
                        )}
                    </button>
                </div>
                {isOpen && (
                    <div className="lg:hidden backdrop-blur-[15px] text-center py-4">
                        <div className="flex flex-col mt-2">
                            {/* Map over menu items */}
                            {['Sell', 'Marketplace', 'Community', 'Develop', 'Resources'].map((item, index) => (
                                <div key={index} className="capitalize text-primary no-underline bg-transparent py-[10px]" onClick={toggleMenu}>{item}</div>
                            ))}
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            {/* Log In button */}
                            <div className='text-primary text-[16px] font-medium font-roboto' onClick={toggleMenu}>Log In</div>
                            {/* Get Started button */}
                            <div onClick={toggleMenu}>
                                <LinkTag name='Get Started' className='bg-purple text-[#fff] px-3 py-2 text-[15px] font-medium font-roboto rounded cursor-pointer' />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop View */}
            <div className='lg:flex hidden justify-between px-[5vw] py-5 absolute w-full'>
                <div className='flex items-center xl:gap-[120px] lg:gap-[60px]'>
                    <Image src={logoHeader} alt='Logo Header' width={150} priority={true} className=" cursor-pointer" />
                    <div className='flex items-center gap-6 text-primary text-[16px] font-medium font-roboto'>
                        {/* Map over menu items */}
                        {['Sell', 'Marketplace', 'Community', 'Develop', 'Resources'].map((item, index) => (
                            <div key={index} className="cursor-pointer">{item}</div>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    {/* Log In button */}
                    <div className='text-primary text-[16px] font-medium font-roboto cursor-pointer'>Log In</div>
                    {/* Get Started button */}
                    <LinkTag name='Get Started' className='bg-purple text-[#fff] px-3 py-2 text-[15px] font-medium font-roboto rounded cursor-pointer' />
                    {/* Search icon */}
                    <Image src={search} alt='Search Icon' width={16} className=' cursor-pointer' />
                </div>
            </div>
        </>
    );
};

export default Header;
