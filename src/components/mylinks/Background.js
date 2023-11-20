'use client'
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import backgroundVideo from "../../assets/mylinks/background2.mp4";

export default function Background() {

  // useEffect(() => {
  //   gsap.fromTo(".allblack", { opacity: 1 }, { opacity: .4, display: "none", duration: 1, delay: 4 });
  //   gsap.fromTo(".video", { opacity: 0 }, { opacity: 1, duration: 1, delay: 4 });
  // }, []);

  return (
    <>
    {/* <div className="w-full h-screen bg-black allblack">

    </div> */}
    <div className="w-full h-full z-[-1] video top-0 left-0 fixed">
      <video playsinline autoplay loop muted className="object-cover w-full h-full">
        <source src={ backgroundVideo } alt="Video background" type="video/mp4" />
      </video>
    </div>
    </>
    
  );
}
