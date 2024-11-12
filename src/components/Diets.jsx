import React from "react";
import Image from "next/image";
import dietData from "@/data/dietData";

const Services = () => {
  return (
    <div className="text-primary-100 wrapper flex flex-col items-center gap-10 py-12 lg:py-20">
      <h2 className="text-complementary-300">Descubre las dietas</h2>
      <p>
        Cada persona es única, y tu alimentación debería reflejar esa
        individualidad. Conoce nuestros planes nutricionales, cuidadosamente
        diseñados para ayudarte a alcanzar tus objetivos de salud y bienestar.
        Desde dietas enfocadas en mejorar la salud metabólica, hasta aquellas
        que priorizan la energía o el control de peso, aquí encontrarás el
        acompañamiento adecuado para lograr una relación equilibrada y positiva
        con la comida. Explora las opciones y encuentra la dieta que mejor se
        adapta a tus necesidades y estilo de vida.
      </p>
      <div className="grid lg:grid-cols-3 gap-4 text-sm">
        {dietData.map((diet) => (
          <div key={diet.id} className="flex flex-col gap-4 items-center p-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={diet.image}
                alt="plato de comida"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3>{diet.title}</h3>
            <p>{diet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
