'use client'

import React from 'react'

const LinkTag = (props) => {
  return (
    <div className={`${props.className} font-roboto font-bold text-purple text-[18px] leading-[25px] w-fit cursor-pointer`}>{props.name}</div>
  )
}

export default LinkTag