"use client";
import React from "react";
import { motion, useScroll } from "motion/react";

const ScrollbarStatus = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left z-50"
    />
  );
};

export default ScrollbarStatus;
