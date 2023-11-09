import Container from "./Container";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Brazil from "@/assets/brazil.svg";
import USA from "@/assets/usa.svg";
import LogoGhedyvan from "@/assets/GVlogo.svg";

export default function Header() {
  return (
      <div className="h-full mx-h-[100px] flex justify-between w-full py-6">
        <Image src={ LogoGhedyvan } alt="Logo" className="max-w-[70px]"/>
        <div className="flex ">
          <ul className="flex gap-12 items-center mr-24">
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
            <Link href={"./"} className="flex items-center">
              <Image src={Brazil} alt="Brazil logo" className="mr-2"/>
              <span>PT  /</span>
            </Link>
            <Link href={"./"} className="flex items-center ml-2">
              <Image src={USA} alt="USA logo" className="mr-2"/>
              <span>EN</span>
            </Link>
          </div>
        </div>
      </div>
  );
}
