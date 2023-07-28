import React from "react";
import TitleTypography from "../generics/TitleTypography";
import { navlinks } from "./Navbar";
import SectionHeadings from "../generics/SectionHeadings";
import Paragraph from "../generics/Paragraph";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Button from "../generics/Button";

export default function Footer() {
  return (
    <div className=" w-full bg-[#1c4396] space-y-16 px-12 py-[60px]">
      <div className=" lg:w-[80%] mx-auto space-y-12 flex flex-col items-center">
        <TitleTypography text_color={`text-center text-[white]`} title="Experience Our Solution: Request a Demo to Uncover the Power of Innovation" />
        <div className="w-full gap-3 flex md:flex-row flex-col md:items-center justify-center ">
          <input type="text" placeholder="david@gmail.com" className=" px-6 py-4 lg:w-[35%]  md:w-[50%] rounded-full" />
          <button className="px-12 py-4 rounded-full  bg-[#cde026]">SUBMIT</button>
        </div>
      </div>
      <div className=" lg:w-[80%] w-full p-[40px] mx-auto md:grid flex flex-col md:text-start text-center md:items-start items-center  lg:grid-cols-5 lg:gap-0 gap-6 md:grid-cols-3  bg-white  rounded-[20px]">
        <div className=" col-span-1 w-full">
          <h1 className="   font-bold text-6xl">HRM</h1>
        </div>
        {navlinks.map((link) => (
          <div className=" space-y-2 col-span-1 ">
            <SectionHeadings text_color={`md:text-start text-center`} title={link.link} />
            <div className=" space-y-1">
              {link.subLinks.map((sublink) => (
                <Link className="block" href={sublink.href}>
                  {" "}
                  <div className=" md:block hidden">
                    <Paragraph description={sublink.link} />
                  </div>
                  <div className=" md:hidden block">
                    <Paragraph text_center description={sublink.link} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className=" space-y-2 col-span-1 md:text-start ">
          <SectionHeadings title={`Legal`} />
          <Link className="block" href="/legal">
            {" "}
            <div className=" md:block hidden">
              <Paragraph description={`Legal`} />
            </div>
            <div className="md:hidden block">
              <Paragraph text_center description={`Legal`} />
            </div>
          </Link>
          <Link className="block" href="/legal">
            {" "}
            <Paragraph description={`Security`} />
          </Link>
        </div>
        <div className=" space-y-2 col-span-1">
          <SectionHeadings title={`Social`} />
          <div className=" flex gap-2">
            <Link href="" className=" min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-black text-white font-extrabold">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="" className=" min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-black text-white font-extrabold">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="" className=" min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-black text-white font-extrabold">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="" className=" min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-black text-white font-extrabold">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
        </div>
        <div className=" mt-8 flex items-center col-span-2 gap-4">
          <Button label="Login" href="/" bg_color={" border border-black"} />
          <Button label="Register" href="/" bg_color={"bg-[#cde026]"} />
        </div>
      </div>
    </div>
  );
}
