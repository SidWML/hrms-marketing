import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import CallToActionSection from '@/components/generics/CallToActionSection'
import Marquee from '@/components/generics/Marquee'

export default function TimeoffLandingPage() {
  return (
    <div className="">
        <SectionOne />
        <Marquee />
        <SectionTwo />
        <SectionThree />
        <div className=" lg:w-[90%] mx-auto p-6">
        <CallToActionSection background={` bg-[#884A39]`} />
        </div>
    </div>
  )
}
