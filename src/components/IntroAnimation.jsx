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
      // Animar un círculo que aparece desde la derecha y se expande
      .fromTo(
        circleRef.current,
        { x: "100%", scale: 0.5, opacity: 0 },
        { x: "0%", scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      )
      // Aparece el rectángulo desde la izquierda al mismo tiempo que el círculo
      .fromTo(
        rectRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
        "<"
      )
      // Ligeramente reduce la escala de ambas formas y las desvanece en 0.5 segundos
      .to(
        [circleRef.current, rectRef.current],
        { scale: 0.9, opacity: 0, duration: 0.5, ease: "power2.in" }
      )
      // Desaparece la capa completa de animación
      .to(fadeOutRef.current, { opacity: 0, duration: 0.5 }, "<");

    // Limpiar la animación al desmontar el componente
    return () => timeline.kill();
  }, []);

  return (
    <div
      ref={fadeOutRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      {/* Círculo */}
      <div
        ref={circleRef}
        className="w-24 h-24 bg-blue-500 rounded-full mx-2"
      ></div>
      {/* Rectángulo */}
      <div ref={rectRef} className="w-24 h-24 bg-green-500 mx-2"></div>
    </div>
  );
}
