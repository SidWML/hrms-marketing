import React, { useEffect, useRef, useState } from "react";

export default function Input({labelText,type}) {
    const [label, setLabel] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
      if(inputRef.current.value  != ""){
        setLabel(true)
      }
      setLabel(false);
    }, []);
  
    const AnimationTriggerOn = () => {
      setLabel(true);
    };
  
    const AnimationTriggerOff = () => {
      if(inputRef.current.value  != ""){
        setLabel(true)
      }
      setLabel(false);
    };

  return (
    <div className=" relative">
      <label htmlFor="" className={`" absolute   font-light duration-300  ease-linear transform transition-all  ${label ? " text-xs top-[0%] " : " top-[50%] text-[#9e9e9e] -translate-y-[50%]   "} "`}>
        {labelText}
      </label>
      <input ref={inputRef} onFocus={AnimationTriggerOn} onBlur={AnimationTriggerOff} type={type} className={` ${label ? " border-sky-500 py-3  " : " border-[#9e9e9e] py-3"}   outline-none  bg-transparent border-b  w-[100%] `} />
    </div>
  );
}
