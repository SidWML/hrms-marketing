import Paragraph from '@/components/generics/Paragraph'
import SectionHeadings from '@/components/generics/SectionHeadings'
import TitleTypography from '@/components/generics/TitleTypography'
import React from 'react'

export default function SectionTwo() {
  return (
    <div className=" w-full md:p-12 p-6">
      <div className=" text-center space-y-4 lg:w-[80%] w-full mx-auto">
        <SectionHeadings text_color="text-sky-500" title="PAYMENTS" description_color={"text-gray-600"} />
        <TitleTypography title="Take the stress out of HR management with HRM's automated updates. Here's how it works" />
      </div>

      <div className=" w-full lg:px-12 py-24 flex flex-col lg:space-y-[120px] space-y-[60px] ">
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" w-full bg-[#F2D8D8] bg-opacity-80 rounded-xl p-6 overflow-hidden ">
            <img src="/payments.svg" alt="" className="lg:max-w-[80%] w-full mx-auto h-full drop-shadow-2xl  " />
          </div>
          <div className=" lg:p-12 py-6  space-y-4">
            <SectionHeadings title="Automated Salary Payments Made Easy" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                Time-Saving Efficiency: Automate the payroll process and eliminate manual intervention, saving valuable time for HR and finance teams.
                </li>
                <li className="">
                Timely Payments: Ensure employees receive their salaries on time, boosting morale and enhancing employee satisfaction.
                </li>
                <li className="">
                Error Reduction: Minimize the risk of payroll errors with automated calculations, leading to accurate and consistent salary payments.
                </li>
                <li className="">
                Seamless Integration: Our system seamlessly integrates with your existing HR and finance software, streamlining payroll management.
                </li>
                <li className="">
                Compliance Assurance: Stay compliant with labor regulations and tax requirements, as our automated system helps maintain accurate records.
                </li>
                <li className="">
                Enhanced Security: Protect sensitive payroll data with robust security measures and permissions for authorized access.
                </li>
                <li className="">
                Customizable Settings: Tailor the automated salary payment system to fit your company's unique payroll policies and requirements.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
            <SectionHeadings title="User-Friendly Payments with HRM" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                Simple and Intuitive: HRM offers a user-friendly payment system that is easy to navigate and understand, ensuring a seamless experience for both admins and employees.
                </li>
                <li className="">
                Efficient Contractor Payments: Approving contractor invoices is a breeze with HRM, streamlining the process and reducing administrative burden.
                </li>
                <li className="">
                Hassle-Free Expense Claims: Employees can effortlessly claim back expenses through our intuitive interface, making reimbursement a straightforward task.
                </li>
                <li className="">
                Minimized Human Error: By reducing touchpoints between payroll and payouts, HRM minimizes the chances of human error, ensuring accurate and reliable payments.
                </li>
                <li className="">
                Enhanced Payroll Integration: HRM's payment system integrates smoothly with payroll, making salary payments and other transactions a quick and error-free process.
                </li>
              </ul>
            </div>
          </div>
          <div className="   lg:order-2 order-1 w-full  space-y-4 lg:p-12 rounded-xl p-6 overflow-hidden bg-[#F8EDE3]  ">
            <img src="/pay.png" alt="" className=" lg:max-w-[100%] m-auto h-full drop-shadow-2xl  " />
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" lg:p-12 p-6 bg-[#E57C23] bg-opacity-30 rounded-xl overflow-hidden  ">
            <img src="/bulk.svg" alt="" className=" w-full h-full drop-shadow-2xl object-scale-down  " />
          </div>
          <div className=" lg:p-12 py-6 space-y-4">
            <SectionHeadings title="Effortless Bulk Payments for Efficient Transactions" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                Streamlined Bulk Transfers: Instantly send transfers to multiple recipients in just one click, simplifying large-scale payment processes.
                </li>
                <li className="">
                No Manual Data Entry: Eliminate manual data entry, minimizing errors and ensuring accurate and efficient payments.
                </li>
                <li className="">
                Time-Saving Solution: Save valuable time by automating bulk payments, allowing you to focus on more strategic and high-value tasks.
                </li>
                <li className="">Seamless Recipient Management: Manage and organize recipient details effortlessly within the system for smooth and repeat transactions.</li>
                <li className="">Real-Time Deliveries: Benefit from instant delivery of payments to recipients, ensuring prompt and reliable transactions.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3">
          <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
            <SectionHeadings title="Flexibility with Real-Time or Scheduled Payments" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                Real-Time Processing: Process payroll instantly when you have the time and need immediate payment execution.
                </li>
                <li className="">
                Advanced Scheduling: Plan ahead by processing payroll in advance and schedule payments to go out at specific times as needed.
                </li>
                <li className="">
                  Deduction Transparency: Easily identify and comprehend various deductions, such as taxes, insurance, and retirement contributions.
                </li>
                <li className="">
                Time Management: Choose between real-time or scheduled payments based on your time availability and business requirements.
                </li>
                <li className="">
                Efficient Payroll Management: Enjoy the convenience of both options, optimizing your payroll processes for maximum efficiency.
                </li>
                <li className="">
                Smooth Cash Flow: With the ability to schedule payments, ensure a smooth cash flow and avoid delays in employee compensation.
                </li>
              </ul>
            </div>
          </div>
          <div className="  space-y-4 lg:order-2 order-1 lg:p-12 p-6 bg-[#C4DFDF] bg-opacity-50 rounded-xl overflow-hidden  ">
            <img src="/schedule.png" alt="" className=" w-full h-full object-scale-down drop-shadow-2xl  " />
          </div>
        </div>
      </div>
    </div>
  )
}
