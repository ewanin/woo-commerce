import React from 'react';
import Image from 'next/image';
import Testi1 from '../../../public/images/Testi1.png';
import Testi2 from '../../../public/images/Testi2.png';
import Testi3 from '../../../public/images/Testi3.png';
import Testi4 from '../../../public/images/Testi4.png';
import Testi5 from '../../../public/images/Testi5.png';
import Testi6 from '../../../public/images/Testi6.png';
import Testimonial from '../../../public/images/Testimonial.svg';

const Testimonials = () => {
    // Array of testimonial images
    const testimonialImages = [Testi1, Testi2, Testi3, Testi4, Testi5, Testi6];
    // Main content of the testimonial
    const testimonialContent = "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!";

    return (
        <div className='relative'>
            <div className="text-white w-full px-[5vw] bg-hero-testimonial bg-cover bg-no-repeat bg-top">
                {/* Main heading */}
                <div className='font-nunito_sans md:w-[17ch] text-center mx-auto font-bold text-primary lg:text-[50px] text-[35px] xl:leading-[55px] leading-[40px]'>Trusted by Agencies & Store Owners</div>
                {/* Testimonials */}
                <div className='flex md:flex-row flex-col items-center justify-between md:mt-0 mt-10'>
                    {/* Left testimonial images */}
                    <div className='flex md:flex-col flex-row md:gap-32 '>
                        {testimonialImages.slice(0, 3).map((image, index) => (
                            <Image key={index} src={image} alt={`Testimonial ${index + 1}`} className='h-auto w-[100px]' />
                        ))}
                    </div>
                    {/* Testimonial content */}
                    <div className='relative'>
                        <Image src={Testimonial} alt='Testimonial' className='lg:w-[700px] w-[500px] h-[400px] object-cover' />
                        <div className='lg:w-[500px] md:w-[420px] w-[80vw] font-nunito_sans md:text-[24px] text-[20px] text-primary font-medium absolute md:top-[20%] top-[10%] lg:left-[13%] md:left-[10%] left-[8%]'>{testimonialContent}</div>
                    </div>
                    {/* Right testimonial images */}
                    <div className='flex md:flex-col flex-row md:gap-32'>
                        {testimonialImages.slice(3).map((image, index) => (
                            <Image key={index + 3} src={image} alt={`Testimonial ${index + 4}`} className='h-auto w-[100px]' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
