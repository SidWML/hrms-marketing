import React from 'react'
import Button from '../generics/Button'
import Link from 'next/link'
import Input from '../generics/Input'

export default function Register() {
  return (
    <div className=" w-full  bg-[#f6f3ef]  ">
    <h1 className={` font-semibold text-4xl fixed py-4 pl-6`}>
      <Link href="/">HRM</Link>
    </h1>
    <div className=" w-full items-center flex justify-center   min-h-[100vh] p-4 ">
     <div className="">
      <img src="" alt="" className="" />
     </div>
     <div className=" space-y-8 bg-white   px-6 py-12 rounded-[10px] overflow-hidden lg:w-[30%] md:w-[60%] w-full">
        <div className="">
          <h1 className=" font-medium text-3xl">Register</h1>
        </div>
        <div className=" space-y-6">
        <Input labelText={`Company Name`} type={`text`} />
          <Input labelText={`Email`} type={`email`} />
          <Input labelText={`Password`} type={`password`} />
          <div className=" space-y-1 w-full flex items-center justify-between">
          <Link href="/login" className=" block underline hover:text-black text-sm " >
            Already have an account?
          </Link>
          </div>
          <Button type={`button`} bg_color={`bg-black rounded-full w-full `} text_color={`text-white`} label={`Register`} />
        </div>
         
         <h6 className=" w-full text-center flex gap-4 items-center "><span className=" w-full h-[1px] block bg-slate-500"></span> <span className="">or  </span> <span className="w-full h-[1px] block bg-slate-500"></span></h6>
         <Button href="" text_color={` bg-[#fac256] w-full  text-center  `} label={`Sign up using Gmail`} />
      </div>
    </div>
  </div>
  )
}
