import React from 'react'
import TitleTypography from './TitleTypography'
import SectionHeadings from './SectionHeadings'
import Button from './Button'

export default function CallToActionSection({background}) {
  return (
    <div className={`md:p-12 p-6 border w-full grid md:grid-cols-3 gap-6 items-center  rounded-[20px]  text-white ${background} `}>
    <div className=" flex items-center justify-center col-span-1" >
       <img src="./run.png" alt="" className=" max-w-[50%] " />
     </div>
     <div className=" space-y-6  md:col-span-2 md:text-start text-center">
       <TitleTypography title={`Empower HRM: Elevate HR Management`} />
       <SectionHeadings description={`Streamlined HR processes. Powerful automation. Reserve your demo now!`}  />
       <div className=" flex md:flex-row flex-col items-center gap-4 ">
       <Button bg_color={`border-[white] border`} text_color={`text-white`} href="/register" label={`Book a demo `} />
       <Button bg_color={`bg-[#cde026]`} text_color={`text-white`} href="/register" label={`Get Started`} />
       </div>
     </div>
    
    </div>
  )
}
