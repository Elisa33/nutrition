import React from "react";

const Services = () => {
  return (
    <div className="text-primary-100 wrapper flex flex-col items-center gap-10 py-20">
      <h2 className="text-complementary-300">
        Servicios para una Nutrición Personalizada
      </h2>
      <p className="text-center text-sm">
        Descubre nuestros servicios diseñados para ayudarte a alcanzar tus
        objetivos de salud y bienestar. Desde planes de alimentación
        personalizados hasta consultas especializadas, cada servicio está
        pensado para brindarte el apoyo y la guía que necesitas en tu camino
        hacia un estilo de vida saludable.
      </p>
      <div className="grid grid-cols-3 gap-4 text-sm text-center">
        <div className="flex flex-col gap-8 items-center bg-primary-500 px-4 py-6">
          <h3 className="text-7xl font-lora font-semibold">01</h3>

          <p>
            Asesoramiento Nutricional Personalizado: Evaluación individual y
            diseño de planes específicos.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center bg-primary-500 px-4 py-6">
          <h3 className="text-7xl font-lora font-semibold">02</h3>

          <p>
            Educación Nutricional para Grupos: Talleres o clases para empresas,
            colegios o grupos deportivos.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center bg-primary-500 px-4 py-6">
          <h3 className="text-7xl font-lora font-semibold">03</h3>

          <p>
            Control Nutricional para Deportistas: Planes de alimentación
            específicos para rendimiento deportivo, optimización de energía y
            recuperación
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
