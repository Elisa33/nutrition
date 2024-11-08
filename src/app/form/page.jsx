import Link from "next/link";

const Form = () => {
  return (
    <div className="text-white bg-gradient-to-b from-primary to-yellow min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen gap-8 p-16 wrapper">
        <h2 className="font-light text-center text-white">
          ¡Hola! Soy tu nutricionista, te pido por favor que completes el
          siguiente formulario
        </h2>
        <div className="w-1 h-1 p-2 bg-white rounded-full animate-bounce"></div>

        <Link href="/ficha">
          <div className="w-40 p-3 text-center bg-white border-2 border-white rounded-lg text-green hover:text-white hover:bg-transparent">
            Ficha Nutricional
          </div>
        </Link>

        <Link href="/pacientes">
          <div className="w-40 p-3 text-center bg-white border-2 border-white rounded-lg text-green hover:text-white hover:bg-green">
            Lista Pacientes
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Form;
