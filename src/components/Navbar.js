import { useState } from "react";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 90% 0px)",
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      clipPath: "circle(0px at 90% 0px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const scrollToCases = () => {
    const casesSection = document.getElementById("cases");
    casesSection.scrollIntoView({ behavior: "smooth" });
    handleClick();
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("aboutMe");
    const aboutMeSectionTop = aboutMeSection.offsetTop - 130;
    window.scrollTo({ top: aboutMeSectionTop, behavior: "smooth" });
    handleClick();
  };

  const scrollToContato = () => {
    const contatoSection = document.getElementById("contato");
    contatoSection.scrollIntoView({ behavior: "smooth" });
    handleClick();
  };

  const burgerX = () => {
    const toggleButton = document.querySelector(".hamburger");
    toggleButton.classList.toggle("is-active");
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
    burgerX();
  };

  return (
    <motion.div
      className="sidebar flex flex-col items-center md:hidden"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="absolute h-screen z-[999] bg-gradiente-hero mt-[108px] left-0 w-screen align-left sm:justify-start md:justify-center navbar"
        variants={variants}
      >
        <ul className="flex flex-col gap-12">
          <li className="text-white text-2xl px-8 text-center">
            <button onClick={scrollToAboutMe}>Quem sou</button>
          </li>
          <li className="text-white text-2xl px-8  text-center">
            <button onClick={scrollToCases}>Cases</button>
          </li>
          <li className="text-white text-2xl px-8 text-center">
            <button onClick={scrollToContato}>Contato</button>
          </li>
        </ul>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
