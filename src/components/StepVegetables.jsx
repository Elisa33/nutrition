import { useFormContext } from "react-hook-form";

export default function StepFruits({ completeFormStep }) {
  const { register } = useFormContext();

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

  return (
    <section className="grid gap-2">
      <h2>Frutas</h2>
      <p className="text-gray-500">
        Por favor, tachar aquellas que NO consuma.
      </p>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-5 py-5 lista frutas">
        {/* Mapea la lista de frutas */}
        {vegetables.map((vegetable) => (
          <li key={vegetable} className="flex items-center gap-3">
            <input
              type="checkbox"
              id={vegetable}
              {...register(`frutas.${vegetable}`)}
              value={vegetable}
            />
            <label htmlFor={vegetable}>{vegetable}</label>
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
