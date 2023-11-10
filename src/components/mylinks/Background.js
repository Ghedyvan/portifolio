'use client'
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import backgroundVideo from "../../assets/mylinks/background2.mp4";

export default function Background() {

  useEffect(() => {
    gsap.fromTo(".video", { opacity: 0 }, { opacity: 1, duration: 1, delay: 4 });
  }, []);

  return (
    <div className="w-full h-[110vh] z-[-1] absolute video">
      <video playsinline autoPlay loop muted className="object-cover w-full h-full">
        <source src={ backgroundVideo } alt="Video background" type="video/mp4" />
      </video>
    </div>
  );
}
