import React from 'react';
import Image from 'next/image';
import About1 from '../../../public/images/About1.png';
import About2 from '../../../public/images/About2.png';
import Button from './Button';

const About = () => {
    // Data for about section
    const data = [
        {
            id: 1,
            photo: About1,
            heading: 'Develop Without Limits',
            subheading: 'WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.',
            buttonName: 'Read the Documentation'
        },
        {
            id: 2,
            photo: About2,
            heading: 'Know our Global Community',
            subheading: 'WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!',
            buttonName: 'Read the Documentation'
        },
    ];

    return (
        <div className="lg:my-[100px] md:my-[50px] my-[20px] h-fit">
            <div className="text-white w-full lg:px-[10vw] py-4 px-[5vw] bg-hero-about bg-cover bg-no-repeat bg-center">
                {/* Map over data to display each section */}
                {data.map((value, index) => (
                    <div key={index} className={`lg:flex items-center lg:gap-8 lg:w-full w-fit lg:mx-0 mx-auto ${value.id === 2 ? 'flex-row-reverse' : ''}`}>
                        {/* About section image */}
                        <Image src={value.photo} alt="About" className='lg:w-[380px] w-[300px] lg:mx-0 mx-auto' />
                        {/* About section content */}
                        <div className='md:w-[480px] w-[90vw] flex flex-col gap-4 lg:text-left text-center lg:mt-0 -mt-10 lg:pb-0 pb-10'>
                            {/* About section heading */}
                            <div className='font-nunito_sans text-[30px] leading-[35px] font-bold'>{value.heading}</div>
                            {/* About section subheading */}
                            <div className='font-roboto text-[18px] leading-[30px]'>{value.subheading}</div>
                            {/* About section button */}
                            <Button name={value.buttonName} className='bg-[#fff] text-purple font-medium lg:mx-0 mx-auto' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;