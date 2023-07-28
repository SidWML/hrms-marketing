import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const navlinks = [
  {
    link: "Product",
    subLinks: [
      // {
      //   link: "People",
      //   href: "/people",
      //   icon: "/users.png",
      //   Description: "Manage and view employee information, profiles, and related data.",
      // },
      {
        link: "Payroll",
        href: "/payroll",
        icon: "/payroll.png",
        Description: "Process and manage employee salaries, wages, and compensation.",
      },
      {
        link: "Benefits",
        href: "/benefits",
        icon: "/benefits.png",
        Description: "Access and administer employee benefits, such as insurance, healthcare, and retirement plans.",
      },
      {
        link: "Time off",
        href: "/time-off",
        icon: "/time.png",
        Description: "Request, approve, and track employee time-off and leave requests.",
      },
      {
        link: "Payments",
        href: "/payments",
        icon: "/payment.png",
        Description: "Manage employee-related payments, such as reimbursements and bonuses.",
      },
    ],
  },
  // {
  //   link: "Resources",
  //   subLinks: [
  //     {
  //       link: "Blog",
  //       href: "/people",
  //     },
  //     {
  //       link: "About Us",
  //       href: "/payroll",
  //     },
  //     {
  //       link: "Contact Us",
  //       href: "/benefits",
  //     },
  //   ],
  // },
];

