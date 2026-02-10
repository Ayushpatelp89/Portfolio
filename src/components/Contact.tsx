import Link from "next/link";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.subtitle} data-aos="fade-up">What's Next?</p>
      <h2 className={styles.title} data-aos="fade-up" data-aos-delay="100">Get In Touch</h2>
      <p className={styles.text} data-aos="fade-up" data-aos-delay="200">
        I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <Link href="mailto:example@email.com" className={styles.emailButton} data-aos="fade-up" data-aos-delay="300">
        Say Hello
      </Link>
    </section>
  );
}
