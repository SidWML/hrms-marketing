import React, { useEffect, useRef } from "react";
import SectionHeadings from "../generics/SectionHeadings";
import TitleTypography from "../generics/TitleTypography";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function SectionFive() {

  let card1 = useRef(null);
  let card2 = useRef(null);
  let card3 = useRef(null);

  useEffect(() => {
    
    const t2 = gsap.timeline({
      scrollTrigger:{
        trigger:".h-cardsection",
        start:"-300px"
      }
    });
    t2.fromTo(card1, { y:"100px", opacity:0 }, { y:"0px", opacity:1 })
    t2.fromTo(card2, { y:"100px", opacity:0 }, { y:"0px", opacity:1 }, "<50%")
    t2.fromTo(card3, { y:"100px", opacity:0 }, { y:"0px", opacity:1 }, "<50%")
  }, []);

  return (
    <div className=" w-full md:p-12 p-6  rounded-t-[50px] h-cardsection">
      <div className=" text-center space-y-4 lg:w-[80%] w-full mx-auto">
        <SectionHeadings text_color="text-[#643843] uppercase" title="Why Choose HRM ? " description_color={"text-gray-600"} />
        <TitleTypography text_color={`#1e2330`} title="Empowering Efficiency and Growth" />
      </div>
      <div className=" lg:px-12 pt-24  w-full ">
      <div className=" w-full grid lg:grid-cols-3 rounded-[20px] overflow-hidden  ">
        <div ref={(el) => (card1 = el)} className=" col-span-1 px-6 py-12 flex flex-col items-center text-center space-y-10   bg-[#F5F5F5]">
          <div className=" w-[max-content] rounded-full">
            <img src="database.svg" alt="" className="max-h-[100px] " />
          </div>

          <SectionHeadings
            title={`Streamline Employee Data`}
            description_color={`text-justify`}
            description={`Simplify HR tasks, eliminate duplicates, and fuel growth with HRM Hub, your all-in-one platform for efficient employee data management.`}
          />
        </div>
        <div ref={(el) => (card2 = el)}  className=" col-span-1 px-6 py-12 lg:border-x lg:border-y-0 border-y flex flex-col items-center text-center space-y-10  bg-[#F5F5F5]">
          <div className=" w-[max-content] rounded-full">
            <img src="customer.svg" alt="" className="max-h-[100px] " />
          </div>

          <SectionHeadings
            title={`Your Trusted Customer Support Partner`}
            description_color={`text-justify`}
            description={`Experience the best customer support with HRM, where our team of payroll and HR experts ensures fast and accurate responses to all your inquiries. Count on us to be there for you whenever you need assistance.`}
          />
        </div>
        <div ref={(el) => (card3 = el)} className=" col-span-1 px-6 py-12  flex flex-col items-center text-center space-y-10  bg-[#F5F5F5]">
          <div className=" w-[max-content] rounded-full">
            <img src="time.svg" alt="" className="max-h-[100px] " />
          </div>

          <SectionHeadings
            title={`Time-Saving Payroll and HR Solutions`}
            description_color={`text-justify`}
            description={`HRM offers unbeatable time-saving benefits with just 1 minute to run payroll, 3 minutes to set up new starters, and automated tax code notices. Discover all this and more for a streamlined and efficient HR experience.`}
          />
        </div>
        </div>
      </div>

    </div>
  );
}
