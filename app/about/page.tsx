"use client";
import React from "react";
import Image from "next/image";
import img from "@/public/resister-bg.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/about_bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative"
    >
      <div className="absolute top-0 left-0 right-0 inset-0 w-full flex flex-col md:flex-row items-center justify-evenly gap-8 backdrop-blur-sm ">
        {/* Photo */}
        <Image
          src={img} // Replace with your photo file path
          alt="Ravindra Yadav"
          // width={200}
          // height={200}
          className=" object-cover "
        />

        {/* Text Content */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 400 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
          className=" px-4 lg:p-10 text-justify font-semibold md:text-left max-w-lg text-white"
        >
          <p className="text-base lg:text-xl mb-2 leading-6">
            Hi, I&apos;m Ravindra Yadav, a passionate MERN stack developer with a
            keen interest in modern technologies. I&apos;m currently studying at IIIT
            Bhopal.
          </p>
          <p className="text-base lg:text-xl mb-2 leading-7">
            I actively contribute to open-source programs like GSSoC and
            Hacktoberfest. During these events, I&apos;ve contributed to several
            exciting projects such as <strong>Papermark</strong>,{" "}
            <strong>CodeX100</strong>, <strong>NexMeet</strong>, and{" "}
            <strong>Frontend Mentor</strong>.
          </p>
          <p className="text-base lg:text-xl leading-8">
            I&apos;m always looking for new opportunities to grow and learn. Feel
            free to reach out if you&apos;d like to collaborate or discuss any
            projects!
          </p>
        </motion.div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
