"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({
  id,
  title,
  description,
  imageUrl,
  link,
}: {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.05,
        zIndex: 100,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      key={id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[80vw] border border-gray-700 rounded-3xl backdrop-blur-sm bg-gray-500/10 bg-clip-padding overflow-hidden h-[60vh] shadow-lg shadow-gray-500 "
    >
      <div className="overflow-hidden w-full h-full">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 py-3 lg:p-14 flex flex-col justify-center items-center">
        <motion.h1
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-[900] text-white"
        >
          {title}
        </motion.h1>
        <motion.p 
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-lg font-semibold text-white text-justify py-4 lg:py-8">
          {description}
        </motion.p>

        <Link
          href={link}
          style={{backgroundImage: "linear-gradient(90deg, #0072ff 0%, #00d4ff 100%"}}
          className="px-4 lg:px-0 w-full lg:w-1/2 text-center py-3 transition-color duration-300 font-bold hover:scale-110 lg:text-lg text-white rounded-full  transition  shadow-md shadow-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
