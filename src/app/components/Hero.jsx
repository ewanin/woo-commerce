import React from 'react';
import HeroImage from '../../../public/images/heroImage.svg';
import Image from 'next/image';
import Button from './Button';
import LinkTag from './LinkTag';

const Hero = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 items-center pt-[100px] bg-gradient-to-b from-[#E5EFFF] from-0% via-[#E5EFFF42] via-84% to-[#E5EFFF00] to-100% h-fit'>
            {/* Left section with text content */}
            <div className='mx-[3vw] flex flex-col gap-7'>
                {/* Main heading */}
                <div className='font-nunito_sans font-bold xl:text-[70px] text-[50px] xl:leading-[75px] leading-[55px] text-primary md:text-left text-center'>Building exactly the eCommerce website you want.</div>
                {/* Subheading */}
                <div className='font-roboto text-[18px] leading-[25px] text-primary font-medium md:text-left text-center'>WooCommerce is a customizable, open-source eCommerce platform built on WordPress. Get started quickly and make your way.</div>
                {/* Buttons section */}
                <div className="flex md:flex-row flex-col items-center md:gap-4 gap-2 w-fit md:mx-0 mx-auto">
                    {/* Start a New Store button */}
                    <Button name="Start a New Store" className='bg-purple' />
                    {/* 'or' text */}
                    <div className='font-roboto text-[18px] leading-[25px] text-center text-primary font-medium'>or</div>
                    {/* Customize & Extend link */}
                    <LinkTag name="Customize & Extend" className="mx-auto" />
                </div>
            </div>
            {/* Right section with hero image */}
            <Image src={HeroImage} alt='Hero Banner Image' priority={true} className='xl:w-[700px] w-[450px] lg:block hidden justify-self-end' />
        </div>
    );
};

export default Hero;
