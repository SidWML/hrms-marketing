import React, { useEffect, useRef, useState } from "react";

export default function Input({labelText,type}) {
    const [label, setlabel] = useState(false)
    const inputRef = useRef(null)

    const AnimationTriggerOn = (e) => {
        setlabel(true)
    }
    const AnimationTriggerOff = (e) => {
       if( e.target.value){
        setlabel(true)
       }else{
        setlabel(false)
       }
    }


  return (
    <div className=" relative">
      <label htmlFor="" className={`" absolute  top-[50%]  font-light duration-300  ease-linear transform transition-all -translate-y-[50%] ${label ? " text-xs top-[5%] " : " top-[50%] text-[#9e9e9e]   "} "`}>
        {labelText}
      </label>
      <input ref={inputRef} onFocus={AnimationTriggerOn} onBlur={AnimationTriggerOff} type={type} className={` ${label ? " border-sky-500 py-3  " : " border-[#9e9e9e] py-3"}   outline-none  bg-transparent border-b  w-[100%] `} />
    </div>
  );
}
