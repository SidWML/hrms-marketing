import SectionHeadings from '@/components/generics/SectionHeadings'
import TitleTypography from '@/components/generics/TitleTypography'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
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
        const g_1 = gsap.timeline({
            scrollTrigger:{
              trigger:".h-g-1",
              start:" 500px",
              end:"100%",
            },defaults:{ duration:1}
          })
          g_1.fromTo(".h-g-1", { x:"200px", y:"200px", opacity:0 }, { x:"0px", y:"0px", opacity:1,  })
          const g_2 = gsap.timeline({
            scrollTrigger:{
              trigger:".h-g-2",
              start:" 500px",
              end:"100%",
            },defaults:{ duration:1}
          })
          g_2.fromTo(".h-g-2", { x:"-200px", y:"200px", opacity:0 }, { x:"0px", y:"0px", opacity:1,  })
          const g_3 = gsap.timeline({
            scrollTrigger:{
              trigger:".h-g-3",
              start:" 500px",
              end:"100%",
            },defaults:{ duration:1}
          })
          g_3.fromTo(".h-g-3", {  y:"200px", opacity:0 }, { x:"0px", y:"0px", opacity:1,  })
          const g_4 = gsap.timeline({
            scrollTrigger:{
              trigger:".h-g-4",
              start:" 500px",
              end:"100%",
            },defaults:{ duration:1}
          })
          g_4.fromTo(".h-g-4", { x:"-200px", y:"200px", opacity:0 }, { x:"0px", y:"0px", opacity:1,  })
          const g_5 = gsap.timeline({
            scrollTrigger:{
              trigger:".h-g-5",
              start:" 500px",
              end:"100%",
            },defaults:{ duration:1}
          })
          g_5.fromTo(".h-g-5", { x:"200px", y:"200px", opacity:0 }, { x:"0px", y:"0px", opacity:1,  })
        
      }, [])
      return (
        <div className=" w-full md:p-12 p-6">
          <div className=" text-center space-y-4 lg:w-[80%] w-full mx-auto ">
            <SectionHeadings text_color="text-sky-500" title="EMPLOYEE PORTAL" description_color={"text-gray-600"} />
            <TitleTypography text_color={`h-s2-title`} title="Take the stress out of HR management with HRM's automated updates. Here's how it works" />
          </div>
    
          <div className=" w-full lg:px-12 py-24 flex flex-col lg:space-y-[120px] space-y-[60px] ">
            <div className=" grid lg:grid-cols-2 gap-3 h-g-1">
              <div className=" w-full bg-[#F2D8D8] bg-opacity-80 flex items-center justify-centerX rounded-xl p-6 overflow-hidden ">
                <img src="./bg-1.png" alt="" className="lg:max-w-[100%] w-full mx-auto max-h-full drop-shadow-2xl  " />
              </div>
              <div className=" lg:p-12 py-6  space-y-4">
                <SectionHeadings title="Effortless Time & Attendance Tracking with HRM" />
                <div className=" space-y-4">
                  <ul className=" space-y-4 list-outside pl-4 list-disc">
                    <li className="">
                    User-Friendly Time Tracking: Our HRM platform provides an intuitive and user-friendly interface for employees to report their Time & Attendance. Easily record work hours, breaks, and overtime with just a few clicks.
                    </li>
                    <li className="">
                    Automated Time Clock: Say goodbye to manual clock-ins. Our HRM offers an automated time clock that accurately tracks employee hours, reducing errors and administrative burden.
                    </li>
                    <li className="">
                    Compliance with Labor Regulations: Ensure your business stays compliant with labor laws and regulations. Our HRM is designed to adapt to the Time & Attendance requirements of various countries and regions.
                    </li>
                    <li className="">
                    Leave Management: Simplify leave requests and approvals within the HRM platform. Employees can conveniently submit leave requests, and managers can efficiently approve or decline them.
                    </li>
                    <li className="">
                    Real-Time Attendance Data: Gain real-time visibility into employee attendance data. Monitor attendance trends, track absenteeism, and manage workforce attendance effectively.
                    </li>
                    <li className="">
                    Accurate Time Off Balances: Our HRM automatically calculates and updates time off balances for each employee, ensuring accurate and up-to-date records.
                    </li>
                    <li className="">
                    Data Security and Privacy: We prioritize the security and privacy of your HR data. Our HRM platform employs robust measures to safeguard sensitive attendance information.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" grid lg:grid-cols-2 gap-3 h-g-2">
              <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
                <SectionHeadings title="Payslips Made Simple: Secure Access to Worker Payslips in One Place" />
                <div className=" space-y-4">
                  <ul className=" space-y-4 list-outside pl-4 list-disc">
                    <li className="">
                    Secure Document Repository: Our platform ensures the utmost security for worker payslips and year-end statements. Rest assured that your sensitive information is protected.
                    </li>
                    <li className="">
                    Effortless Logins: With a user-friendly login process, accessing worker payslips is a breeze. Save time and access the documents you need quickly.
                    </li>
                    <li className="">
                    Centralized Access: No more searching through piles of paperwork. Find all your worker payslips conveniently stored in one place.
                    </li>
                    <li className="">
                    Download On-Demand: Simply log in and securely download the payslips you require whenever needed, from any location.
                    </li>
                    <li className="">
                    Year-End Statements Included: Access not only payslips but also year-end statements with ease, all available in the same secure repository.
                    </li>
                    <li className="">
                    Customizable Access Permissions: Customize access permissions to ensure only authorized personnel can view and download worker payslips, enhancing data security.
                    </li>
                    <li className="">
                    User-Friendly Interface: Our platform features an intuitive interface, making it easy for both workers and authorized personnel to navigate and find the required documents.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="   lg:order-2 order-1 w-full  space-y-4 lg:p-12 rounded-xl p-6 overflow-hidden bg-[#F8EDE3]  ">
                <img src="./pr-2.svg" alt="" className=" lg:max-w-[100%] m-auto h-full drop-shadow-2xl  " />
              </div>
            </div>
            <div className=" grid lg:grid-cols-2 gap-3 h-g-3">
              <div className=" lg:p-12 p-6 bg-[#e1daff] bg-opacity-30 rounded-xl overflow-hidden  ">
                <img src="./documents.svg" alt="" className=" w-full h-full drop-shadow-2xl object-scale-down  " />
              </div>
              <div className=" lg:p-12 py-6 space-y-4">
                <SectionHeadings title="Streamlined Employee App: Eliminate Document Requests and Save Time for HR & Finance Teams" />
                <div className=" space-y-4">
                  <ul className=" space-y-4 list-outside pl-4 list-disc">
                    <li className="">
                    Centralized Self-Service System: Our employee app offers a centralized platform where employees can access and manage their information effortlessly. From payslips to expense reports, everything is readily available at their fingertips.
                    </li>
                    <li className="">
                    Instant Document Access: No more waiting for HR & Finance teams to manually retrieve documents. Employees can access their payslips, tax statements, and more instantly within the app.
                    </li>
                    <li className="">
                    Effortless Document Sharing: HR & Finance teams can securely share important documents like contracts and policies with employees through the app, eliminating the need for manual distribution.
                    </li>
                    <li className="">Real-Time Updates: All documents are up-to-date and instantly available within the app, ensuring that employees have access to the latest information without delay.</li>
                    <li className="">Secure Data Protection: Our app prioritizes data security, ensuring that sensitive documents are protected with robust measures to safeguard confidentiality.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}
