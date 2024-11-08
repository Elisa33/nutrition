
"use client"; 

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function IntroAnimation() {
  const circleRef = useRef(null);
  const rectRef = useRef(null);
  const fadeOutRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
    .fromTo(
      circleRef.current,
      { x: "100%", scale: 0.5, opacity: 0 },
      { x: "0%", scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      rectRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
      "<"
    )
    // Remueve el fondo antes de desvanecerse
    .to(fadeOutRef.current, { backgroundColor: "transparent", duration: 0.1 }, "<")
    // Desvanece todo el contenedor
   // .to(fadeOutRef.current, { opacity: 0, duration: 0.5 }, "<");
  
    // Limpiar la animación al desmontar el componente
    return () => timeline.kill();
  }, []);

  return (
    <div
      ref={fadeOutRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-complementary"
    >
      {/* Círculo */}
      <div
        ref={circleRef}
        className="w-96 h-96 bg-secondary rounded-full mx-2"
      ></div>
      {/* Rectángulo */}
      <div ref={rectRef} className="w-96 h-96 rounded bg-secondary mx-2"></div>
    </div>
  );
}
