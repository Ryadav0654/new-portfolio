import React from "react";

const Skill = () => {
  const skills = [
    { name: "HTML", icon: "💻" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "Python", icon: "🐍" },
    { name: "Tailwind CSS", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "🚀" },
    { name: "TypeScript", icon: "🔤" },
    { name: "C", icon: "💻" },
    { name: "C++", icon: "💻" },
    { name: "Bootstrap", icon: "🖼️" },
    { name: "Express.js", icon: "⚡" },
    { name: "Node.js", icon: "🌲" },
    { name: "MongoDB", icon: "🗃️" },
    { name: "PostgreSQL", icon: "🗄️" },
    { name: "Prisma", icon: "⚙️" },
    { name: "Docker", icon: "🐳" },
    // Add any other skills here
  ];

  return (
    <section style={{
      backgroundImage:
        'url("https://img.freepik.com/free-vector/gradient-geometric-blue-technology-background_52683-78527.jpg")',
      backgroundSize: "cover",
      
    }} className="min-h-screen bg-opacity-35 py-6 px-4">
      {/* <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1> */}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
