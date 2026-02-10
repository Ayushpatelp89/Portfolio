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
