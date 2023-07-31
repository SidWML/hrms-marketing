import SectionHeadings from '@/components/generics/SectionHeadings'
import TitleTypography from '@/components/generics/TitleTypography'
import React from 'react'

export default function SectionTwo() {
  return (
    <div className=" w-full p-12 px-6 text-center flex flex-col space-y-12">
        <SectionHeadings text_color={`text-[#071952]`} title=" Companies of all sizes trust us for there HR needs" />
        <div className=" flex items-center gap-4 justify-center">
            <div className=" lg:max-w-[8%] md:w-[20%] w-full ">
                <img src="https://wmlit.com/Logo.png" alt="" className="" />
            </div>
            <div className=" lg:max-w-[10%] md:w-[30%] bg-black p-3 ">
                <img src="http://www.fervidsmart.com/assets/img/logo/Fervid_Logo_svg.svg" alt="" className="" />
            </div>
            <div className=" lg:max-w-[10%] md:w-[30%] ">
                <img src="./logo.png" alt="" className="" />
            </div>
        </div>
    </div>
  )
}
