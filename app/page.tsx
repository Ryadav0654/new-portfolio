"use client";
import SocialLinks from "@/components/SocialLinks";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import About from "./about/page";
import Skill from "./skills/page";
import Contact from "./contact/page";
import Project from "./projects/page";
import Service from "./service/page";
import { motion, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left z-50"
      />
      <div className="relative w-full h-screen">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bg_video1.mp4" // Replace with your video file path
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <h1 className="text-6xl lg:text-[6rem] font-[900] mb-4 lg:mb-1">
                Hey there,
              </h1>
              <h1 className="text-5xl lg:text-[6rem] font-[900]  mb-4 lg:mb-1">
                I&apos;m{" "}
                <span className="text-blue-500">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Ravindra Yadav",
                      3000, // wait 1s before replacing "Mice" with "Hamsters"
                      // "a Web Developer",
                      // 3000,
                      // "a Coder",
                      // 3000,
                    ]}
                    wrapper="span"
                    speed={10}
                    deletionSpeed={20}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p className="text-lg lg:text-2xl font-bold">
                Discover my work, projects, and journey as a developer.
              </p>

              <div className="flex justify-center space-x-8 mt-8">
                <Link
                  href={
                    "https://drive.google.com/file/d/1tlzOa4hm7lF7Or0wb8Sj1Q7EVs_Mk9Fr/view?usp=sharing"
                  }
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #0072ff 0%, #00d4ff 100%",
                  }}
                  className="px-4 py-2 transition-color duration-300 font-semibold hover:scale-110 text-white rounded-full  transition  shadow-md shadow-blue-300"
                  target="_blank"
                >
                  Download Resume
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/yadavravindra536/"}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #0072ff 0%, #00d4ff 100%",
                  }}
                  className="px-4 py-2 transition-color  font-semibold  hover:scale-110 text-white rounded-full transition duration-300 shadow-md shadow-blue-300"
                  target="_blank"
                >
                  Hire Me
                </Link>
              </div>
              <div className="flex justify-center space-x-4 lg:space-x-8 mt-10">
                <SocialLinks />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Skill />
      <Service />
      <Contact />
    </>
  );
}
