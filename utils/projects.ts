interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    codelink: string;
    demolink: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Campus Connect Web",
      description:
        "Developed a full-stack web application that aims to bridge the communication gap among students and seniors, offering a central hub for announcements, event scheduling, club activities, study group formations, and general campus news.",
      imageUrl:
        "/campus-connect.png",
      codelink: "https://github.com/orgs/Campus-Connect-2024/repositories",
      demolink: "https://apanacampus.vercel.app/",
    },
    {
      id: 2,
      title: "Fasal Sarathi",
      description: "Fasal Sarathi is a cutting-edge web application that uses soil data to predict the most sustainable fertilizer for crops. By leveraging advanced data analysis and agricultural insights, Fasal Sarathi empowers farmers to enhance crop yield while promoting eco-friendly farming practices.",
      imageUrl:
        "fasal-sarathi.png",
      codelink: "https://github.com/Ryadav0654/Fasal_Sarathi",
      demolink: "#",
    },
    {
      id: 3,
      title: "HouseHunt Web",
      description: "HouseHunt is a modern rental website inspired by Airbnb, built using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. It offers a seamless rental experience with secure authentication powered by Passport.js.",
      imageUrl:
        "househunt.png",
      codelink: "https://github.com/Ryadav0654/HouseHunt-Web",
      demolink: "https://househunt-web.onrender.com/",
    },
    {
      id: 4,
      title: "Task Manager",
      description: "A smart task management tool equipped with an AI assistant to help users organize and prioritize their daily tasks. The AI assistant provides recommendations, sets reminders, and optimizes productivity by ensuring a structured and efficient workflow.",
      imageUrl:
        "task-manager.png",
      codelink: "https://github.com/Ryadav0654/Task_manager_frontend",
      demolink: "https://task-manager-frontend-seven-pied.vercel.app/",
    },
    {
      id: 5,
      title: "Spotify Clone",
      description: "A music streaming platform built using HTML, CSS, and JavaScript. This project replicates the core features of Spotify, including a visually appealing interface, responsive design, and dynamic functionality to browse and play music tracks.",
      imageUrl:
        "spotify_clone.png",
      codelink: "https://github.com/Ryadav0654/spotify-clone",
      demolink: "#",
    },
  ];