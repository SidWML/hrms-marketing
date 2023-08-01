import Button from '@/components/generics/Button'
import Paragraph from '@/components/generics/Paragraph'
import TitleTypography from '@/components/generics/TitleTypography'
import React from 'react'

export default function SectionOne() {
  return (
    <div className="">
      <div className=" w-full min-h-screen overflow-hidden relative flex flex-col items-center lg:p-12 py-12 justify-center bg-[#101820FF]">
        <div className="  py-[100px] text-start w-full grid lg:grid-cols-2  gap-4  ">
          <div className=" space-y-4  col-span-1 lg:p-12 p-6 w-full lg:text-start  text-center">
            <TitleTypography text_color="text-[#F2AA4CFF]   " title="Empowering Your Workforce with an Integrated HR Management App" />
            <Paragraph
              text_color="text-[white] lg:text-justify text-center  "
              description=" `HRM Hub` is a comprehensive Human Resource Management (HRM) app that revolutionizes how your organization manages and interacts with its workforce. From streamlining HR processes to promoting employee engagement, this all-in-one platform empowers your team with essential tools and features for a more efficient, connected, and productive workplace.`   "        />
            <div className=" flex items-center gap-4 pt-4 lg:justify-start justify-center ">
              <Button bg_color={`border-[white] border`} text_color={`text-white`} href="/register" label={`Book a demo `} />
              <Button bg_color={`bg-[#cde026]`} text_color={`text-black`} href="/register" label={`Get Started`} />
            </div>
          </div>
          <div className=" z-[2] h-full relative p-12 ">
            <img src="./employee.png" alt="" className=" w-full h-full  m-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
