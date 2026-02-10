import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>

            <div className={styles.heroContent}>
                <p className={styles.greeting} data-aos="fade-up" data-aos-delay="100">
                    Hi, my name is
                </p>
                <h1 className={styles.title} data-aos="fade-up" data-aos-delay="200">
                    Ayush.
                </h1>
                <h2 className={styles.subtitle} data-aos="fade-up" data-aos-delay="300">
                    I build things for the web.
                </h2>
                <p className={styles.description} data-aos="fade-up" data-aos-delay="400">
                    I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </p>
                <Link href="#projects" className={styles.ctaButton} data-aos="fade-up" data-aos-delay="500">
                    Check out my work!
                </Link>
            </div>
        </section>
    );
}
