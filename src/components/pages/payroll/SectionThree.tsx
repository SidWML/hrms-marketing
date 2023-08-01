import Paragraph from "@/components/generics/Paragraph";
import SectionHeadings from "@/components/generics/SectionHeadings";
import TitleTypography from "@/components/generics/TitleTypography";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

export default function SectionThree() {
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
      <div className=" text-center space-y-4 lg:w-[80%] w-full mx-auto">
        <SectionHeadings text_color="text-sky-500" title="PAYROLL" description_color={"text-gray-600"} />
        <TitleTypography text_color={`h-s2-title`} title="Take the stress out of HR management with HRM's automated updates. Here's how it works" />
      </div>

      <div className=" w-full lg:px-12 py-24 flex flex-col lg:space-y-[120px] space-y-[60px] ">
        <div className=" grid lg:grid-cols-2 gap-3 h-g-1">
          <div className=" w-full bg-[#EAFDFC] rounded-xl p-6 overflow-hidden ">
            <img src="./pr-1.svg" alt="" className="lg:max-w-[80%] w-full mx-auto h-full drop-shadow-2xl  " />
          </div>
          <div className=" lg:p-12 py-6  space-y-4">
            <SectionHeadings title="Seamless Payroll Updates: Changes Automatically Reflected" />
            <Paragraph
              text_color="text-justify"
              description={`Experience a hassle-free payroll process with HRM's automated updates. Changes between payrolls are effortlessly surfaced, providing accurate and up-to-date information without manual intervention. Say goodbye to tedious manual updates and embrace the efficiency of automated payroll management.`}
            />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                  Instant Changes: Witness salary adjustments reflected instantly on the payroll screen as you make updates, avoiding delays and
                  ensuring real-time accuracy.
                </li>
                <li className="">
                  Swift and Efficient: With HRM's automated updates, you no longer need to wait for slow tools or third-party systems, speeding up the
                  payroll process.
                </li>
                <li className="">
                  Accurate Payruns: The real-time updates keep your payroll accurate and up-to-date, providing you with the latest information at all
                  times.
                </li>
                <li className="">
                  Smooth Payroll Experience: Embrace a hassle-free payroll management experience, eliminating the need for manual intervention and
                  streamlining your HR processes.
                </li>
                <li className="">
                  Improved Efficiency: With real-time updates, your HR team can allocate more time to strategic initiatives, fostering growth and
                  productivity.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3 h-g-2">
          <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
            <SectionHeadings title="Effortless Payment Automation: Streamline Your Finances" />
            <Paragraph
              text_color="text-justify"
              description={`Streamline your payment process with HRM's payment automation. Say goodbye to manual payment tasks as our system automates payment calculations, processing, and disbursements. Enjoy increased efficiency, reduced errors, and improved accuracy, allowing you to focus on strategic financial decisions and driving your business forward.`}
            />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                  Simplify Payment Tasks: HRM's payment automation feature eliminates the need for manual payment calculations, processing, and
                  disbursements, streamlining your finance operations.
                </li>
                <li className="">
                  Increased Efficiency: With automated payments, you can enjoy increased efficiency in your financial workflows, saving time and
                  effort for your finance team.
                </li>
                <li className="">
                  Reduced Errors: Automation reduces the risk of human errors in payment processing, ensuring greater accuracy and eliminating costly
                  mistakes.
                </li>
                <li className="">
                  Focus on Strategy: By automating payment tasks, your finance team can shift their focus to strategic financial planning and
                  decision-making.
                </li>
                <li className="">
                  Drive Business Growth: With streamlined finances, your business can better allocate resources and drive growth, all while
                  maintaining financial accuracy.
                </li>
              </ul>
            </div>
          </div>
          <div className="   lg:order-2 order-1 w-full  space-y-4 lg:p-12 rounded-xl p-6 overflow-hidden bg-[#F8EDE3]  ">
            <img src="./payments.svg" alt="" className=" lg:max-w-[100%] m-auto h-full drop-shadow-2xl  " />
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3 h-g-3">
          <div className=" lg:p-12 p-6 bg-[#E9EDC9] rounded-xl overflow-hidden  ">
            <img src="./pr-1.svg" alt="" className=" w-full h-full drop-shadow-2xl object-scale-down  " />
          </div>
          <div className=" lg:p-12 py-6 space-y-4">
            <SectionHeadings title="Payroll Insights: Answering Questions with Breakdowns" />
            <div className=" space-y-4">
              <ul className=" space-y-4 list-outside pl-4 list-disc">
                <li className="">
                  Detailed Payroll Analysis: HRM provides breakdowns of payslips that offer a detailed analysis of salary components and
                  deductions.
                </li>
                <li className="">
                  Understanding Earnings: Gain clarity on how earnings are calculated, including base pay, overtime, bonuses, and commissions.
                </li>
                <li className="">
                  Deduction Transparency: Easily identify and comprehend various deductions, such as taxes, insurance, and retirement contributions.
                </li>
                <li className="">Overtime Tracking: Track overtime hours and payments to understand its impact on employees' compensation.</li>
                <li className="">Leave Balances: View accrued and utilized leave balances, helping you manage employee time off more effectively.</li>
                <li className="">
                  Compliance Checks: Breakdowns ensure compliance with labor laws and regulations, avoiding potential legal issues.
                </li>
                <li className="">Customizable Reports: Tailor breakdowns to answer specific questions related to your business's payroll needs.</li>
                <li className="">
                  Empowering Decision-Making: Equipped with insightful breakdowns, HR managers can make informed decisions to enhance employee
                  satisfaction and optimize payroll processes.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 gap-3 h-g-4">
          <div className=" lg:p-12 py-6 lg:order-1 order-2 space-y-4">
            <SectionHeadings title="Automated Payslip Storage: Easy Access for Employees" />
            <div className=" space-y-4">
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
          <div className="  space-y-4 lg:order-2 order-1 lg:p-12 p-6 bg-[#FFBFA9] rounded-xl overflow-hidden  ">
            <img src="./pr-2.svg" alt="" className=" w-full h-full object-scale-down drop-shadow-2xl  " />
          </div>
        </div>
      </div>
    </div>
  );
}
