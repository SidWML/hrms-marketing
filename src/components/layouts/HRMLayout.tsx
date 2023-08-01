import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { inter } from '@/pages'

export default function HRMLayout({children}) {
  return (
    <div className={` ${inter.className} overflow-hidden`}>
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}
