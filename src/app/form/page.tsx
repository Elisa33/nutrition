import Link from "next/link";

export default function Form() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-400 via-primary to-secondary text-white flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center space-y-8 p-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-lora leading-tight">
          ¡Hola! Soy tu nutricionista
        </h2>
        <p className="text-white/80 text-lg leading-relaxed">
          Te pido por favor que completes el siguiente formulario para poder conocerte mejor y prepararte un plan adecuado a tus necesidades.
        </p>
        <div className="w-3 h-3 mx-auto bg-white/40 rounded-full animate-bounce" />
        <Link
          href="/ficha"
          className="inline-block bg-white text-primary hover:bg-white/90 font-semibold py-3 px-10 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Empezar
        </Link>
        <p className="text-white/50 text-sm pt-4">
          Tardarás aproximadamente 5-10 minutos
        </p>
      </div>
    </div>
  );
}