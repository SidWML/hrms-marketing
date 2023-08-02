import React from "react";
import TitleTypography from "./TitleTypography";
import SectionHeadings from "./SectionHeadings";
import { fairPlay } from "@/pages";
import Paragraph from "./Paragraph";

export default function ToolsMarquee() {
  const tools = [
    {
      firstRow: [
        {
          name: "Jira",
          image: "/jira.svg",
        },
        {
          name: "Dropbox",
          image: "/dropbox.svg",
        },
        {
          name: "Ms Excel",
          image: "/ms-excel.svg",
        },
        {
          name: "Dropbox",
          image: "/git-hub.svg",
        },
        {
          name: "Zoom",
          image: "/Zoom.svg",
        },
        {
          name: "Slack",
          image: "/slack.svg",
        },
        {
          name: "Quickbook",
          image: "/quickbook.png",
        },
        {
          name: "Google Calender",
          image: "/google-calendar.png",
        },
      ],
    },
    {
      secondRow: [
        {
          name: "One Drive",
          image: "/one-drive.svg",
        },
        {
          name: "Ms Teams",
          image: "/ms-teams.svg",
        },
        {
          name: "Microsoft",
          image: "/microsoft.svg",
        },
        {
          name: "Tableau",
          image: "/tableau.svg",
        },
        {
          name: "Zoom",
          image: "/Zoom.svg",
        },
        {
          name: "Slack",
          image: "/slack.svg",
        },
        {
          name: "Jira",
          image: "/jira.svg",
        },
        {
          name: "Dropbox",
          image: "/dropbox.svg",
        },
      ],
    },
    {
      ThirdRow: [
        {
          name: "Zoom",
          image: "/Zoom.svg",
        },
        {
          name: "Slack",
          image: "/slack.svg",
        },
        {
          name: "Quickbook",
          image: "/quickbook.png",
        },
        {
          name: "Google Calender",
          image: "/google-calendar.png",
        },
        {
          name: "One Drive",
          image: "/one-drive.svg",
        },
        {
          name: "Ms Teams",
          image: "/ms-teams.svg",
        },
        {
          name: "Microsoft",
          image: "/microsoft.svg",
        },
        {
          name: "Tableau",
          image: "/tableau.svg",
        },
      ],
    },
  ];

  return (
    <div className=" w-full md:px-12 py-[100px]  p-6 overflow-hidden">
      <div className=" text-center space-y-8 lg:w-[80%] h-s2-title w-full mx-auto">
        <TitleTypography text_color={` `} title="Integrate Apps with Ease - 50+ Pre-Made Integrations and Custom Options Available" />
        <Paragraph
          description={` Seamlessly connect your existing apps and streamline workflows with our integration platform. Choose from over 50 pre-made integrations for popular apps, or create custom integrations for more advanced requirements. No coding needed, just a few clicks to automate and optimize your processes. Boost productivity and efficiency with our user-friendly integration solution.`}
        />
      </div>
      <div className=" space-y-6 mt-16">
        <div className=" w-full relative  flex gap-10 overflow-hidden   ">
          <div className=" animate-marquee flex min-w-full shrink-0 items-center gap-4   justify-around ">
            {tools[0].firstRow?.map((tool) => (
              <div className={` ${fairPlay.className} rounded-full  flex gap-4 px-6 py-3 bg-sky-50 items-center  min-w-[max-content]`}>
                {" "}
                <img src={tool.image} alt="" className=" max-w-[40px]" />
                <span className=" text-xl">{tool.name}</span>
              </div>
            ))}
          </div>
          <div className=" animate-marquee flex min-w-full shrink-0 items-center gap-4   justify-around ">
            {tools[0].firstRow?.map((tool) => (
              <div className={` ${fairPlay.className}  flex gap-4 px-6 py-3 bg-sky-50 rounded-full items-center min-w-[max-content]`}>
                {" "}
                <img src={tool.image} alt="" className=" max-w-[40px]" />
                <span className=" text-xl">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full relative  flex gap-10 overflow-hidden   ">
          <div className=" ">
            <div className="  flex min-w-full animate-marquee [animation-direction:reverse]   overflow-hidden col-span-1 shrink-0 items-center gap-4   justify-around ">
              {tools[2].ThirdRow?.map((tool) => (
                <div className={` ${fairPlay.className} rounded-full  flex gap-4 px-6 py-3 bg-sky-50 items-center  min-w-[max-content]`}>
                  {" "}
                  <img src={tool.image} alt="" className=" max-w-[40px]" />
                  <span className=" text-xl">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="  flex [animation-direction:reverse]  col-span-1 shrink-0 items-center gap-4 animate-marquee    justify-around ">
            {tools[2].ThirdRow?.map((tool) => (
              <div className={` ${fairPlay.className}  flex gap-4 px-6 py-3 bg-sky-50 rounded-full items-center min-w-[max-content]`}>
                {" "}
                <img src={tool.image} alt="" className=" max-w-[40px]" />
                <span className=" text-xl">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full relative  flex gap-10 overflow-hidden   ">
          <div className="  animate-marquee flex min-w-full shrink-0 items-center gap-4   justify-around ">
            {tools[1].secondRow?.map((tool) => (
              <div className={` ${fairPlay.className} rounded-full  flex gap-4 px-6 py-3 bg-sky-50 items-center  min-w-[max-content]`}>
                {" "}
                <img src={tool.image} alt="" className=" max-w-[40px]" />
                <span className=" text-xl">{tool.name}</span>
              </div>
            ))}
          </div>
          <div className=" animate-marquee flex min-w-full shrink-0 items-center gap-4   justify-around ">
            {tools[1].secondRow?.map((tool) => (
              <div className={` ${fairPlay.className}  flex gap-4 px-6 py-3 bg-sky-50 rounded-full items-center min-w-[max-content]`}>
                {" "}
                <img src={tool.image} alt="" className=" max-w-[40px]" />
                <span className=" text-xl">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
