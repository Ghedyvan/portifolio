import Image from "next/image";
import Link from "next/link";
import Brazil from "@/assets/brazil.svg";
import USA from "@/assets/usa.svg";
import LogoGhedyvan from "@/assets/GVlogo.svg";
import "./hamburger.css";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";

export default function Header() {
  const mobileBar = useRef();
  const [hamburger, setClass] = useState(
    "a hamburger hamburger--collapse opacity-80 md:!hidden"
  );
  const [navbar, setClasse] = useState(
    "absolute z-[999] hidden bg-gradiente-hero h-full mt-[108px] left-0 w-full align-left sm:justify-start md:justify-center navbar"
  );
  const adicionarClasse = () => {
    if (navbar.includes("hidden")) {
      setClasse(navbar.replace("hidden", "flex"));
      setClass(hamburger.replace("a", "is-active"));

      gsap.fromTo(
        ".navbar",
        { direction: "up", opacity: 0 },
        { y: 0, duration: .3, opacity: 1 }
      );
    } else {
      setClass(hamburger.replace("is-active", "a"));
      gsap.fromTo(
        ".navbar",
        { y: 0 },
        { direction: "down", y: 500, duration: .7, opacity: 0 }
      );
      setTimeout(() => {
        setClasse(navbar.replace("flex", " hidden"));
      }, 1000);
    }
  };

  return (
    <div className="h-full relative mx-h-[100px] flex justify-between w-full py-6">
      <Image src={LogoGhedyvan} alt="Logo" className="max-w-[70px] ml-[15px]" />
      <div className="hidden md:flex">
        <ul className="flex gap-12 items-center mr-24 lg:text-lg text-white">
          <li>
            <Link href={"./"}>Quem sou</Link>
          </li>
          <li>
            <Link href={"./"}>Cases</Link>
          </li>
          <li>
            <Link href={"./"}>Contato</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Link href={"./"} className="flex items-center text-white">
            <Image src={Brazil} alt="Brazil logo" className="mr-2" />
            <span>PT /</span>
          </Link>
          <Link href={"./"} className="flex items-center ml-2 text-white">
            <Image src={USA} alt="USA logo" className="mr-2" />
            <span>EN</span>
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
