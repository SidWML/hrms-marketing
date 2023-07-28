import Paragraph from "@/components/generics/Paragraph";
import SectionHeadings from "@/components/generics/SectionHeadings";
import TitleTypography from "@/components/generics/TitleTypography";
import React from "react";

export default function SectionThree() {
  return (
    <div className=" w-full md:p-12 p-6 bg-[#f2f2f2]">
      <div className=" w-full lg:px-12  flex flex-col  space-y-[60px] ">
        <div className=" grid lg:grid-cols-2 gap-6">
          <div className=" lg:p-6  space-y-4">
            <TitleTypography text_color={` lg:text-start text-center`} title={`HRM`} />
            <Paragraph
              text_color="text-justify"
              description={`At HRM, we understand the frustrations that HR and finance teams face when dealing with complex and time-consuming administrative tasks. That's why we set out to create a powerful HRM (Human Resource Management) solution that simplifies people data management and streamlines essential HR processes`}
            />
            <Paragraph
              text_color="text-justify"
              description={`Our inspiration came from experiencing the pain of incorrect payments, delayed pension contributions, and the constant struggle of keeping salary information synchronized across various tools. We knew there had to be a better way.`}
            />
            <Paragraph
              text_color="text-justify"
              description={`With our HRM product, we aim to provide companies with a reliable source of truth for people data, eliminating the hassle of manual data entry and mundane administrative work.`}
            />
            <Paragraph
              text_color="text-justify"
              text_color={` `}
              description={`Join us as we revolutionize HR management and create a product that simplifies processes, empowers teams, and brings value to your organization. Together, let's embrace a future of efficient HR operations and a workplace where both businesses and employees can thrive.`}
            />
          </div>
          <div className="   w-full   overflow-hidden  flex  items-center  ">
            <img src="/team-4.jpg" alt="" className="  object-cover rounded-xl w-full  " />
          </div>
        </div>
      </div>
      <div className=" w-full p-12 px-6 text-center flex flex-col space-y-12">
        <SectionHeadings text_color={`text-[#071952]`} title=" Our Investors" />
        <div className=" flex items-center gap-4 justify-center">
            <div className=" lg:max-w-[8%] md:w-[20%] w-full ">
                <img src="https://wmlit.com/Logo.png" alt="" className="" />
            </div>
            <div className=" lg:max-w-[10%] md:w-[30%] bg-black p-3 ">
                <img src="http://www.fervidsmart.com/assets/img/logo/Fervid_Logo_svg.svg" alt="" className="" />
            </div>
            <div className=" lg:max-w-[10%] md:w-[30%] ">
                <img src="/logo.png" alt="" className="" />
            </div>
        </div>
    </div>
    </div>
  );
}
