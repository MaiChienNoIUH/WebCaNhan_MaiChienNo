export const siteConfig = {
  name: "Mai Chiến Nô",
  title: "Fresher Software Engineer",
  description: "Portfolio website of Mai Chien No",
  accentColor: "#1d4ed8",
  social: {
    email: "nomai6789@gmail.com",
    linkedin: "https://www.linkedin.com/in/n%C3%B4-mai-53b8b7376/",
    github: "https://github.com/MaiChienNoIUH",
  },
  aboutMe:
    "I am a Full-Stack Developer with strong focus on Backend development and system architecture. I have experience building scalable Web Applications using JavaScript, React, Node.js, and Python. I am passionate about designing RESTful APIs, integrating AI features, and deploying applications using Docker and cloud services. With solid logical thinking and a proactive learning mindset, I enjoy optimizing systems and collaborating across teams to deliver efficient and reliable solutions.",
  skills: ["Java", "Javascript", "React", "Node.js", "Python", "AWS", "Docker", "Postman", "Firebare", "AI"],
  projects: [
    {
      name: "Movie Ticket Booking System",
      description:
        "Design and develop RESTful APIs for movie, showtime and booking modules. Implement JWT Authentication. Containerize backend services using Docker. Integrate AI recommendation chatbot using OpenAI API",
      link: "https://github.com/vuphongle/movie-ticket-booking-be",
      skills: ["Java", "Spring boot", "JWT", "Docker", "AWS", "MariaDB","git/github"],
    },
    {
      name: "Cardio – Track Health Care System",
       description:
        "Develop WebApp backend using Microservices architecture. Design and implement RESTful APIs and Deploy services using Docker",
      link: "https://github.com/LeDonChung/CardioTrackBackend",
      skills: ["Java", "Spring boot", "MicroService", "MariaDB", "Jenkins", "JWT", "Docker", "AWS", "git/github"],
    },
    {
      name: "JOLO MULTI-PLATFORM CHAT APPLICATION",
      description:
        "A multi-platform chat application development project (web and mobile) that allows messaging between individuals and groups. The system supports real-time messaging, multimedia sharing, and centralized user information management on AWS. The application is optimized to operate smoothly on multiple devices and ensures data security.",
      link: "https://github.com/vuphongle/appchatzolo_cnm",
      skills: ["ReactJS", "React Native", "HTML/CSS", "Java", "AWS", "Socket.io", "Nginx"],
    },
  ],
  experience: [
    {
      company: "Nuta.io Co., Ltd.",
      title: "Intern Backend developer",
      dateRange: "07/2025 - 01/2026",
      bullets: [
        "Developed and maintained RESTful APIs for WebApp backend services",
        "Participated in building microservices architecture for scalable system design",
        "Optimized database queries and API performance, improving response time by 30-40%",
        "Containerized backend services using Docker for development and deployment",
        "Collaborated with frontend team to integrate APIs and ensure system stability",
        "Used GitHub for version control and team collaboration",
      ],
    },
  ],
  education: [
    {
      school: "Ho Chi Minh City University of Industry (IUH)",
      degree: "Bachelor of Software Engineering",
      dateRange: "2021 - 2026",
      mark: 3.4/4.0,
    },
  ],
};
