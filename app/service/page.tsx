"use client";
import React, {  useRef } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/utils/services';


const Service: React.FC = () => {
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
          'url("service_bg.jpg")',
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
      className="w-full h-screen flex justify-center items-center relative bg-opacity-75 "
    >
      {/* Scrollable Card Container */}
      <div className='bg-black bg-opacity-35 w-full h-full flex justify-center items-center'>
      <div
        ref={scrollRef}
        className="w-[85vw] h-full px-10 flex gap-x-10 overflow-x-scroll scroll-smooth snap-x scrollbar-none"
      >
        {services.map((service) => (
          <div key={service.id} className="snap-center my-auto w-[80vw] h-[65vh]">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scrollToCard("left")}
        className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 bg-gray-500/25 text-white px-3 py-2 rounded-full shadow-lg"
      >
        ◀
      </button>
      <button
        onClick={() => scrollToCard("right")}
        className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 bg-gray-500/25 text-white px-3 py-2 rounded-full shadow-lg"
      >
        ▶
      </button>
      </div>
    </section>
  );
};

export default Service;
