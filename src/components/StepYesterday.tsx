import { useFormContext } from "react-hook-form";

interface StepYesterdayProps {
  goBack: () => void;
}

interface Meal {
  key: string;
  label: string;
}

const meals: Meal[] = [
  { key: "desayuno", label: "Desayuno" },
  { key: "colacion", label: "Colación" },
  { key: "almuerzo", label: "Almuerzo" },
  { key: "merienda", label: "Merienda" },
  { key: "colaciondos", label: "Colación" },
  { key: "cena", label: "Cena" },
  { key: "otras", label: "Otras" },
];

export default function StepYesterday({ goBack }: StepYesterdayProps) {
  const { register } = useFormContext();

  return (
    <section className="space-y-6">
      <h2 className="text-white text-2xl font-semibold">Recordatorio 24hs</h2>
      <p className="text-white/70">¿Qué comiste ayer?</p>

      <div className="space-y-6">
        {meals.map(({ key, label }: Meal) => (
          <div key={key} className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-medium">{label}</h4>
              <label className="flex items-center gap-2 text-white/60 text-sm">
                Hora:
                <input
                  className="w-20 p-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm text-center focus:outline-none focus:border-white/50 transition-colors"
                  type="text"
                  inputMode="numeric"
                  {...register(`dieta.${key}hora`)}
                  placeholder="08:00"
                />
              </label>
            </div>
            <input
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
              {...register(`dieta.${key}`)}
              placeholder={`¿Qué comiste en ${label.toLowerCase()}?`}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 pt-6">
        <button
          type="button"
          onClick={goBack}
          className="py-2.5 px-6 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
        >
          Atrás
        </button>
        <button
          type="submit"
          className="py-2.5 px-8 bg-primary hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-lg"
        >
          Enviar formulario
        </button>
      </div>
    </section>
  );
}