import { useFormContext } from "react-hook-form";
import { useState } from "react";

export default function StepVegetables({ completeFormStep }) {
  const { register, setValue } = useFormContext();

  // Lista de vegetales
  const vegetables = [
    "albahaca",
    "alcaucil",
    "acelga",
    "achicoria",
    "apio",
    "arvejas",
    "batata",
    "berenjena",
    "berro",
    "brocoli",
    "brotesdesoja",
    "cebolla",
    "cebollaverdeo",
    "chauchas",
    "choclo",
    "coliflor",
    "endibia",
    "escarola",
    "esparragos",
    "espinaca",
    "habas",
    "hinojo",
    "lechuga",
    "mandioca",
    "morronrojo",
    "morronverde",
    "nabo",
    "pepino",
    "tomate",
    "palta",
    "papa",
    "palmitos",
    "puerro",
    "radicheta",
    "rabanito",
    "rabano",
    "remolacha",
    "repollitobruselas",
    "repollo",
    "rucula",
    "zanahoria",
    "zapallo",
    "zapallito",
  ];

  // Estado para controlar los vegetales seleccionados (true = consumido, false = no consumido)
  const [selectedVegetables, setSelectedVegetables] = useState(
    vegetables.reduce((acc, vegetable) => ({ ...acc, [vegetable]: true }), {})
  );

  const toggleVegetable = (vegetable) => {
    const newValue = !selectedVegetables[vegetable];
    setSelectedVegetables((prev) => ({ ...prev, [vegetable]: newValue }));
    setValue(`vegetales.${vegetable}`, newValue); // Actualiza el valor en el formulario
  };

  return (
    <section className="grid gap-4">
      <h2 className="text-lg font-semibold">Vegetales</h2>
      <p className="text-gray-500">
        Por favor, haga clic en los vegetales que NO consume.
      </p>

      <ul className="flex flex-wrap gap-4 text-center">
        {vegetables.map((vegetable) => (
          <li
            key={vegetable}
            className="bg-secondary-400 px-2 py-1 rounded-full"
          >
            <button
              type="button"
              onClick={() => toggleVegetable(vegetable)}
              className={`py-2 px-4 rounded-lg cursor-pointer ${
                selectedVegetables[vegetable]
                  ? "text-white"
                  : "line-through text-gray-400"
              }`}
            >
              {vegetable}
            </button>
            <input
              type="hidden"
              {...register(`vegetales.${vegetable}`)}
              value={selectedVegetables[vegetable]}
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
