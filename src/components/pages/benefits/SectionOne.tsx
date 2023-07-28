import Button from '@/components/generics/Button'
import Paragraph from '@/components/generics/Paragraph'
import TitleTypography from '@/components/generics/TitleTypography'
import React from 'react'

export default function SectionOne() {
  return (
    <div className="">
      <div className=" w-full min-h-screen overflow-hidden relative flex flex-col items-center lg:p-12 py-12 justify-center bg-[#990011FF]">
        <div className=" py-[100px] text-start w-full grid lg:grid-cols-2  gap-4  ">
          <div className=" space-y-4  col-span-1 lg:p-12 p-6 w-full lg:text-start text-center">
            <TitleTypography text_color="text-[#FCF6F5FF]   " title="Explore the Superior HRM Benefits Management Solution" />
            <Paragraph
              text_color="text-[white] lg:text-justify text-center  "
              description="With a seamless and intuitive interface, our solution effortlessly handles health insurance, retirement plans, paid time off, and more. Unlock the potential of your workforce with tailored benefits packages that cater to their unique needs. Join us now and witness the transformation of your HR management, enabling your employees to thrive like never before. "
            />
            <div className=" flex items-center gap-4 pt-4 lg:justify-start justify-center ">
              <Button bg_color={`border-[white] border`} text_color={`text-white`} href="/register" label={`Book a demo `} />
              <Button bg_color={`bg-[#cde026]`} text_color={`text-black`} href="/register" label={`Get Started`} />
            </div>
          </div>
          <div className=" z-[2] h-full relative p-12 ">
            <img src="./benefits.svg" alt="" className=" max-w-[80%] h-full drop-shadow-2xl  m-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
