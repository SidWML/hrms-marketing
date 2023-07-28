import React from 'react'

export default function SectionHeadings({title,text_color,description, description_color}) {
  return (
   <div className=" space-y-[8px]">
    <h1 style={{fontSize:"clamp(20px, 2vmin, 20px)", fontWeight:"650", letterSpacing:"-0.02em", lineHeight:"1.5"}}  className={`${text_color} font-semibold`}>{title}</h1>
    {
        description && <p style={{fontSize:"16px", lineHeight:"24px",letterSpacing:"-0.5%"}} className={`${description_color}`}>{description}</p>
    }
   </div>
  )
}
