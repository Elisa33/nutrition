import { useFormContext } from "react-hook-form";

interface StepFoodProps {
  completeFormStep: () => void;
  goBack: () => void;
}

interface FoodCategory {
  title: string;
  key: string;
  items: string[];
  labels: string[];
}

const foodCategories: FoodCategory[] = [
  {
    title: "Infusiones",
    key: "infusiones",
    items: ["cafe", "mate", "mate_cocido", "malta", "otros"],
    labels: ["café", "mate", "mate cocido", "malta", "otros"],
  },
  {
    title: "Lácteos",
    key: "lacteos",
    items: ["leche", "yogurt", "queso", "huevos", "ricota"],
    labels: ["leche", "yogurt", "queso", "huevos", "ricota"],
  },
  {
    title: "Carnes",
    key: "carnes",
    items: ["pollo", "pescado", "vaca", "cerdo"],
    labels: ["pollo", "pescado", "vaca", "cerdo"],
  },
  {
    title: "Pan y galletitas",
    key: "panes",
    items: ["pan_blanco", "pan_salvado", "galletitas_agua", "galletitas_sinsal", "galletitas_dulces", "galletitas_arroz"],
    labels: ["pan blanco", "pan de salvado", "galletitas de agua", "galletitas sin sal", "galletitas dulces", "galletitas de arroz"],
  },
  {
    title: "Semillas",
    key: "semillas",
    items: ["chia", "sesamo", "girasol", "amaranto", "lino", "amapola", "zapallo", "otras"],
    labels: ["chia", "sésamo", "girasol", "amaranto", "lino", "amapola", "zapallo", "otras"],
  },
  {
    title: "Frutas secas",
    key: "frutossecos",
    items: ["nuez", "almendra", "castana", "pistacho", "avellana", "pasas_uva", "pasas_arandano", "banana_chips", "jengibre_chips", "mani", "otros"],
    labels: ["nuez", "almendra", "castaña", "pistacho", "avellana", "pasas de uva", "pasas de arándano", "banana chips", "jengibre chips", "maní", "otros"],
  },
  {
    title: "Legumbres / Derivados",
    key: "legumbres",
    items: ["soja", "lentejas", "garbanzos", "porotos", "otros"],
    labels: ["soja", "lentejas", "garbanzos", "porotos", "otros"],
  },
];

export default function StepFood({ completeFormStep, goBack }: StepFoodProps) {
  const { register, watch } = useFormContext();

  const isChecked = (section: string, item: string): boolean => watch(`${section}.${item}`);

  return (
    <section className="grid gap-6">
      <h2 className="text-white text-2xl font-semibold">Alimentos</h2>
      <p className="text-white/70">
        A continuación, marcá todo aquello que consumís y que no te
        molestaría que forme parte de tu plan de alimentación.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {foodCategories.map(({ title, key, items, labels }: FoodCategory) => (
          <div key={key} className="space-y-3 py-4">
            <h3 className="text-white font-medium text-lg border-b border-white/20 pb-2">
              {title}
            </h3>
            <div className="space-y-2">
              {items.map((item: string, i: number) => (
                <div key={item} className="flex items-center">
                  <input
                    id={`${key}_${item}`}
                    type="checkbox"
                    {...register(`${key}.${item}`)}
                    className="w-5 h-5 rounded-full border-gray-700 text-secondary-400 focus:ring-secondary-400
                      checked:bg-secondary-400 checked:border-secondary-400 checked:text-white
                      appearance-none border transition-colors cursor-pointer"
                  />
                  <label
                    htmlFor={`${key}_${item}`}
                    className="ml-2 cursor-pointer flex items-center"
                  >
                    {isChecked(key, item) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    )}
                    <span className="ml-2 text-white/90 text-sm">{labels[i]}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <label className="w-full space-y-2 pt-2">
        <span className="text-white/80 text-sm">Comentarios</span>
        <input
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
          {...register("comentariosalimentos")}
          placeholder="Algún comentario sobre tus preferencias..."
        />
      </label>

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