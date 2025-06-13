import React from "react";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import TypedAnimation from "@/components/TypedAnimation";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white flex flex-col lg:flex-row items-center justify-evenly relative ">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 pt-24 pb-12 lg:py-0 text-center lg:text-left ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-2">
          Hey there,
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4">
          I&apos;m{" "}
          <span className="text-cyan-400">
            <TypedAnimation />
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium mb-8 max-w-xl">
          Discover my work, projects, and journey as a developer.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6">
          <Link
            href="https://drive.google.com/file/d/1m3LuhAyCzsIiuCEYoHvt0-fxjrQ9lOi9/view?usp=sharing"
            target="_blank"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-400/40"
          >
            Download Resume
          </Link>
          <Link
            href="https://www.linkedin.com/in/yadavravindra536/"
            target="_blank"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-400/40"
          >
            Hire Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-4 flex justify-center lg:justify-start space-x-4 lg:space-x-6">
          <SocialLinks />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center md:h-[500px] lg:h-[49vw] z-10 overflow-visible ">
        <div className=" w-full h-full md:max-w-[80%] lg:max-w-full overflow-visible">
          <Spline scene="https://prod.spline.design/tmvrkO1XyphOfapQ/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
