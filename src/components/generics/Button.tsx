import Link from 'next/link'
import React from 'react'

export default function Button({label, href, bg_color,text_color, type}) {
  return (
   type === "button" ? (
    <button className={`${text_color} ${bg_color} px-6 py-2.5 font-medium text-sm`}>{label}</button>
   ) : (
    <Link  className={`${text_color} ${bg_color} px-8 rounded-full py-2.5 block w-[max-content] font-medium text-md`} href={href}>{label}</Link>
   )
  )
}
