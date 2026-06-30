import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface StepVegetablesProps {
  completeFormStep: () => void;
  goBack: () => void;
}

const vegetables: string[] = [
  "albahaca", "alcaucil", "acelga", "achicoria", "apio",
  "arvejas", "batata", "berenjena", "berro", "brócoli",
  "brotes de soja", "cebolla", "cebolla de verdeo", "chauchas",
  "choclo", "coliflor", "endibia", "escarola", "espárragos",
  "espinaca", "habas", "hinojo", "lechuga", "mandioca",
  "morrón rojo", "morrón verde", "nabo", "pepino", "tomate",
  "palta", "papa", "palmitos", "puerro", "radicheta",
  "rabanito", "rábano", "remolacha", "repollito de Bruselas",
  "repollo", "rúcula", "zanahoria", "zapallo", "zapallito",
];

type VegetableSelection = Record<string, boolean>;

export default function StepVegetables({ completeFormStep, goBack }: StepVegetablesProps) {
  const { register, setValue } = useFormContext();

  const [selectedVegetables, setSelectedVegetables] = useState<VegetableSelection>(
    vegetables.reduce((acc: VegetableSelection, vegetable: string) => ({ ...acc, [vegetable]: true }), {})
  );

  const toggleVegetable = (vegetable: string): void => {
    const newValue = !selectedVegetables[vegetable];
    setSelectedVegetables((prev) => ({ ...prev, [vegetable]: newValue }));
    setValue(`verduras.${vegetable.replace(/\s/g, "_")}`, newValue);
  };

  return (
    <section className="grid gap-4">
      <h2 className="text-white text-2xl font-semibold">Verduras</h2>
      <p className="text-white/70">
        Por favor, hacé clic en las verduras que <strong>NO</strong> consumas.
      </p>

      <ul className="flex flex-wrap gap-3 py-4">
        {vegetables.map((vegetable: string) => (
          <li key={vegetable} className="bg-secondary-400 px-1 py-1 rounded-full">
            <button
              type="button"
              onClick={() => toggleVegetable(vegetable)}
              className={`py-2 px-4 rounded-full cursor-pointer transition-all duration-200 text-sm ${
                selectedVegetables[vegetable]
                  ? "text-white hover:bg-secondary-500"
                  : "line-through text-white/40 hover:text-white/60"
              }`}
            >
              {vegetable}
            </button>
            <input
              type="hidden"
              {...register(`verduras.${vegetable.replace(/\s/g, "_")}`)}
              value={String(selectedVegetables[vegetable])}
            />
          </li>
        ))}
      </ul>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={goBack}
          className="py-2 px-6 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
        >
          Atrás
        </button>
        <button
          type="button"
          onClick={completeFormStep}
          className="py-2 px-6 bg-white text-secondary hover:bg-white/90 rounded-lg font-medium transition-colors"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}