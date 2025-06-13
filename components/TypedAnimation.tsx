"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypedAnimation = () => {
  return (
    <>
      <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Ravindra Yadav",
                      3000, // wait 1s before replacing "Mice" with "Hamsters"
                      "a Web Developer",
                      3000,
                      "a Coder",
                      3000,
                    ]}
                    wrapper="span"
                    speed={10}
                    deletionSpeed={20}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
    </>
  )
}

export default TypedAnimation