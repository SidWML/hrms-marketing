import Paragraph from '@/components/generics/Paragraph'
import SectionHeadings from '@/components/generics/SectionHeadings'
import TitleTypography from '@/components/generics/TitleTypography'
import React from 'react'

export default function SectionTwo() {
  return (
    <div className=" w-full md:p-12 p-6">
           <div className=" w-full lg:px-12 py-12 flex flex-col lg:space-y-[120px] space-y-[60px] ">
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" w-full bg-[#FFF4D2] bg-opacity-50 rounded-xl p-6 overflow-hidden ">
            <img src="/providers.svg" alt="" className="lg:max-w-[70%] w-full mx-auto h-full drop-shadow-2xl  " />
          </div>
          <div className=" lg:p-12 py-6  space-y-4">
            <SectionHeadings title="Automated Integration: Simplify Benefits Management" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc ">
                <li className="">
                  Effortlessly integrate with your benefits provider.
                </li>
                <li className="">
                Add new joiners seamlessly without manual data entries.
                </li>
                <li className="">
                Sync contributions automatically, ensuring real-time updates.
                </li>
                <li className="">
                Remove leavers from the system without the need for multiple logins.
                </li>
                <li className="">
                Streamline benefits management for HR teams and employees alike.
                </li>
                <li className="">
                Focus on strategic HR initiatives with our automated solution..
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
            <SectionHeadings title="Empowerment through Personalized Benefits: Boost Engagement" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                Choice and Control: Let your team members decide the best plan and contribution levels for themselves.
                </li>
                <li className="">
                Tailored Selections: A wide range of benefits options from health insurance to retirement plans.
                </li>
                <li className="">
                Increased Satisfaction: Employees feel valued when they have the freedom to choose, leading to higher satisfaction levels.
                </li>
                <li className="">
                Ownership and Motivation: By being part of the decision-making process, employees take ownership of their roles and are more motivated to excel.
                </li>
                <li className="">
                Happier Workforce: Personalized benefits lead to a happier, more engaged workforce.
                </li>
              </ul>
            </div>
          </div>
          <div className="   lg:order-2 order-1 w-full  space-y-4 lg:p-12 rounded-xl p-6 overflow-hidden bg-[#FF5F9E] bg-opacity-20 ">
            <img src="/benefits-2.svg" alt="" className=" w-[70%] h-full m-auto drop-shadow-2xl  " />
          </div>
        </div>
      </div>
    </div>
  )
}
