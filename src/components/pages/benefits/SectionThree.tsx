import SectionHeadings from "@/components/generics/SectionHeadings";
import TitleTypography from "@/components/generics/TitleTypography";
import React from "react";

export default function SectionThree() {
  return (
    <div className=" w-full md:py-12 p-6 bg-[#f3f3f1] rounded-t-[50px]">
      <div className="  space-y-4 lg:w-[80%] w-full mx-auto text-center">
        <SectionHeadings text_color="text-[#643843] uppercase" title="Seamless Integrations " description_color={"text-gray-600"} />
        <TitleTypography text_color={`#1e2330`} title=" Empowering Your HRM Experience " />
      </div>
      <div className=" w-full lg:px-12 pt-24 grid lg:grid-cols-2 gap-6 ">
        <div className=" col-span-1 p-6  md:p-12 items-start flex flex-col  md:text-start  space-y-6 rounded-[30px] bg-white">
          <div className="   rounded-full">
            <img src="EPF.png" alt="" className=" w-[80px] h-[80px]" />
          </div>
          <SectionHeadings title={`Employee Provident Fund (EPF) Integration: Automated Retirement Savings`} />

          <ul className=" space-y-4 list-outside pl-4 list-disc">
            <li className="">Seamlessly manage EPF contributions, withdrawals, and account details within your HRM system.</li>
            <li className="">Ensure compliance with EPF regulations and provide employees with a secure retirement plan.</li>
          </ul>
        </div>
        <div className=" col-span-1 p-6  md:p-12 items-start flex flex-col  md:text-start  space-y-6 rounded-[30px] bg-white">
          <div className="  rounded-full">
            <img src="ESI.jpg" alt="" className=" " />
          </div>

          <SectionHeadings title={`Employee State Insurance (ESI) Integration: Hassle-free Health Coverage`} />

          <ul className=" space-y-4 list-outside pl-4 list-disc">
            <li className="">Simplify ESI administration, ensuring employee health insurance coverage is efficiently managed.</li>
            <li className="">Automate ESI contributions and claim processing, reducing paperwork and delays.</li>
          </ul>
        </div>
        <div className=" col-span-1 p-6  md:p-12 flex flex-col items-start  md:text-start  space-y-6 rounded-[30px] bg-white">
          <div className="  rounded-full overflow-hidden">
            <img src="google-calendar.png" alt="" className=" w-[80px] h-[80px]" />
          </div>

          <SectionHeadings title={`Google Calendar Integration: Enhanced Scheduling and Collaboration`} />

          <ul className=" space-y-4 list-outside pl-4 list-disc">
            <li className="">Sync HR and employee calendars with Google Calendar for improved time-off management.</li>
            <li className="">Foster better communication and collaboration among teams with synchronized schedules.</li>
          </ul>
        </div>
        <div className=" col-span-1 p-6  md:p-12 items-start flex flex-col  md:text-start  space-y-6 rounded-[30px] bg-white">
          <div className="   rounded-full overflow-hidden">
            <img src="quickbook.png" alt="" className=" w-[80px] h-[80px]" />
          </div>

          <SectionHeadings title={`QuickBooks Integration: Streamlined Financial Management`} />

          <ul className=" space-y-4 list-outside pl-4 list-disc">
            <li className="">Effortlessly sync HR data with QuickBooks for seamless payroll processing and financial reporting.</li>
            <li className="">Accurately manage employee compensation, tax deductions, and benefits contributions.</li>
          </ul>
        </div>
        <div className=" col-span-1 p-6  md:p-12 items-start flex flex-col  md:text-start  space-y-6 rounded-[30px] bg-white">
          <div className="   rounded-full overflow-hidden">
            <img src="slack.jpg" alt="" className=" w-[80px] h-[80px]" />
          </div>

          <SectionHeadings title={`QuickBooks Integration: Streamlined Financial Management`} />

          <ul className=" space-y-4 list-outside pl-4 list-disc">
            <li className="">Effortlessly sync HR data with QuickBooks for seamless payroll processing and financial reporting.</li>
            <li className="">Accurately manage employee compensation, tax deductions, and benefits contributions.</li>
          </ul>
        </div>
        <div className=" col-span-1 p-6  md:p-12 items-start flex flex-col  md:text-start  space-y-6 rounded-[30px] bg-white">
          <div className="   flex min-h-[80px] items-center    ">
            <img src="wise.svg" alt="" className=" h-[60%] " />
          </div>

          <SectionHeadings title={`Wise Integration: Global Money Transfers Made Easy`} />

          <ul className=" space-y-4 list-outside pl-4 list-disc">
            <li className="">Facilitate cross-border payments and simplify international money transfers for globally distributed teams.</li>
            <li className="">Securely manage foreign currency transactions with Wise's trusted and competitive exchange rates.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
