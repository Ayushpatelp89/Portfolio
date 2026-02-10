import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const t1 = document.querySelector(".landing-h2-info");
  const t2 = document.querySelector(".landing-h2-info-1");
  const t3 = document.querySelector(".landing-h2-1");
  const t4 = document.querySelector(".landing-h2-2");

  // Initial state: Show first, hide second
  gsap.set([t2, t4], { opacity: 0 });
  gsap.set([t1, t3], { opacity: 1 });

  // Loop animation
  const loop = (el1: Element | null, el2: Element | null) => {
    if (!el1 || !el2) return;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    // Switch to el2
    tl.to(el1, { opacity: 0, duration: 0.8 })
      .to(el2, { opacity: 1, duration: 0.8 }, "<")
      // Switch back to el1
      .to(el1, { opacity: 1, duration: 0.8 }, "+=2")
      .to(el2, { opacity: 0, duration: 0.8 }, "<");
  };

  loop(t1, t2);
  loop(t3, t4);
}
