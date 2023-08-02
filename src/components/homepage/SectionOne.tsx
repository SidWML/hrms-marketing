import React, { useEffect } from "react";
import TitleTypography from "../generics/TitleTypography";
import Paragraph from "../generics/Paragraph";
import Button from "../generics/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SectionOne() {
  useEffect(() => {
    const titleHeading = document.querySelector(".h-s1-heading");

    const titleWords = titleHeading?.textContent?.split(" ");

    const wrapperdWords = titleWords?.map((word) => `<span style="display: inline-block; opacity: 0;">${word}</span>`);

    titleHeading.innerHTML = wrapperdWords.join(" ");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleHeading,
        start: "300px",
        scrub: 0.3,
      },
    });
    tl.fromTo(".title-heading span", { y: "50px", opacity: 0 }, { y: "0px", opacity: 1, stagger: { amount: 0.5 } });
  }, []);
  return (
    <div className="">
      <div className=" w-full min-h-screen overflow-hidden relative rounded-b-[50px] flex flex-col items-center lg:p-12 py-12 justify-center bg-[#1c4396]">
        <div className=" lg:p-[70px] text-center w-full flex flex-col gap-4 items-center ">
          <div className=" space-y-4 col-span-1 lg:p-12 p-6 lg:w-[80%] w-full">
            <TitleTypography text_color="text-[white] h-s1-heading   " title="Transform Your HR Process With Our Cutting-Edge HR Application" />
            <Paragraph
              text_center
              text_color="text-[white] lg:w-[70%] md:w-[90%] mx-auto "
              description="Introduce you our powerful HRM solution that simplifies HR processes, increases efficiency, and empowers organizations. Experience seamless HR management with our innovative platform"
            />
            <div className=" flex items-center gap-4 justify-center">
              <Button bg_color={`border-[white] border`} text_color={`text-white`} href="/register" label={`Book a demo `} />
              <Button bg_color={`bg-[#cde026]`} text_color={`text-white`} href="/register" label={`Get Started`} />
            </div>
          </div>
          <div className=" z-[2] lg:w-[95%] lg:p-16 p-6 lg:rounded-[50px] rounded-xl border-2 backdrop-blur-3xl  bg-slate-200 bg-opacity-50 w-[80%] mx-auto h-full relative ">
            <img src=".//h2.svg" alt="" className=" w-full h-full  m-auto drop-shadow-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
}
