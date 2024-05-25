import React from 'react';
import LinkTag from './LinkTag';
import Services1 from '../../../public/images/Services1.png';
import Services2 from '../../../public/images/Services2.png';
import Services3 from '../../../public/images/Services3.png';
import Image from 'next/image';

const Services = () => {
    // Data for services
    const data = [
        {
            id: '1',
            photo: Services1,
            heading: 'All You Need to Start',
            subheading: 'Add WooCommerce plugin to any WordPress site and set up a new store in minutes.',
            link: 'Ecommerce for Wordpress'
        },
        {
            id: '2',
            photo: Services2,
            heading: 'Customize and Extend',
            subheading: 'From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.',
            link: 'Browse Extensions'
        },
        {
            id: '3',
            photo: Services3,
            heading: 'Active Community',
            subheading: 'WooCommerce is one of the fastest-growing eCommerce communities.',
            link: 'Check our Forums'
        },
    ];

    return (
        <div className='lg:mt-0 mt-[100px]'>
            {/* Main heading */}
            <div className='font-nunito_sans lg:w-[14ch] text-center mx-auto font-bold text-primary lg:text-[50px] text-[35px] xl:leading-[55px] leading-[40px] md:px-0 px-[2vw]'>Your eCommerce made simple</div>
            {/* Services grid */}
            <div className='flex lg:flex-row flex-col justify-around lg:gap-0 gap-10 lg:mt-12 mt-4 lg:w-full w-fit lg:mx-0 mx-auto'>
                {/* Map over data to display each service */}
                {data.map((value, index) => (
                    <div key={index} className='md:w-[500px] w-[90vw]'>
                        {/* Service image */}
                        <Image src={value.photo} alt='Services' className='md:w-[500px] w-[90vw] mx-auto' />
                        {/* Service details */}
                        <div className='flex flex-col md:gap-5 gap-2 md:mx-5 mx-0 lg:mt-0 -mt-6 lg:text-left text-center'>
                            {/* Service heading */}
                            <div className='font-nunito_sans font-bold text-primary text-[30px] leading-[35px]'>{value.heading}</div>
                            {/* Service subheading */}
                            <div className='font-roboto text-primary font-medium text-[18px] leading-[30px]'>{value.subheading}</div>
                            {/* Service link */}
                            <LinkTag name={value.link} className='lg:mx-0 mx-auto' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;