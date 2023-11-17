import { useState } from "react";
import Link from "next/link";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";

export default function Navbar() {

    const [open,setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 90% 50px)",
            transition: {
                type: "spring",
                stiffness: 100,
            }
        },
        closed: {
            clipPath: "circle(0px at 90% 50px)",
            transition: {
                delay: .1,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }

    function burgerX() {
        const toggleButton = document.querySelector(".hamburger");
        toggleButton.classList.toggle("is-active");
    }


  return (
    <motion.div className="sidebar flex flex-col items-center bg-red-600 md:hidden" animate={open ? "open" : "closed"}>
      <motion.div className="absolute h-screen z-[999] bg-gradiente-hero mt-[108px] left-0 w-screen align-left sm:justify-start md:justify-center navbar" variants={ variants }>
        <ul className="flex flex-col gap-12">
          <li className="text-white text-2xl px-8 text-center">
            <Link href={"./"} className="py-8">
              Quem sou
            </Link>
          </li>
          <li className="text-white text-2xl px-8  text-center">
            <Link href={"./"} className="py-8">
              Cases
            </Link>
          </li>
          <li className="text-white text-2xl px-8 text-center">
            <Link href={"./"} className="py-8">
              Contato
            </Link>
          </li>
        </ul>
      </motion.div>
      <ToggleButton setOpen={ setOpen } />
    </motion.div>
  );
}
