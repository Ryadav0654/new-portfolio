"use client";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import img from "@/public/resister-bg.png";
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
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left z-50 "
      />
      <div className="relative w-full h-screen">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2023/12/10/192779-893446888_large.mp4" // Replace with your video file path
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            {/* <div className="mb-8 flex justify-center">
              <Image
                src={img}
                alt="Logo"
                className="h-[15rem] w-[15rem] md:h-[25rem] md:w-[25rem] object-contain animate-spin-slow "
              ></Image>
            </div> */}
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
              <h1 className="text-7xl font-[900] mb-4">
                Welcome to My Portfolio
              </h1>
              <p className="text-2xl font-semibold">
                Discover my work, projects, and journey as a developer.
              </p>
            
            <div className="flex justify-center space-x-8 mt-8">
            
              <Link
                href={"#"}
                className="px-4 py-2 transition-color duration-300 font-semibold bg-blue-500 hover:bg-blue-600 hover:scale-110 text-white rounded-full  transition  shadow-md shadow-blue-300"
              >
                Download Resume
              </Link>
              <Link
                href={"#"}
                className="px-4 py-2 transition-color  font-semibold  bg-blue-500 hover:bg-blue-600 hover:scale-110 text-white rounded-full transition duration-300 shadow-md shadow-blue-300"
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
