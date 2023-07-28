import Login from '@/components/auth/Login'
import React from 'react'
import { inter } from '..'

export default function index() {
  return (
    <div className={`${inter.className}`}>
        <Login />
    </div>
  )
}
