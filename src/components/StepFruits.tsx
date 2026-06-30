import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface StepFruitsProps {
  completeFormStep: () => void;
  goBack: () => void;
}

const fruits: string[] = [
  "ananá", "arándanos", "banana", "cereza", "ciruela",
  "damasco", "durazno", "frambuesa", "frutillas", "guinda",
  "higo", "kiwi", "limón", "mandarina", "mango",
  "mamón", "manzana", "pera", "sandía", "uva",
];

type FruitSelection = Record<string, boolean>;

export default function StepFruits({ completeFormStep, goBack }: StepFruitsProps) {
  const { register, setValue } = useFormContext();

  const [selectedFruits, setSelectedFruits] = useState<FruitSelection>(
    fruits.reduce((acc: FruitSelection, fruit: string) => ({ ...acc, [fruit]: true }), {})
  );

  const toggleFruit = (fruit: string): void => {
    const newValue = !selectedFruits[fruit];
    setSelectedFruits((prev) => ({ ...prev, [fruit]: newValue }));
    setValue(`frutas.${fruit}`, newValue);
  };

  return (
    <section className="grid gap-4">
      <h2 className="text-white text-2xl font-semibold">Frutas</h2>
      <p className="text-white/70">
        Por favor, hacé clic en las frutas que <strong>NO</strong> consumas.
      </p>

      <ul className="flex flex-wrap gap-3 py-4">
        {fruits.map((fruit: string) => (
          <li key={fruit} className="bg-black_bean-700 px-1 py-1 rounded-full">
            <button
              type="button"
              onClick={() => toggleFruit(fruit)}
              className={`py-2 px-4 rounded-full cursor-pointer transition-all duration-200 text-sm ${
                selectedFruits[fruit]
                  ? "text-white hover:bg-black_bean-600"
                  : "line-through text-white/40 hover:text-white/60"
              }`}
            >
              {fruit}
            </button>
            <input
              type="hidden"
              {...register(`frutas.${fruit}`)}
              value={String(selectedFruits[fruit])}
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