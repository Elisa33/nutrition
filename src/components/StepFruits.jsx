import { useFormContext } from "react-hook-form";

export default function StepFruits({ completeFormStep }) {
  const { register } = useFormContext();

  // Lista de frutas
  const fruits = [
    "ananá",
    "arándanos",
    "banana",
    "cereza",
    "ciruela",
    "damasco",
    "durazno",
    "frambuesa",
    "frutillas",
    "guinda",
    "higo",
    "kiwi",
    "limón",
    "mandarina",
    "mango",
    "mamón",
    "manzana",
    "pera",
    "sandía",
    "uva",
  ];

  return (
    <section className="grid gap-2">
      <h2>Frutas</h2>
      <p className="text-gray-500">
        Por favor, tachar aquellas que NO consuma.
      </p>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-5 py-5 lista frutas">
        {/* Mapea la lista de frutas */}
        {fruits.map((fruit) => (
          <li key={fruit} className="flex items-center gap-3">
            <input
              type="checkbox"
              id={fruit}
              {...register(`frutas.${fruit}`)}
              value={fruit}
            />
            <label htmlFor={fruit}>{fruit}</label>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={completeFormStep}
        className="py-2 px-4 bg-primary text-white rounded-lg"
      >
        Siguiente
      </button>
    </section>
  );
}
