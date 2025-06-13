// import React from "react";
// import Image from "next/image";
// import img from "@/public/Ravi_yadav.png";

// const About = () => {
//   return (
//     <section
//       style={{
//         backgroundImage: 'url("/about_bg.jpg")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       className="relative min-h-screen w-full bg-black text-white flex items-center justify-center px-6 md:px-12 lg:px-24 xl:px-36 bg-opacity-50"
//     >
//       <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl gap-10 py-12">
//         {/* 👤 Left: Profile Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="w-72 h-72 md:w-[40rem] md:h-[40rem] overflow-hidden rounded-full shadow-2xl ring-1 ring-white/10">
//             <Image
//               src={img}
//               alt="Ravindra Yadav"
//               width={400}
//               height={400}
//               className="object-cover w-full h-full"
//               priority
//             />
//           </div>
//         </div>

//         {/* ✍️ Right: Text Content */}
//         <div className="w-full md:w-1/2 text-justify font-semibold space-y-4">
//           <p className="text-base lg:text-xl leading-relaxed">
//             Hi, I&apos;m <strong>Ravindra Yadav</strong>, a passionate MERN
//             stack developer with a keen interest in modern technologies.
//             I&apos;m currently studying at IIIT Bhopal.
//           </p>
//           <p className="text-base lg:text-xl leading-relaxed">
//             I actively contribute to open-source programs like{" "}
//             <strong>GSSoC</strong> and
//             <strong> Hacktoberfest</strong>. During these events, I&apos;ve
//             contributed to several exciting projects such as{" "}
//             <strong>Papermark</strong>, <strong>CodeX100</strong>,{" "}
//             <strong>NexMeet</strong>, and <strong>Frontend Mentor</strong>.
//           </p>
//           <p className="text-base lg:text-xl leading-relaxed">
//             I&apos;m always looking for new opportunities to grow and learn.
//             Feel free to reach out if you&apos;d like to collaborate or discuss
//             any projects!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import Image from "next/image";
import img from "@/public/Ravi_yadav.png";

const About = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/about_bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen w-full bg-black text-white flex items-center justify-center px-6 md:px-12 lg:px-24 xl:px-36"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl gap-10 py-12">
        {/* 👤 Left: Profile Image */}
        <div className="relative w-72 h-72 md:w-[550px] md:h-[650px] rounded-lg overflow-hidden shadow-2xl ring-4 ring-white/20 bg-white/10">
          <Image
            src={img}
            alt="Ravindra Yadav"
            fill
            className="object-cover"
            // priority
          />
        </div>

        {/* ✍️ Right: Text Content */}
        <div className="w-full md:w-1/2 text-justify font-semibold space-y-4 md:px-20">
          <p className="text-base lg:text-2xl leading-relaxed">
            Hi, I&apos;m <strong>Ravindra Yadav</strong>, a passionate MERN
            stack developer with a keen interest in modern technologies.
            I&apos;m currently studying at IIIT Bhopal.
          </p>
          <p className="text-base lg:text-xl leading-relaxed">
            I actively contribute to open-source programs like{" "}
            <strong>GSSoC</strong> and
            <strong> Hacktoberfest</strong>. During these events, I&apos;ve
            contributed to several exciting projects such as{" "}
            <strong>Papermark</strong>, <strong>CodeX100</strong>,{" "}
            <strong>NexMeet</strong>, and <strong>Frontend Mentor</strong>.
          </p>
          <p className="text-base lg:text-xl leading-relaxed">
            I&apos;m always looking for new opportunities to grow and learn.
            Feel free to reach out if you&apos;d like to collaborate or discuss
            any projects!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
