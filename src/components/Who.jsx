import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Who = () => {
  // Refs for each paragraph
  const paragraphRefs = useRef([]);

  // Add a function to push refs into the array
  const addToRefs = (el) => {
    if (el && !paragraphRefs.current.includes(el)) {
      paragraphRefs.current.push(el);
    }
  };

  // Animations with GSAP
  useEffect(() => {
    gsap.from(paragraphRefs.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="wrapper flex gap-10 flex-col md:flex-row py-12 lg:py-20">
      <div className="relative md:w-1/3">
        <Image
          src="/who.png"
          alt="fruits and vegetables"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="md:w-2/3 text-secondary-200 space-y-6 py-4">
        <h4 className="text-primary-400">TU NUTRICIONISTA</h4>
        <h2 className="text-secondary-400 font-semibold">MARIEL MARTINEZ</h2>

        <p ref={addToRefs}>
          Soy nutricionista egresada de la Universidad de Buenos Aires, con más
          de 8 años de experiencia en{" "}
          <span className="text-primary-400">
            asesoría alimentaria y bienestar integral
          </span>
          . Mi pasión por la nutrición nace del deseo de ayudar a las personas a
          reconectarse con su cuerpo, logrando una relación saludable con la
          comida, basada en la educación y el equilibrio.
        </p>
        <p ref={addToRefs}>
          Mi formación abarca tanto la nutrición clínica como el apoyo
          personalizado en áreas como el control de peso, la salud metabólica y
          la nutrición deportiva. Mi enfoque se basa en escuchar a cada paciente
          y{" "}
          <span className="text-primary-400">
            comprender sus necesidades, desafíos y objetivos individuales
          </span>
          .
        </p>
        <p ref={addToRefs}>
          A partir de esta base, desarrollo{" "}
          <span className="text-primary-400">
            planes de alimentación personalizados
          </span>{" "}
          que no solo tienen en cuenta el aspecto físico, sino también el mental
          y emocional, ya que creo que una buena nutrición es el primer paso
          hacia un bienestar integral y sostenible. Trabajo para que cada
          persona logre encontrar su mejor versión y mantenga esos resultados en
          el tiempo.
        </p>
      </div>
    </div>
  );
};

export default Who;
