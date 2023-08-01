import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import CallToActionSection from '@/components/generics/CallToActionSection'
import Marquee from '@/components/generics/Marquee'

export default function EmployeePortal() {
  return (
    <div className="">
        <SectionOne />
        <Marquee  />
        <SectionTwo />
        <div className=" lg:w-[90%]  p-6 mx-auto">
        <CallToActionSection background={` bg-[#70133a]`} />
        </div>
    </div>
  )
}
