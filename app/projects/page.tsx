"use client"
import Card from "@/components/Card";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Campus Connect Web",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis ipsam veniam sit laudantium illum eaque modi minus enim aspernatur laborum non asperiores, expedita nostrum voluptatum aliquid ducimus quasi debitis at voluptate quibusdam tenetur reiciendis vitae cumque. Recusandae, cupiditate porro!",
    imageUrl:
      "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1734857451~exp=1734861051~hmac=abe86332633e3caa55f17dec2d0dcf315df9f3765b3fe3b118e142988810acce&w=1480",
    link: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for project 2",
    imageUrl:
      "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1734857451~exp=1734861051~hmac=abe86332633e3caa55f17dec2d0dcf315df9f3765b3fe3b118e142988810acce&w=1480",
    link: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for project 3",
    imageUrl:
      "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1734857451~exp=1734861051~hmac=abe86332633e3caa55f17dec2d0dcf315df9f3765b3fe3b118e142988810acce&w=1480",
    link: "#",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description for project 4",
    imageUrl:
      "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1734857451~exp=1734861051~hmac=abe86332633e3caa55f17dec2d0dcf315df9f3765b3fe3b118e142988810acce&w=1480",
    link: "#",
  },
  // {
  //   id: 5,
  //   title: "Project 5",
  //   description: "Description for project 5",
  //   imageUrl:
  //     "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1734857451~exp=1734861051~hmac=abe86332633e3caa55f17dec2d0dcf315df9f3765b3fe3b118e142988810acce&w=1480",
  //   link: "#",
  // },
  // {
  //   id: 6,
  //   title: "Project 6",
  //   description: "Description for project 6",
  //   imageUrl:
  //     "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1734857451~exp=1734861051~hmac=abe86332633e3caa55f17dec2d0dcf315df9f3765b3fe3b118e142988810acce&w=1480",
  //   link: "#",
  // },
];
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
        backgroundImage:
          'url("https://img.freepik.com/free-vector/colorful-futuristic-background-with-shiny-particles_52683-42650.jpg?t=st=1734860699~exp=1734864299~hmac=b13d1ddc2439b88a29a5d68c968aa72d525a4b702d0a12ed74191d445160ec69&w=1380")',
        backgroundSize: "cover",
      }}
      className="w-full h-screen flex justify-center items-center relative bg-opacity-75"
    >
      {/* Scrollable Card Container */}
      <div
        ref={scrollRef}
        className="w-[85vw] h-full px-10 flex  align-center gap-x-20 overflow-x-scroll scroll-smooth snap-x scrollbar-none"
      >
        {projects.map((project) => (
          <div key={project.id} className="snap-center w-[80vw] h-[65vh] my-auto">
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
