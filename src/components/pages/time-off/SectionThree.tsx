import Paragraph from '@/components/generics/Paragraph'
import SectionHeadings from '@/components/generics/SectionHeadings'
import TitleTypography from '@/components/generics/TitleTypography'
import React from 'react'

export default function SectionThree() {
  return (
    <div className=" w-full md:p-12 p-6">
      <div className=" text-center space-y-4 lg:w-[80%] w-full mx-auto">
        <SectionHeadings text_color="text-sky-500 uppercase" title="Time-Off Management Hub" description_color={"text-gray-600"} />
        <TitleTypography title="Effortlessly manage time-off requests with tailored policies and flexible approval flows. " />
      </div>

      <div className=" w-full lg:px-12 py-24 flex flex-col lg:space-y-[120px] space-y-[60px] ">
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" w-full bg-[#EAFDFC] rounded-xl p-6 overflow-hidden ">
            <img src="/Group 45.svg" alt="" className="lg:max-w-[80%] w-full mx-auto h-full drop-shadow-2xl  " />
          </div>
          <div className=" lg:p-12 py-6  space-y-4">
            <SectionHeadings title="Time-Off Coordination Hub" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                Effortless Time-Off Planning: Simplify the process of managing employee absences, vacation requests, and leaves with our user-friendly Time-Off Coordination Hub.
                </li>
                <li className="">
                Centralized Calendar: Access a centralized calendar that consolidates all time-off requests and schedules in one place. Stay organized and informed about team members' availability.
                </li>
                <li className="">
                Seamless Team Communication: Sync the Time-Off Coordination Hub with your team's tools, ensuring smooth communication and collaboration. Keep everyone updated on planned time-off to avoid conflicts.
                </li>
                <li className="">
                Enhanced Employee Experience: Promote a well-balanced work-life for your team by efficiently managing time-off requests, allowing employees to enjoy their time away from work stress-free.
                </li>
                <li className="">
                Optimized Workforce Management: With an organized time-off system, you can better plan and allocate resources, ensuring that projects and tasks are covered adequately during absences.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
            <SectionHeadings title="Efficient Time-Off Approval System" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                Customizable Approval Flows: Tailor the time-off approval process to your organization's needs. Choose between manager approvals or auto-approvals for specific time-off policies.
                </li>
                <li className="">
                Streamlined Time-Off Requests: Our system ensures smooth and hassle-free time-off requests, eliminating paperwork and simplifying the approval process.
                </li>
                <li className="">
                Align with Company Policies: Easily enforce company policies by setting up tailored approval flows that adhere to your organization's guidelines and regulations.
                </li>
                <li className="">
                Empower Managers and HR: Provide managers and HR personnel with the tools to efficiently review and respond to time-off requests in a timely manner.
                </li>
                <li className="">
                Transparency and Visibility: Increase transparency for both employees and managers with clear visibility into the status of time-off requests.
                </li>
              </ul>
            </div>
          </div>
          <div className="   lg:order-2 order-1 w-full  space-y-4 lg:p-12 rounded-xl p-6 overflow-hidden bg-[#F8EDE3]  ">
            <img src="/approval.svg" alt="" className=" lg:max-w-[100%] m-auto h-full drop-shadow-2xl  " />
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" lg:p-12 p-6 bg-[#9376E0] bg-opacity-25 rounded-xl overflow-hidden  ">
            <img src="/time-off-payroll.svg" alt="" className=" w-full h-full drop-shadow-2xl object-scale-down  " />
          </div>
          <div className=" lg:p-12 py-6 space-y-4">
            <SectionHeadings title="Seamless Payroll Integration for Hassle-Free Absence Management" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                Automated Payroll Integration: Our system seamlessly integrates with HRM payroll, streamlining the process of managing absence information effortlessly.
                </li>
                <li className="">
                Eliminate Manual Entries: Say goodbye to manual data entry for unpaid leave and statutory pay. The integration ensures accurate and automatic updates, saving time and reducing errors.
                </li>
                <li className="">
                Real-Time Updates: Absence data is synchronized in real-time, providing up-to-date and accurate information for your payroll processing.
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
            <SectionHeadings title="Automated Payslip Storage: Easy Access for Employees" />
            <div className=" space-y-4">
              <SectionHeadings title="Key Featutes" />
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                  Effortless Record-Keeping: Payslips are automatically stored in the employee portal, eliminating the need for manual filing and
                  paperwork.
                </li>
                <li className="">
                  Convenient Access: Employees can access their payslips conveniently at any time, from anywhere with an internet connection.
                </li>
                <li className="">
                  Deduction Transparency: Easily identify and comprehend various deductions, such as taxes, insurance, and retirement contributions.
                </li>
                <li className="">
                  Secure and Confidential: The employee portal ensures the security and confidentiality of payslips, safeguarding sensitive
                  information.
                </li>
                <li className="">
                  Reduced Administrative Burden: HR teams are relieved from manually distributing payslips, allowing them to focus on more strategic
                  tasks.
                </li>
                <li className="">
                  Past Payslip Retrieval: Employees can easily retrieve and review previous payslips for reference or documentation purposes.
                </li>
                <li className="">
                  Environmental Sustainability: Automated storage reduces paper waste, promoting a more eco-friendly and sustainable approach.
                </li>
                <li className="">
                  User-Friendly Interface: The employee portal provides a user-friendly interface for seamless payslip access and navigation.
                </li>
              </ul>
            </div>
          </div>
          <div className="  space-y-4 lg:order-2 order-1 bg-opacity-50 lg:p-12 p-6 bg-[#D0F5BE] rounded-xl overflow-hidden  ">
            <img src="/notifications.svg" alt="" className=" w-full h-full object-scale-down drop-shadow-2xl  " />
          </div>
        </div>
      </div>
    </div>
  )
}