export default function Navbar() {
  const [open, setOpen] = useState();
  const [showSide, setShowSide] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const navRef = useRef(null)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    // Event listener to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Attach the event listener to the window
    document.addEventListener("mouseleave", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mouseleave', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={` `}>
      <nav
        className={`p-4 flex  items-center fixed top-0 left-0 z-[999] right-0 justify-center w-full  ${
          changeColor ? " lg:bg-transparent bg-white" : " "
        } `}
      >
        <h1 className={`${showSide || changeColor ? " text-black " : " text-white "} lg:hidden font-semibold text-4xl pl-4`}>
          <Link href="/">HRM</Link>
        </h1>
        <div
          style={{ background: changeColor ? "white " : "rgba(255,255,255,0.54)" }}
          className=" backdrop-blur-lg lg:flex hidden transition-all duration-300 ease-linear items-center drop-shadow-2xl max-w-[max-content] pl-5 rounded-2xl space-x-3 justify-between "
        > 
          <h1 className=" font-semibold text-2xl">
            <Link href="/">HRM</Link>
          </h1>
          <div className="flex items-center p-2 space-x-3">
            {navlinks.map((link, index) => (
              <Popover ref={navRef}  className="relative">
                <Popover.Button
                  onMouseEnter={() => setOpen(index)}
                  onMouseLeave={() => setOpen(null)}
                  
                  className="px-2 py-2.5 focus:outline-none outline-none font-light rounded-lg hover:bg-[#dbdcd8] hover:bg-opacity-60"
                >
                  {" "}
                  <span className="">{link.link}</span> <FontAwesomeIcon className="text-xs font-light opacity-60" icon={faChevronDown} />{" "}
                </Popover.Button>

                <Transition
                
                  show={open === index}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Popover.Panel onMouseEnter={() => setOpen(index)}
                  onMouseLeave={() => setOpen(null)} className="absolute rounded-xl drop-shadow-2xl top-[10px]  min-w-[300px] max-w-[300px] bg-white p-6">
                    <ul className=" space-y-4">
                      {link.subLinks.map((sublink) => (
                        <li className=" flex items-center ">
                          {" "}
                          <Link className="flex gap-2" href={sublink.href}>
                            {" "}
                            {sublink.icon && <img src={sublink.icon} alt="" className=" w-[20px] h-[20px] mt-1  " />}{" "}
                            <div className="flex flex-col">
                              <span className=""> {sublink.link}</span>
                              <span className=" text-xs"> {sublink.Description}</span>
                            </div>
                          </Link>{" "}
                        </li>
                      ))}
                    </ul>
                  </Popover.Panel>
                </Transition>
              </Popover>
            ))}
            <Link href="/about" className="px-2 py-2.5 focus:outline-none outline-none font-light rounded-lg ">
              About
            </Link>
            <Link href="/login" className="px-2 py-2.5 focus:outline-none outline-none font-light rounded-lg ">
              Login
            </Link>
            <Link href="/register" className="px-4 bg-[#cde026] py-2.5 focus:outline-none outline-none font-medium rounded-lg ">
              Get Started
            </Link>
          </div>
        </div>
        <div
          onClick={() => setShowSide(!showSide)}
          className=" w-[40px] z-[999] lg:hidden flex flex-col gap-1 items-center justify-center h-[40px]  ml-auto "
        > 
          <div className={` ${showSide  ? " rotate-45 translate-y-2 bg-black " : changeColor ? " bg-black " : " bg-white " } duration-300 ease-linear w-[90%] h-[4px]  `}></div>
          <div className={` ${showSide  ? " opacity-0 bg-black " : changeColor ? " bg-black " : " bg-white " } duration-300 ease-linear w-[90%] h-[4px]  `}></div>
          <div className={` ${showSide  ? " -rotate-45 -translate-y-2 bg-black " : changeColor ? " bg-black " : " bg-white " } duration-300 ease-linear w-[90%] h-[4px]  `}></div>
        </div>
      </nav>
      <div
        className={`${
          showSide ? " w-full " : " w-0 "
        } lg:hidden overflow-hidden  transition-width duration-300 ease-linear fixed top-0 left-0 z-[222] bg-white min-h-[100vh]
    `}
      >
        <div
          style={{ background: "rgba(255,255,255,0.54)" }}
          className={` flex  flex-col p-8 rounded-2xl lg:space-x-3 justify-between ${
            showSide ? " opacity-100 translate-y-0 " : "opacity-0 translate-y-5 "
          } duration-300 ease-linear `}
        >
          <div className="flex flex-col lg:space-x-3 space-y-4 py-12 w-full ">
            {navlinks.map((link, index) => (
              <Popover className="relative w-full ">
                <Popover.Button
                  onClick={() => (open == index ? setOpen(null) : setOpen(index))}
                  className=" focus:outline-none py-2 outline-none w-full flex items-center justify-between font-normal text-4xl rounded-lg  hover:bg-opacity-60"
                >
                  {" "}
                  <span className="">{link.link}</span> <FontAwesomeIcon className="text-sm font-light" icon={faChevronDown} />{" "}
                </Popover.Button>

                <Transition
                  show={open === index}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Popover.Panel className=" rounded-xl top-[10px]  bg-white py-4">
                    <ul className=" space-y-4">
                      {link.subLinks.map((sublink) => (
                        <li className=" flex items-center  ">
                          {" "}
                          <Link className=" text-lg font-medium flex gap-2" href={sublink.href}>
                            {" "}
                            {sublink.icon && <img src={sublink.icon} alt="" className=" w-[20px] h-[20px] mt-1  " />}{" "}
                            <div className="flex flex-col">
                              <span className=""> {sublink.link}</span>
                              <span className=" text-sm font-light"> {sublink.Description}</span>
                            </div>
                          </Link>{" "}
                        </li>
                      ))}
                    </ul>
                  </Popover.Panel>
                </Transition>
              </Popover>
            ))}
            <Link href="/about" className=" py-2 w-full focus:outline-none outline-none font-normal text-4xl  rounded-lg ">
              About
            </Link>
            <div className=" flex py-4 items-center gap-4 mt-12 text-lg">
              <Link href="/login" className="px-8 border-[black] border-2  py-2.5 min-w-[max-content] focus:outline-none outline-none font-medium rounded-full ">
                Login
              </Link>
              <Link href="/register" className="px-8 bg-[#cde026] py-2.5 min-w-[max-content] focus:outline-none outline-none font-medium rounded-full ">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
