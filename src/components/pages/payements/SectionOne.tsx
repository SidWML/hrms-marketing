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
            <TitleTypography text_color="text-[#F2AA4CFF]   " title="Seamless Payments: Empowering Modern Businesses with Effortless Financial Control" />
            <Paragraph
              text_color="text-[white] lg:text-justify text-center  "
              description="Experience the future of payment solutions with our intuitive platform designed to streamline your payment processes effortlessly. Whether it's managing payroll for your workforce or handling contractor invoices, our integrated payment system simplifies local salary and global contractor payments in just a few clicks. Embrace seamless financial control, compliance, and unmatched efficiency with our secure and reliable payment solutions.  "
            />
            <div className=" flex items-center gap-4 pt-4 lg:justify-start justify-center ">
              <Button bg_color={`border-[white] border`} text_color={`text-white`} href="/register" label={`Book a demo `} />
              <Button bg_color={`bg-[#cde026]`} text_color={`text-black`} href="/register" label={`Get Started`} />
            </div>
          </div>
          <div className=" z-[2] h-full relative p-12 ">
            <img src="./Online-payment-receipt.svg" alt="" className=" w-full h-full  m-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
