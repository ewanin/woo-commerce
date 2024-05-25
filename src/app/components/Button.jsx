'use client'
import React from 'react';

const Button = (props) => {
    return (
        <button className={`${props.className} w-fit rounded-full px-8 py-4 font-roboto font-meium text-[18px] text-white`}>{props.name}</button>
    );
};

export default Button;