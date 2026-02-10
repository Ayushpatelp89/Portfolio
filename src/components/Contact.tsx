<<<<<<< HEAD
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
=======
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                data-cursor="disable"
              >
                {portfolioData.personalInfo.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a
                href={`tel:${portfolioData.personalInfo.phone}`}
                data-cursor="disable"
              >
                {portfolioData.personalInfo.phone}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={portfolioData.personalInfo.twitter}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href={portfolioData.personalInfo.instagram}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{portfolioData.personalInfo.name}</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
>>>>>>> 6ab735ec238023f051ba3eba1036b4c938f175ce
