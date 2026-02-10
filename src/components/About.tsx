import styles from "./About.module.css";

export default function About() {
    const skills = [
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "PHP",
        "Laravel",
        "Java",
        "MongoDB",
        "Git",
    ];

    return (
        <section id="about" className={styles.about}>
            <h2 className={styles.title} data-aos="fade-up">About Me</h2>
            <div className={styles.content}>
                <div className={styles.text} data-aos="fade-up" data-aos-delay="100">
                    <p>
                        Hello! My name is Ayush and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is a lot of fun!
                    </p>
                    <p>
                        Fast-forward to today, and I've had the privilege of working on various projects, from a <b>Smart Traffic Management System</b> to exploring full-stack applications with <b>Laravel</b> and <b>Node.js</b>.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <ul className={styles.skillsList}>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.imageContainer}>
                    {/* Placeholder for profile image if available later */}
                </div>
            </div>
        </section>
    );
}
