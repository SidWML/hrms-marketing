import React, { useEffect } from 'react'
import Paragraph from '../generics/Paragraph'
import TitleTypography from '../generics/TitleTypography'
import SectionHeadings from '../generics/SectionHeadings'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function SectionTwo() {
    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger:{
            trigger:".h-s2-title",
            start:" 400px",
          }
        })
        tl.fromTo(".h-s2-title ", { y:"100px" , opacity:0 }, { y:"0px", opacity:1, stagger:{ amount:0.5 } })

        
      }, [])
  return (
    <div className=" w-full md:p-12 p-6">
        <div className=" text-center space-y-4 lg:w-[80%] h-s2-title w-full mx-auto">
            <SectionHeadings text_color="text-sky-500" title="KEY FEATURES" description_color={"text-gray-600"} />
            <TitleTypography text_color={` `}  title="Effortless HR Management: Experience the Magic of Our Innovative HR Application" />
        </div>

        <div className=" w-full lg:px-12 py-24 flex flex-col lg:space-y-[120px] space-y-[60px] ">
            <div className=" grid lg:grid-cols-2 gap-3 relative ">
                <div className="   w-full lg:p-12 rounded-xl overflow-hidden   p-6 bg-[#DEF5E5]">
                    <img src="/key-3.svg" alt="" className=" lg:max-w-[80%] mx-auto w-full h-full drop-shadow-2xl  " />
                </div>
                <div className=" lg:p-12 py-6  space-y-4 h-[max-content]  ">
                    <SectionHeadings title="Streamlined Employee Data Management: Elevate HR Efficiency with Our Advanced Solution"  />
                    <Paragraph text_color="text-justify" description={`Managing employee data is a critical aspect of HR operations, and our advanced solution makes it effortless and efficient. Say goodbye to tedious paperwork and data silos with our streamlined employee data management system.`} />
                    <Paragraph text_color="text-justify" description={`Our comprehensive platform centralizes all employee information, from basic details to performance evaluations, training records, and more. With just a few clicks, HR professionals can access, update, and analyze data in real-time, ensuring accurate and up-to-date records.`} />
                    <Paragraph text_color="text-justify" description={`Forget the days of manual data entry errors; our solution automates data collection, minimizing human intervention and reducing the risk of mistakes. This leads to improved data accuracy and compliance with data protection regulations.`} />
                    <Paragraph text_color="text-justify" text_color={` `} description={`With powerful reporting and analytics tools, gain valuable insights into your workforce. Identify trends, track employee performance, and make data-driven decisions to optimize your HR strategies.`} />
                </div>
            </div>
            <div className=" grid lg:grid-cols-2 gap-3">
            <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
                    <SectionHeadings title="Empower Your Workforce with Effortless Attendance and Leave Management"  />
                    <Paragraph text_color="text-justify" description={`Transform the way you manage attendance and leave with our user-friendly and efficient solution. With seamless attendance tracking and leave management capabilities, our application empowers your workforce and streamlines HR operations.`} />
                    <Paragraph text_color="text-justify" description={`Bid farewell to traditional methods and embrace modern attendance tracking technologies. Our solution offers various options, including biometric recognition, mobile check-ins, and online timesheets. Real-time attendance data is securely recorded, providing HR managers with valuable insights for better workforce management.`} />

                    <div className=" space-y-4">
                    <SectionHeadings title="Key Featutes"  />
                    <ul className=" space-y-4 list-outside pl-4 list-disc">
                        <li className="">Centralized Leave Requests: Streamline leave requests and approvals in a centralized location for better organization.</li>
                        <li className="">Custom Leave Policies: Implement tailored leave policies and accrual rules to suit your organization's unique requirements.</li>
                        <li className="">Automated Approval Workflows: Expedite the approval process with automated workflows, reducing manual intervention.</li>
                        <li className="">Leave Balances: Easily monitor and manage employees' available leave balances for accurate scheduling.</li>
                    </ul>
                    </div>
                </div>
                <div className="  lg:order-2 order-1 w-full m-auto flex flex-col items-center space-y-4 bg-[#FFE7CC] lg:p-12 p-6 rounded-xl overflow-hidden ">
                    <img src="/key-4.svg" alt="" className="  lg:max-w-[80%] h-full drop-shadow-2xl  " />
                    <img src="/Time Off.svg" alt="" className="  lg:max-w-[80%] h-full drop-shadow-2xl" />
                </div>
                
            </div>
            <div className=" grid lg:grid-cols-2 gap-3">
                <div className=" lg:p-12 p-6 rounded-xl overflow-hidden bg-[#FAEAB1] ">
                    <img src="/key-3.png" alt="" className=" w-full h-full drop-shadow-2xl object-scale-down  " />
                </div>
                <div className=" lg:p-12 py-6 space-y-4">
                    <SectionHeadings title="Effortless Talent Onboarding: Unlocking Your Workforce's Full Potential"  />
                    <Paragraph text_color="text-justify" description={`Unleash the power of your workforce with our effortless talent onboarding solution. Designed to simplify and optimize the integration process, our platform enables seamless onboarding for new hires. From personalized onboarding plans to digital document management, our comprehensive features ensure a smooth transition for employees, allowing them to quickly contribute and thrive within your organization. Embrace efficiency and productivity with our innovative talent onboarding solution, setting the foundation for long-term success.`} />
                </div>
            </div>
            <div className=" grid lg:grid-cols-2 gap-3">
            <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
                    <SectionHeadings title="Efficient Task Assignment and Management: Empowering Your Team's Productivity"  />
                    <Paragraph text_color="text-justify" description={`Simplify task assignment and elevate your team's productivity with our efficient task assignment and management solution. Our platform streamlines the process of allocating tasks, tracking progress, and ensuring timely completion. With user-friendly features like task prioritization, real-time updates, and collaboration tools, our solution empowers your team to work cohesively, stay organized, and meet deadlines. Experience a seamless task management experience that maximizes efficiency and fosters a more productive and successful work environment.`} />
                </div>
                <div className="  space-y-4 lg:order-2 order-1 lg:p-12 p-6 bg-[#DAE2B6] rounded-xl overflow-hidden ">
                    <img src="/task.png" alt="" className=" w-full h-full object-scale-down drop-shadow-2xl  " />
                
                </div>
                
            </div>
            <div className=" grid lg:grid-cols-2 gap-3">
                <div className=" lg:p-12 p-6 rounded-xl overflow-hidden bg-[#D6E4E5] ">
                    <img src="/key-5.svg" alt="" className=" w-full h-full drop-shadow-2xl object-scale-down  " />
                </div>
                <div className="lg:p-12 py-6 space-y-4 flex flex-col justify-center">
                    <SectionHeadings title="Seamless Salary Payments: Timely and Reliable Compensation for Your Workforce"  />
                    <Paragraph text_color="text-justify" description={`Our salary payment solution offers a hassle-free and secure way to disburse salaries to your employees. With our user-friendly platform, you can ensure timely and accurate payments, fostering employee satisfaction and loyalty.`} />
                </div>
            </div>
            

        </div>

    </div>
  )
}
