import SectionHeadings from '@/components/generics/SectionHeadings'
import TitleTypography from '@/components/generics/TitleTypography'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function SectionTwo() {
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
      <div className=" lg:px-12 w-full ">
      <div className=" w-full grid lg:grid-cols-3 rounded-[20px] overflow-hidden  ">
        <div ref={(el) => card1 = el} className=" col-span-1 px-6 py-12 flex flex-col items-center text-center space-y-10   bg-[#F5F5F5]">
          <div className=" w-[max-content] rounded-full">
            <img src="/updates.png" alt="" className="max-h-[100px] " />
          </div>

          <SectionHeadings
            title={`Real-Time Payroll Management Updates`}
            description_color={`text-justify`}
            description={`Say goodbye to delays! With HRM's seamless payroll management, see salary changes reflected instantly on the payroll screen. No waiting for slow tools or third parties, just real-time updates that keep your payroll accurate and efficient`}
          />
        </div>
        <div ref={(el) => card2 = el} className=" col-span-1 px-6 py-12 lg:border-x lg:border-y-0 border-y flex flex-col items-center text-center space-y-10  bg-[#F5F5F5]">
          <div className=" w-[max-content] rounded-full">
            <img src="/cut-off.png" alt="" className="max-h-[100px] " />
          </div>

          <SectionHeadings
            title={`Flexible Payroll: No Cut-Off Dates`}
            description_color={`text-justify`}
            description={`Take control of your payroll timeline! HRM empowers you to make changes up to payday with no cut-off dates. Your team won't have to wait for months for updates, ensuring a flexible and stress-free payroll process.`}
          />
        </div>
        <div ref={(el) => card3 = el} className=" col-span-1 px-6 py-12  flex flex-col items-center text-center space-y-10  bg-[#F5F5F5]">
          <div className=" w-[max-content] rounded-full">
            <img src="/codes.png" alt="" className="max-h-[100px] " />
          </div>

          <SectionHeadings
            title={`Effortless Automated Tax Codes `}
            description_color={`text-justify`}
            description={`Simplify compliance with HRM's automated tax codes. Our platform syncs with HMRC to receive and implement tax code updates automatically, eliminating the need for manual paperwork.`}
          />
        </div>
        </div>
      </div>

    </div>
  )
}
