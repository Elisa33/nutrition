"use client"; // Esto asegura que el componente se renderice en el cliente, no en el servidor
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const About = () => {
  // Configuración de animación para cada párrafo
  const paragraphAnimation = {
    hidden: { opacity: 0.3, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Configuración de animación para el contenedor
  const containerAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // Esto asegura que los párrafos aparezcan de a uno
      },
    },
  };

  // Usamos el hook useInView para detectar cuando el contenedor "about" está visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Esto asegura que la animación solo se active una vez
    threshold: 0.5, // El 50% del elemento debe ser visible para activar la animación (puedes ajustar esto)
  });

  return (
    <div
      id="about"
      ref={ref} // Asignamos la referencia al div
      className="wrapper flex gap-10 flex-col md:flex-row py-12 lg:py-20"
    >
      <div className="relative md:w-1/3">
        <Image
          src="/about.png"
          alt="fruits and vegetables"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Activamos la animación solo cuando el elemento está en vista
        variants={containerAnimation} // Aplicamos la animación de contenedor
        className="md:w-2/3 text-secondary-200 space-y-6 py-4"
      >
        <motion.h4
          className="text-primary-400"
          variants={paragraphAnimation} // Animación para el h4
        >
          TU NUTRICIONISTA
        </motion.h4>
        <motion.h2
          className="text-secondary-400 font-semibold"
          variants={paragraphAnimation} // Animación para el h2
        >
          MARIEL MARTINEZ
        </motion.h2>

        <motion.p variants={paragraphAnimation}>
          Soy nutricionista egresada de la Universidad de Buenos Aires, con más
          de 8 años de experiencia en{" "}
          <span className="text-primary-400">
            asesoría alimentaria y bienestar integral
          </span>
          . Mi pasión por la nutrición nace del deseo de ayudar a las personas a
          reconectarse con su cuerpo, logrando una relación saludable con la
          comida, basada en la educación y el equilibrio.
        </motion.p>

        <motion.p variants={paragraphAnimation}>
          Mi formación abarca tanto la nutrición clínica como el apoyo
          personalizado en áreas como el control de peso, la salud metabólica y
          la nutrición deportiva. Mi enfoque se basa en escuchar a cada paciente
          y{" "}
          <span className="text-primary-400">
            comprender sus necesidades, desafíos y objetivos individuales
          </span>
          .
        </motion.p>

        <motion.p variants={paragraphAnimation}>
          A partir de esta base, desarrollo{" "}
          <span className="text-primary-400">
            planes de alimentación personalizados
          </span>{" "}
          que no solo tienen en cuenta el aspecto físico, sino también el mental
          y emocional, ya que creo que una buena nutrición es el primer paso
          hacia un bienestar integral y sostenible. Trabajo para que cada
          persona logre encontrar su mejor versión y mantenga esos resultados en
          el tiempo.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
