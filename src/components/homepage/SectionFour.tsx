import Link from 'next/link'
import React from 'react'
import SectionHeadings from '../generics/SectionHeadings'
import Button from '../generics/Button'
import TitleTypography from '../generics/TitleTypography'
import CallToActionSection from '../generics/CallToActionSection'

export default function SectionFour() {
  return (
    <div className=" w-full lg:px-16 px-6 py-[60px]">
      <div className=" w-full pb-12 px-6 text-center flex flex-col space-y-12">
        <SectionHeadings text_color={`text-[#071952]`} title=" Companies of all sizes trust us for there HR needs" />
        <div className=" flex items-center gap-4 justify-center">
            <div className=" lg:max-w-[8%] md:w-[20%] w-full ">
                <img src="https://wmlit.com/Logo.png" alt="" className="" />
            </div>
            <div className=" lg:max-w-[10%] md:w-[30%] bg-black p-3 ">
                <img src="http://www.fervidsmart.com/assets/img/logo/Fervid_Logo_svg.svg" alt="" className="" />
            </div>
            <div className=" lg:max-w-[10%] md:w-[30%] ">
                <img src="/logo.png" alt="" className="" />
            </div>
        </div>
    </div>
      <CallToActionSection background={`bg-[#3F2E3E]`} />
       
    </div>
  )
}
