"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import ArrowRight from "@/assets/arrowRight.svg";
import Image from "next/image";
import WillFoto from "@/assets/willFoto.png";
import WillFoto2 from "@/assets/willFoto2.png";
import WillFoto3 from "@/assets/willFoto3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <div className="bg-gradiente-hero h-[897px] w-full s">
      <div className="w-full max-w-[1246px] px-[15px] mx-auto flex justify-between">
        <div className="w-full max-w-[645px] mt-[204px] bg-red">
          <p className="text-[14px] text-neutral-400 font-normal leading-tight mb-6">
            Hi, I am{" "}
            <span className="text-base font-semibold text-white">
              Ghedyvan Vinícius 👋🏻
            </span>
          </p>
          <h1 className="text-neutral-100 text-[64px] font-semibold leading-[76.80px] mb-4">
            Entusiasta de Desenvolvimento Front-end
          </h1>
          <p className="w-full max-w-[520px] text-neutral-400 text-lg mb-[72px]">
            Venho estudando e construindo diversos projetos front-end, desde
            sistemas completos com HTML, CSS e JS puros a páginas com React e
            Next.js. Essa experiência prática vem me permitindo desenvolver
            habilidades que ajudam a criar soluções eficientes e eficazes.
          </p>
          <Link className="flex text-white" href={"./contato"}>
            Comece um projeto{" "}
            <Image src={ArrowRight} alt="Seta direita" className="ml-4" />
          </Link>
        </div>
        <div className="mt-[112px] max-w-[520px] overflow-hidden">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[
              Navigation,
              Autoplay,
              EffectCreative,
              Pagination,
              EffectFade,
            ]}
            className="mySwiper max-w-[520px]"
          >
            <SwiperSlide className="mySwiper max-w-[520px]">
              <Image src={WillFoto} className="cover" alt="Foto Will Moreira" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper max-w-[520px]">
              <Image
                src={WillFoto2}
                className="cover"
                alt="Foto Will Moreira"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper max-w-[520px]">
              <Image
                src={WillFoto3}
                className="cover"
                alt="Foto Will Moreira"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
