import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react'



export default function TitleTypography({title, text_color}) {
  
  
  useEffect(() => {
    const titleHeading = document.querySelector(".title-heading");

    const titleWords = titleHeading?.textContent?.split(' ');

    const wrapperdWords = titleWords?.map(word => (
      `<span style="display: inline-block; opacity: 0;">${word}</span>`
    ))

    titleHeading.innerHTML = wrapperdWords.join(' ')
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:titleHeading,
      }
    })
    tl.fromTo(".title-heading span", { y:"50px" , opacity:0 }, { y:"0px", opacity:1, stagger:{ amount:0.5 } })
    
  }, [])
  
  return (
    <h1 style={{fontSize:"clamp(28px, 8vmin, 56px)", letterSpacing:"-0.02em", lineHeight:"1.05"}} className={`${text_color} title-heading  font-[810]`}>{title}</h1>
  )
}                
