import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import CallToActionSection from '@/components/generics/CallToActionSection'
import Marquee from '@/components/generics/Marquee'

export default function AboutLandingPage() {
  return (
    <div className="">
        <SectionOne />
        <Marquee />
        {/* <SectionTwo /> */}
        <SectionThree />
        <div className=" w-[90%] mx-auto lg:p-12 py-6 ">
            <CallToActionSection background={`bg-[#6C3428]`} />
        </div>
    </div>
  )
}
