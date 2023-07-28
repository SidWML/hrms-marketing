import React from "react";
import SectionHeadings from "../generics/SectionHeadings";
import TitleTypography from "../generics/TitleTypography";

export default function SectionThree() {
  return (
    <div className=" w-full md:py-12 p-6 bg-[#f3f3f1] rounded-t-[50px]">
      <div className=" text-center space-y-4 lg:w-[80%] w-full mx-auto">
        <SectionHeadings text_color="text-[#643843] uppercase" title="Benefits and Advantages" description_color={"text-gray-600"} />
        <TitleTypography text_color={`#1e2330`} title="Unlock the full potential of your HR department. " />
      </div>
      <div className=" w-full lg:px-12 pt-24 grid lg:grid-cols-2 gap-6 ">
        <div className=" col-span-1 p-6  md:p-12 md:block flex flex-col items-center md:text-start text-center space-y-10 rounded-[30px] bg-white">
          <div className="p-2 bg-[#eac1ea] w-[max-content] rounded-full">
            <img src="./search.png" alt="" className=" w-[80px] h-[80px]" />
          </div>

          <SectionHeadings
            title={`Acquire Top Talent: Building a High-Performing Team for Success`}
            description_color={`text-justify`}
            description={`Achieve new heights of success by hiring top talent for your organization. Our innovative talent acquisition solution is designed to help you attract and identify the most skilled and motivated candidates in the industry. Leverage advanced sourcing technologies, AI-driven candidate screening, and comprehensive assessment tools to build a dynamic and high-performing workforce.`}
          />
        </div>
        <div className=" col-span-1 p-6  md:p-12 md:block flex flex-col items-center md:text-start text-center space-y-10 rounded-[30px] bg-white">
          <div className="p-2 bg-[#eac1ea] w-[max-content] rounded-full">
            <img src="./flash.png" alt="" className=" w-[80px] h-[80px]" />
          </div>

          <SectionHeadings
            title={`Ensuring Regulatory Compliance: A Commitment to Ethical Work Practices`}
            description_color={`text-justify`}
            description={`Maintaining compliance with ever-evolving regulations is crucial for any organization. Our comprehensive solution empowers businesses to stay compliant with industry standards, legal requirements, and ethical work practices.`}
          />
        </div>
        <div className=" col-span-1 p-6  md:p-12 md:block flex flex-col items-center md:text-start text-center space-y-10 rounded-[30px] bg-white">
          <div className="p-2 bg-[#eac1ea] w-[max-content] rounded-full">
            <img src="./user.png" alt="" className=" w-[80px] h-[80px]" />
          </div>

          <SectionHeadings
            title={`Empowering Employee Growth: Unlocking Potential for Organizational Success`}
            description_color={`text-justify`}
            description={`Investing in employee improvement is key to achieving organizational excellence. Our comprehensive solution is designed to empower employee growth, fostering a culture of continuous learning and development.`}
          />
        </div>
        <div className=" col-span-1 p-6  md:p-12 md:block flex flex-col items-center md:text-start text-center space-y-10 rounded-[30px] bg-white">
          <div className="p-2 bg-[#eac1ea] w-[max-content] rounded-full">
            <img src="./clock.png" alt="" className=" w-[80px] h-[80px]" />
          </div>

          <SectionHeadings
            title={`Boosting Workplace Productivity: Strategies for Enhanced Efficiency and Success`}
            description_color={`text-justify`}
            description={`Enhancing productivity is a top priority for any organization. Our solution offers a comprehensive set of strategies and tools to boost workplace productivity and optimize performance.`}
          />
        </div>
      </div>
    </div>
  );
}
