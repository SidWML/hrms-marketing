import React from "react";
import TitleTypography from "./TitleTypography";
import { fairPlay } from "@/pages";

export default function Marquee() {
  return (
    <div className=" w-full   py-8 px-6 pointer-events-none overflow-hidden">
      <div className=" w-full relative  flex gap-10 overflow-hidden  ">
        <div className=" animate-marquee flex min-w-full shrink-0 items-center    justify-around gap-16">
          {Array.from({ length: 14 }, (_, index) => (
            <h1 className={` ${fairPlay.className} text-6xl font-bold flex gap-16 text-slate-500 w-full`}>
              {" "}
              <span className="">HRM</span> <span className="">WML</span> <span className="">FERVIDSMART</span> <span className="">EMIZO</span>{" "}
            </h1>
          ))}
        </div>
        <div className=" animate-marquee flex min-w-full shrink-0 items-center    justify-around gap-10">
          {Array.from({ length: 14 }, (_, index) => (
            <h1 className={` ${fairPlay.className} text-6xl font-bold flex gap-16 text-slate-500 w-full`}>
              {" "}
              <span className="">HRM</span> <span className="">WML</span> <span className="">FERVIDSMART</span> <span className="">EMIZO</span>{" "}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
