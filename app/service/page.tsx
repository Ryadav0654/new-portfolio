"use client";
import React, {  useRef } from 'react';
import ServiceCard from '@/components/ServiceCard';

const services = [
  { 
    id: 1,
    title: 'Web Development',
    description:
      'We offer professional web development services to build fast, scalable, and responsive websites and applications tailored to your business needs.',
      imageUrl: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description:
      'Our UI/UX design services help you create engaging and intuitive user interfaces, ensuring a seamless user experience across all devices.',
      imageUrl: 'https://img.pikbest.com/wp/202408/color-palette-dazzling-3d-abstract-geometric-scene-with-a-vibrant-perfect-for-showcasing-graphics_9736931.jpg!bw700',
    link: '#',
  },
  {
    id: 3,
    title: 'E-commerce Solutions',
    description:
      'We specialize in building secure, customizable e-commerce platforms that drive sales, integrate with payment systems, and offer an excellent user experience.',
      imageUrl: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1734857451~exp=1734861051~hmac=abe86332633e3caa55f17dec2d0dcf315df9f3765b3fe3b118e142988810acce&w=1480',
    link: '#',
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description:
      'Our SEO services help increase your website’s visibility on search engines, drive traffic, and improve rankings with optimized content and best practices.',
      imageUrl: 'https://img.freepik.com/free-vector/seo-elements-background_23-2147766866.jpg?t=st=1734878185~exp=1734881785~hmac=3291ce74a78dae48b23dad06705c9fc8f12e4bd611dc885b7d87f5a6c810159a&w=826',
    link: '#',
  },
];

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
          'url("https://img.pikbest.com/wp/202408/color-palette-dazzling-3d-abstract-geometric-scene-with-a-vibrant-perfect-for-showcasing-graphics_9736931.jpg!bw700")',
        backgroundSize: "cover",
        
      }}
      className="w-full h-screen flex justify-center items-center relative bg-opacity-75 "
    >
      {/* Scrollable Card Container */}
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
    </section>
  );
};

export default Service;
