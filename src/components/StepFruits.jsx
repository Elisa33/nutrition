import { useFormContext } from "react-hook-form";
import { useState } from "react";

export default function StepFruits({ completeFormStep }) {
  const { register, setValue } = useFormContext();

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

  // Estado para controlar las frutas seleccionadas (false significa tachado/no consumido)
  const [selectedFruits, setSelectedFruits] = useState(
    fruits.reduce((acc, fruit) => ({ ...acc, [fruit]: true }), {})
  );

  const toggleFruit = (fruit) => {
    const newValue = !selectedFruits[fruit];
    setSelectedFruits((prev) => ({ ...prev, [fruit]: newValue }));
    setValue(`frutas.${fruit}`, newValue); // Cambia el valor en el formulario
  };

  return (
    <section className="grid gap-4">
      <h2 className="text-lg font-semibold">Frutas</h2>
      <p className="text-gray-500">
        Por favor, haga clic en las frutas que NO consume.
      </p>

      <ul className="flex flex-wrap gap-4 text-center">
        {fruits.map((fruit) => (
          <li key={fruit} className="bg-black_bean-700 px-2 py-1 rounded-full">
            <button
              type="button"
              onClick={() => toggleFruit(fruit)}
              className={`py-2 px-4 rounded-lg cursor-pointer ${
                selectedFruits[fruit] ? "text-white" : "line-through"
              }`}
            >
              {fruit}
            </button>
            <input
              type="hidden"
              {...register(`frutas.${fruit}`)}
              value={selectedFruits[fruit]}
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={completeFormStep}
        className="py-2 px-4 bg-primary text-white rounded-lg mt-4"
      >
        Siguiente
      </button>
    </section>
  );
}
