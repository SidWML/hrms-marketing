import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import Marquee from '../generics/Marquee'

export default function Homepage() {
  return (
    <div className="">
        <SectionOne />
      <Marquee />
        <SectionFive />
        <SectionTwo />

        <SectionThree />
        <SectionFour />
    </div>
  )
}
