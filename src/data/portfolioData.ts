export const portfolioData = {
    personalInfo: {
        name: "Ayush Raj",
        title: "Designer Developer",
        email: "Ayushpatelp89@gmail.com",
        phone: "+91-797979772126",
        linkedin: "https://www.linkedin.com/in/ayush-raj-patel-65849b257",
        github: "https://github.com/Ayushpatelp89",
        twitter: "https://x.com", // Keeping placeholder or removing if not in resume
        instagram: "https://www.instagram.com", // Keeping placeholder
    },
    about: {
        title: "About Me",
        description:
            "I am a Computer Science student with a strong foundation in programming and web development. I have solved over 500 problems on various coding platforms and won a university-level debate competition. I possess strong problem-solving skills and am a dedicated team player with experience in project management.",
    },
    skills: {
        programming: ["Java", "JavaScript", "PHP", "C/C++"],
        web: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Tailwind CSS",
            "React.js",
        ],
        tools: ["Git", "GitHub", "Excel", "MySQL", "VS Code", "DBMS"],
        soft: ["Problem-Solving", "Team Player", "Project Management"],
    },
    projects: [
        {
            title: "Incident Reporting System",
            category: "Full Stack",
            period: "Jan 2025 – March 2025",
            description:
                "Developed a full-stack incident tracking system using PHP and MySQL. Integrated Leaflet.js to visualize geospatial data on an interactive dashboard map. Created a responsive, mobile-first interface using Tailwind CSS.",
            tools: ["PHP", "MySQL", "Leaflet.js", "Tailwind CSS"],
            image: "/images/placeholder.webp", // Placeholder
        },
        {
            title: "Travel Safety Bot",
            category: "Bot/AI",
            period: "Jan 2025 – March 2024", // As per resume
            description:
                "Built a full-stack Travel Safety Bot using Python (Flask) and Bootstrap. Engineered a logic engine for real-time risk assessments using multiple data inputs (weather, crime, traffic). Designed RESTful API endpoints and applied asynchronous JavaScript.",
            tools: ["Python", "Flask", "Bootstrap", "RESTful API"],
            image: "/images/placeholder.webp",
        },
        {
            title: "Smart Parking System",
            category: "Desktop App",
            period: "June 2025 – August 2025",
            description:
                "Expanded a GUI-based application using C++ and the Qt Framework to automate parking processes. Enforced efficient backend logic with Signal-Slot mechanism. Created a user-friendly interface with dynamic table updates and form validation.",
            tools: ["C++", "Qt Framework", "GUI", "Automation"],
            image: "/images/placeholder.webp",
        },
    ],
    education: [
        {
            institution: "Lovely Professional University",
            degree: "B.Tech - CSE",
            period: "Aug 2024",
            details: "CGPA: 6.05",
            location: "Jalandhar, Punjab",
        },
        {
            institution: "Eklavya University",
            degree: "Intermediate",
            period: "2019 - 2022",
            details: "Percentage: 75%",
            location: "Damoh, Bhopal",
        },
        {
            institution: "Jesus and Mary Academy",
            degree: "Matriculation",
            period: "2017 - 2019",
            details: "Percentage: 63%",
            location: "Patna, Bihar",
        },
    ],
    certifications: [
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Google",
            date: "August 2024",
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            date: "May 2025",
        },
        {
            title: "Master DSA with Java/C++",
            issuer: "W3grads",
            date: "June 2025",
        },
    ],
};
