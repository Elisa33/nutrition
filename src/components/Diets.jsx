import React from "react";
import Image from "next/image";
import dietData from "@/data/dietData";

const Services = () => {
  return (
    <div className="text-primary-100 wrapper flex flex-col items-center gap-10 py-20">
      <h2 className="text-complementary-300">
        Servicios para una Nutrición Personalizada
      </h2>
      <p>
        Descubre nuestros servicios diseñados para ayudarte a alcanzar tus
        objetivos de salud y bienestar. Desde planes de alimentación
        personalizados hasta consultas especializadas, cada servicio está
        pensado para brindarte el apoyo y la guía que necesitas en tu camino
        hacia un estilo de vida saludable.
      </p>
      <div className="grid grid-cols-3 gap-4 text-sm">
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
