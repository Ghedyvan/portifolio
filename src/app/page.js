import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import Cards from "@/components/Cards";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <div>
      <div className="bg-gradiente-header">
        <div className="w-full max-w-[1246px] px-[15px] mx-auto flex items-center">
          <Header />
        </div>
        <Hero />
        <Badge />
      </div>
      <div className="bg-white">
        <div className="w-full max-w-[1246px] px-[15px] mx-auto flex items-center">
          <Cards />
        </div>
      </div>
      <div className="w-full max-w-[1246px] px-[15px] mx-auto flex items-center">
        <Rodape />
      </div>
     
    </div>
  );
}
