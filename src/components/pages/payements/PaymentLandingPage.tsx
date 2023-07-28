import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import CallToActionSection from '@/components/generics/CallToActionSection'

export default function PaymentLandingPage() {
  return (
    <div className="">
        <SectionOne />
        <SectionTwo />
        <div className=" lg:w-[90%] mx-auto p-6"><CallToActionSection background={` bg-[#41644A]`} /></div>
    </div>
  )
}
