import React from 'react';
import Image from 'next/image';
import PeopleFace from '../../../public/images/PeopleFace.png';

const People = () => {
    return (
        <div className='relative md:mt-16 mt-10'>
            {/* Background image */}
            <div className='bg-hero-peope bg-cover bg-no-repeat bg-bottom'>
                {/* Main heading */}
                <div className='font-nunito_sans text-center mx-auto font-bold text-primary lg:text-[50px] text-[35px] xl:leading-[55px] leading-[40px]'>Supported by real people</div>
                {/* Subheading */}
                <div className='font-roboto text-[18px] leading-[30px] text-primary font-medium md:w-[660px] w-[90vw] text-center mx-auto md:mt-10 mt-4'>Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.</div>
                {/* Image of people */}
                <Image src={PeopleFace} alt='PeopleFace' className='w-[1000px] mx-auto' />
            </div>
        </div>
    );
};

export default People;