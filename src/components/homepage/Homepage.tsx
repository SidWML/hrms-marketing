import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import Marquee from '../generics/Marquee'
import ToolsMarquee from '../generics/ToolsMarquee'
import CallToActionSection from '../generics/CallToActionSection'

export default function Homepage() {
  return (
    <div className="">
        <SectionOne />
      <Marquee />
        <SectionFive />
        <SectionTwo />

        <SectionThree />
        <ToolsMarquee />
        <SectionFour />
        <div className=" md:w-[90%] w-full mx-auto p-6">
          <CallToActionSection background={` bg-[#982176]`} />
        </div>
    </div>
  )
}
