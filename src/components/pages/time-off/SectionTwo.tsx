import SectionHeadings from '@/components/generics/SectionHeadings'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'

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
          <img src="thumb.svg" alt="" className="max-h-[100px] " />
        </div>

        <SectionHeadings
          title={`Time-Off Approval Flows:`}
          description_color={`text-justify`}
          description={`Efficiently manage time-off requests with customizable approval flows. Choose between manager approvals or auto-approvals for specific policies, ensuring seamless time-off management aligned with your organization's needs.`}
        />
      </div>
      <div ref={(el) => card2 = el} className=" col-span-1 px-6 py-12 lg:border-x lg:border-y-0 border-y flex flex-col items-center text-center space-y-10  bg-[#F5F5F5]">
        <div className=" w-[max-content] rounded-full">
          <img src="puzzle.svg" alt="" className="max-h-[100px] " />
        </div>

        <SectionHeadings
          title={`Customizable Time-Off Policies:`}
          description_color={`text-justify`}
          description={`Tailor time-off policies to match your organization's requirements. Define carry-over days, set rules, and create policies that reflect your company culture while complying with labor regulations.`}
        />
      </div>
      <div ref={(el) => card3 = el} className=" col-span-1 px-6 py-12  flex flex-col items-center text-center space-y-10  bg-[#F5F5F5]">
        <div className=" w-[max-content] flex items-center gap-2 rounded-full">
        <img src="google-calendar.png" alt="" className="max-h-[50px] " />
        <FontAwesomeIcon className=' font-bold text-2xl' icon={faArrowRight} />
          <img src="integrate.svg" alt="" className="max-h-[100px] " />
          <FontAwesomeIcon className=' font-bold text-2xl' icon={faArrowRight} />
          <img src="slack.jpg" alt="" className="max-h-[50px] " />
        </div>

        <SectionHeadings
          title={`Syncs with Your Tools: `}
          description_color={`text-justify`}
          description={`Keep your team in sync with integrations for popular tools like Slack and Google Calendar. Our platform ensures accurate and real-time updates, streamlining communication and collaboration for a productive work environment.`}
        />
      </div>
      </div>
    </div>

  </div>
  )
}
