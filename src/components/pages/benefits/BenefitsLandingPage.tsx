import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import CallToActionSection from "@/components/generics/CallToActionSection";
import Marquee from "@/components/generics/Marquee";

export default function BenefitsLandingPage() {
  return (
    <div className="">
      <SectionOne />
      <Marquee />
      <SectionTwo />
      <SectionThree />
      <div className=" lg:w-[90%]  p-6 mx-auto">
        <CallToActionSection background={`bg-[#2E4F4F]`} />
      </div>
    </div>
  );
}
