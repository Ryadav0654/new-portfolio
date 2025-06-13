"use client";
import Card from "@/components/Card";
import React, { useRef } from "react";
import { projects } from "@/utils/projects";
const Project = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.clientWidth;
      const scrollAmount = direction === "right" ? scrollWidth : -scrollWidth;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      style={{
        backgroundImage: 'url("/project-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex justify-center items-center relative bg-opacity-75 "
    >
      {/* Scrollable Card Container */}
      <div
        ref={scrollRef}
        className="w-[85vw] h-full px-10 flex  align-center gap-x-20 overflow-x-scroll scroll-smooth snap-x scrollbar-none"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="snap-center w-[80vw] h-[65vh] my-auto"
          >
            <Card {...project} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scrollToCard("left")}
        className="absolute left-2 lg:left-8 top-1/2 transform -translate-y-1/2 bg-gray-500/25 text-white px-3 py-2 rounded-full shadow-lg"
      >
        ◀
      </button>
      <button
        onClick={() => scrollToCard("right")}
        className="absolute right-2 lg:right-8 top-1/2 transform -translate-y-1/2 bg-gray-500/25 text-white px-3 py-2 rounded-full shadow-lg"
      >
        ▶
      </button>
    </section>
  );
};

export default Project;
