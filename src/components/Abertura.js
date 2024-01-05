import { useState, useEffect } from "react";
import Image from "next/image";

export default function Abertura() {
    const [opacity, setOpacity] = useState(.4);
    const [opacity2, setOpacity2] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(1);
            setOpacity2(1);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(0);
            setOpacity2(0);
        }, 2100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="preto flex-col w-full h-screen bg-black absolute z-[999] flex justify-center items-center pointer-events-none overflow-y-hidden"
            style={{ opacity: opacity2, transition: "opacity 1.5s" }}
        >
            <Image src={"/logoWhite.svg"} alt="fotografia" width={250} height={250} className="" style={{ opacity, transition: "opacity 1.5s" }}/>
            <Image src={"/signarute.svg"} alt="assinatura" width={250} height={250} className="" style={{ opacity, transition: "opacity 1.5s" }}/>
        </div>
    );
}