"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Indica que el componente se ha montado en el cliente
  }, []);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(line1Ref.current, {
        x: 300,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })
      .from(
        line2Ref.current,
        { x: -300, opacity: 0, duration: 1.5, ease: "power3.out" },
        "-=0.8"
      );
  }, []);

  return (
    <header className="relative w-full min-h-screen md:h-full xl:h-[450px] text-white flex items-center">
      <Navbar />

      <picture className="relative w-full h-full block">
        <source media="(min-width: 1024px)" srcSet="/header-desktop.jpg" />
        <source media="(min-width: 768px)" srcSet="/header-tablet.jpg" />
        <Image
          src="/header-mobile.jpg"
          alt="Header background image"
          fill
          className="object-cover top"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
        />
      </picture>
      <div className="absolute inset-0 w-full wrapper-wide mx-auto z-20 h-full flex flex-col">
        <div className="relative gap-5 lg:gap-3 flex flex-col pt-20 items-center justify-center h-3/6 lg:h-5/6 rounded-sm text-white bg-white/70 my-20 mx-10 text-center">
          <h1 className="text-center text-4xl md:text-6xl font-bold text-primary font-lora">
            <span ref={line1Ref} className="block">
              Transforma tu salud
            </span>
            <span ref={line2Ref} className="block lg:mt-4">
              con inteligencia nutricional
            </span>
          </h1>
          <h3 className="text-complementary-300 font-medium">
            Descubre un enfoque nutricional integral que te acompaña en cada
            etapa de tu vida.
          </h3>
          <Link href="#contact" scroll={false}>
            <p className="bg-complementary px-4 py-1.5 md:mt-8 animate-bounced rounded-md uppercase">
              <span className="text-sm text-white">agenda tu consulta</span>
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}
