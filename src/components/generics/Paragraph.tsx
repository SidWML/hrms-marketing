import React from 'react'

export default function Paragraph({description,text_color, text_center}) {
  return (
    <p style={{fontSize:"clamp(16px, 2vmin, 20px)", fontWeight:"418", letterSpacing:"-0.02em", lineHeight:"1.5"}} className={`${text_color}`}>{description}</p>
  )
}
