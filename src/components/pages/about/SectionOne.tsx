import Button from '@/components/generics/Button'
import Paragraph from '@/components/generics/Paragraph'
import TitleTypography from '@/components/generics/TitleTypography'
import React from 'react'

export default function SectionOne() {
  return (
    <div className="">
      <div className=" w-full min-h-screen overflow-hidden relative flex flex-col items-center lg:p-12 py-12 justify-center bg-[#5F4B8BFF]">
        <div className=" py-[100px] text-start w-full grid lg:grid-cols-2  gap-4  ">
          <div className=" space-y-4  col-span-1 lg:p-12 p-6 w-full lg:text-start text-center">
            <TitleTypography text_color="text-[#E69A8DFF]   " title=" `When you empower your employees, you create a culture of trust, ownership, and excellence.`" />
            <Paragraph
              text_color="text-[white] lg:text-justify text-center  "
              description="At HRM, we believe that every organization deserves a seamless and effective HR management solution. Our platform offers a wide range of powerful tools, including payroll processing, time-off management, employee data tracking, and performance evaluation.. "
            />
            <div className=" flex items-center gap-4 pt-4 lg:justify-start justify-center ">
              <Button bg_color={`border-[white] border`} text_color={`text-white`} href="/register" label={`Book a demo `} />
              <Button bg_color={`bg-[#cde026]`} text_color={`text-black`} href="/register" label={`Get Started`} />
            </div>
          </div>
          <div className=" z-[2] h-full relative ">
            <img src="/employees.png" alt="" className=" h-full drop-shadow-2xl scale-150 object-scale-down w-full  m-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
