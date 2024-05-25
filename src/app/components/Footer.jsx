'use client'
import React, { useState } from 'react';
import Button from './Button'
import guarantee from '../../../public/images/guarantee.svg'
import support from '../../../public/images/Support.svg'
import safe from '../../../public/images/Safe.svg'
import logoFooter from '../../../public/images/LogoFooter.svg'
import twitter from '../../../public/images/Twitter.svg'
import facebook from '../../../public/images/facebook.svg'
import instagram from '../../../public/images/linkedin.svg'
import automatic from '../../../public/images/automatic.png'
import Image from 'next/image'

// Component for a toggleable section in the footer
const ToggleSection = ({ title, isOpen, setIsOpen, sectionKey, closeOtherToggles, content }) => (
    <div className='my-4'>
        <div className='text-[14px] font-bold uppercase' onClick={() => {
            setIsOpen(!isOpen);
            closeOtherToggles(sectionKey);
        }}>{title}</div>
        {/* Toggle content */}
        {isOpen && (
            <div className='grid grid-cols-3'>
                {content.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        )}
    </div>
);

// Main Footer component
const Footer = () => {
    const [isOpenSections, setIsOpenSections] = useState({
        whoWeAre: false,
        woocommerce: false,
        other: false,
        support: false,
        recommend: false
    });

    // Function to close other toggles when one is opened
    const closeOtherToggles = (toggleToKeepOpen) => {
        const updatedSections = {};
        for (const key in isOpenSections) {
            updatedSections[key] = key === toggleToKeepOpen;
        }
        setIsOpenSections(updatedSections);
    };

    return (
        <div className='relative w-full'>
            {/* Header section */}
            <div className='bg-[#5F37EF] md:py-12 py-6 text-white md:px-[5vw] px-[2vw]'>
                <div className='flex md:flex-row flex-col items-center justify-around gap-4 w-fit mx-auto'>
                    <div className=' font-roboto ld:text-[30px] text-[22px] lg:leading-[40px] leading-[30px] md:text-left text-center'>WooCommerce - the <b>most customizable eCommerce platform</b> for building <b>your online business</b>.</div>
                    <Button name="GET STARTED" className='border-2 border-white' />
                </div>
            </div>

            {/* Main content section */}
            <div className='bg-purple text-white md:py-14 py-7 px-[5vw]'>
                <div className='xl:mx-[10vw] md:mx-[5vw] mx-[2vw] md:pb-14 pb-7 border-b border-white'>
                    <div className='flex md:flex-row flex-col md:items-center justify-around gap-4 md:mb-[150px] mb-[75px] md:w-full w-fit md:mx-0 mx-auto'>
                        {/* Features */}
                        <div className='flex items-center gap-4'>
                            <Image src={guarantee} alt='guarantee' width={40} />
                            <div className=' font-roboto'>30 day <b>money back guarantee</b></div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src={support} alt='support' width={40} />
                            <div className=' font-roboto'><b>Support</b> teams across the world</div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src={safe} alt='safe' width={40} />
                            <div className=' font-roboto'><b>Safe & Secure</b> online payment</div>
                        </div>
                    </div>
                    <Image src={logoFooter} alt='Logo Footer' className='w-fit mx-auto' />
                </div>

                {/* Desktop View */}
                <div className='text-white text-[12px] font-roboto hidden md:flex justify-around md:pt-14 pt-7'>
                    {sections.map((section, index) => (
                        <div key={index}>
                            <div className='text-[14px] font-bold uppercase'>{section.title}</div>
                            <div className='flex flex-col gap-2 mt-4'>
                                {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className=" cursor-pointer w-fit hover:underline">{item}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className='text-white text-[12px] font-roboto md:hidden justify-around md:pt-14 pt-7'>
                    <div>
                        {Object.entries(isOpenSections).map(([key, isOpen]) => (
                            <ToggleSection
                                key={key}
                                title={key === 'whoWeAre' ? 'Who we Are' : key}
                                isOpen={isOpen}
                                setIsOpen={(value) => setIsOpenSections({ ...isOpenSections, [key]: value })}
                                sectionKey={key}
                                closeOtherToggles={closeOtherToggles}
                                content={footerContent[key]}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* Footer section */}
            <div className='flex md:flex-row flex-col justify-between items-center md:gap-0 gap-3 xl:px-[10vw] md:px-[5vw] px-[2vw] py-4'>
                <div className='flex items-center xl:gap-10 lg:gap-5 md:gap-2 gap-5'>
                    <Image src={twitter} alt='Twitter' width={20} className=" cursor-pointer" />
                    <Image src={facebook} alt='Facebook' width={20} className=" cursor-pointer" />
                    <Image src={instagram} alt='Instagram' width={20} className=" cursor-pointer" />
                </div>
                <div className=' font-roboto text-[12px] text-primary text-center'>COPYRIGHT WOOCOMMERCE 2024 - TERMS & CONDITIONS PRIVACY POLICY</div>
                <Image src={automatic} alt='Automatic Icon' className=" cursor-pointer" />
            </div>
        </div>
    )
}

// Content for each section in mobile view
const footerContent = {
    whoWeAre: ['About', 'Team', 'Work With Us'],
    woocommerce: ['Features', 'Payments', 'Marketing', 'Shipping', 'Extension Store', 'eCommerce blog', 'Development blog', 'Ideas board', 'Mobile App', 'Community', 'Style Guide', 'Email Newsletter'],
    other: ['Storefront', 'WooSlider', 'Sensei', 'Sensei Extensions'],
    support: ['Documentation', 'Customizations', 'Support Policy', 'Contact', 'COVID-19 Resources', 'Privacy Notice for', 'California Users'],
    recommend: ['WooExperts', 'Hosting Solutions', 'Pre-sales FAQ', 'Success Stories', 'Design Feedback Group']
};

// Content for each section in desktop view
const sections = [
    {
        title: 'Who we Are',
        items: ['About', 'Team', 'Work With Us']
    },
    {
        title: 'Woocommerce',
        items: ['Features', 'Payments', 'Marketing', 'Shipping', 'Extension Store', 'eCommerce blog', 'Development blog', 'Ideas board', 'Mobile App', 'Community', 'Style Guide', 'Email Newsletter']
    },
    {
        title: 'Other products',
        items: ['Storefront', 'WooSlider', 'Sensei', 'Sensei Extensions']
    },
    {
        title: 'Support',
        items: ['Documentation', 'Customizations', 'Support Policy', 'Contact', 'COVID-19 Resources', 'Privacy Notice for', 'California Users']
    },
    {
        title: 'We recommend',
        items: ['WooExperts', 'Hosting Solutions', 'Pre-sales FAQ', 'Success Stories', 'Design Feedback Group']
    }
];

export default Footer