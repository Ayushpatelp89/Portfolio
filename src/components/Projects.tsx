import styles from "./Projects.module.css";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "HopeAcademy",
            description: "An educational platform repository managed via Git. Integrated features for course management and student tracking.",
            tech: ["Git", "GitHub", "Web Dev"],
            link: "https://github.com/augustin766/Hopeacademy.git"
        },
        {
            title: "Smart Traffic System",
            description: "A comprehensive solution for traffic management. Features backend and frontend components for real-time monitoring.",
            tech: ["Backend", "Frontend", "System Design"],
            link: "#"
        },
        {
            title: "Student CRUD App",
            description: "A Node.js application implementing Create, Read, Update, Delete operations with MongoDB integration.",
            tech: ["Node.js", "MongoDB", "Express"],
            link: "#"
        },
        {
            title: "Laravel Platform",
            description: "Web application built with Laravel, featuring custom PageControllers, advanced routing, and MVC architecture.",
            tech: ["Laravel", "PHP", "MVC"],
            link: "#"
        },
        {
            title: "React Components",
            description: "Collection of interactive React components including dynamic greetings and state management examples.",
            tech: ["React.js", "JavaScript", "Components"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className={styles.projects}>
            <h2 className={styles.title} data-aos="fade-up">Something I've Built</h2>
            <div className={styles.projectGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard} data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className={styles.header}>
                            <div className={styles.folderIcon}>📁</div>
                        </div>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <ul className={styles.techList}>
                            {project.tech.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
