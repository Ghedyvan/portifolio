import Image from "next/image";
import Icon from "@/assets/logo.svg";
import WillFoto from "@/assets/willFoto.png";
import WillFoto2 from "@/assets/willFoto2.png";
import WillFoto3 from "@/assets/willFoto3.png";
import Icon1 from "@/assets/social/atom.svg";
import Icon2 from "@/assets/Icons/Programing/programming.svg";
import Icon3 from "@/assets/Icons/Programing/monitor.svg";
import Icon4 from "@/assets/Icons/essential/code.svg";
import NextIcon from "@/assets/next.svg";
import Sass from "@/assets/sass.svg";
import Tailwind from "@/assets/tailwind.svg";
import ReactIcon from "@/assets/react.svg";
import Marquee from "react-fast-marquee";
import CardMarquee from "./CardMarquee";


export default function Badge() {
    return (
        <div className="h-[112px] w-full bg-badge-blue">
            <div className="marquee max-w-[1246px] h-full mx-auto flex items-center overflow-hidden">
                <Marquee gradient gradientColor="rgba(101, 61, 245, 1)" >
                    <CardMarquee image={ ReactIcon } word="ReactJs" />
                    <CardMarquee image={ Icon2 } word="Desenvolvedor front end" />
                    <CardMarquee image={ Icon3 } word="Design responsivo" />
                    <CardMarquee image={ Icon4 } word="GSAP" />
                    <CardMarquee image={ Sass } word="SASS" />
                    <CardMarquee image={ Tailwind } word="Tailwind" />
                    <CardMarquee image={ NextIcon } word="NextJS" />
                </Marquee>
            </div>
        </div>
    );
}
