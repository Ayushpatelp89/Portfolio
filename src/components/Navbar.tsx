<<<<<<< HEAD
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar} data-aos="fade-down">
            <Link href="/" className={styles.logo}>
                Ayush.
            </Link>

            <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
                {isOpen ? "✕" : "☰"}
            </button>

            <div className={`${styles.navContext} ${isOpen ? styles.open : ""}`}>
                <Link href="#about" className={styles.navLink} onClick={() => setIsOpen(false)}>
                    About
                </Link>
                <Link href="#projects" className={styles.navLink} onClick={() => setIsOpen(false)}>
                    Projects
                </Link>
                <Link href="#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>
                    Contact
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.navLink} onClick={() => setIsOpen(false)}>
                    Resume
                </a>
            </div>
        </nav>
    );
}
=======
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";
import { portfolioData } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let elem = e.currentTarget as HTMLAnchorElement;
        let section = elem.getAttribute("data-href");
        if (section) {
          const target = document.querySelector(section);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Ayush
        </a>
        <a
          href={`mailto:${portfolioData.personalInfo.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {portfolioData.personalInfo.email}
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
>>>>>>> 6ab735ec238023f051ba3eba1036b4c938f175ce
