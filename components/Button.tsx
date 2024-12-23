"use client"
import React from 'react'

const Button = ({
    btnText="", 
    className="",
    onclick
}: Readonly<{
    btnText?:String
    className?: string,
    onclick?: () => void
}>)  => {
  return (
    <>
    <button onClick={onclick} className={`px-4 py-2 transition-color duration-300 font-semibold rounded-lg ${className}`}>{btnText}</button>
    </>
  )
}

export default Button