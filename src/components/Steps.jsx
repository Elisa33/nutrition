import React from "react";
import Link from "next/link";

const Steps = () => {
  return (
    <div className="text-primary-100 wrapper flex flex-col items-center gap-10 py-12 lg:py-20">
      <h2 className="text-complementary-300">
        Tu Plan de Nutrición en Cuatro Pasos
      </h2>
      <div className="grid lg:grid-cols-4 gap-4 text-sm py-10">
        <div className="flex flex-col gap-8 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 text-complementary-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <p>
            Inicia completando un formulario detallado sobre tus hábitos,
            preferencias, peso actual y metas personales. Esta información será
            clave para conocer tu perfil y preparar un plan adecuado.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 text-complementary-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>

          <p>
            Tras enviar el formulario, puedes programar tu primera consulta de
            evaluación, disponible en modalidad online o presencial, según tu
            conveniencia.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 text-complementary-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
            />
          </svg>
          <p>
            En la primera consulta, realizaremos una evaluación completa para
            entender tus necesidades, definir objetivos y elaborar un plan
            personalizado que se adapte a ti.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 text-complementary-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          <p>
            Seguiremos de cerca tus avances con ajustes en el plan, reuniones
            periódicas y apoyo continuo, asegurándonos de que avances hacia tus
            metas de manera saludable.
          </p>
        </div>
      </div>
      <Link
        href="/form"
        className="bg-complementary-500 hover:bg-complementary-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
      >
        ¡Comienza hoy!
      </Link>
    </div>
  );
};

export default Steps;
