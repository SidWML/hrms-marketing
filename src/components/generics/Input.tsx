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
      <label htmlFor="" className={`" absolute   font-light duration-300  ease-linear transform transition-all  ${label ? " text-xs top-[10%] " : " top-[50%] text-[#9e9e9e] -translate-y-[50%]   "} "`}>
        {labelText}
      </label>
      <input ref={inputRef} onFocus={AnimationTriggerOn} onBlur={AnimationTriggerOff} type={type} className={` ${label ? " border-sky-500 py-3  " : " border-[#9e9e9e] py-3"}   outline-none  bg-transparent border-b  w-[100%] `} />
    </div>
  );
}
