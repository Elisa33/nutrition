import { useFormContext } from "react-hook-form";

interface StepHistoryProps {
  completeFormStep: () => void;
  goBack: () => void;
}

interface HistoryQuestion {
  name: string;
  label: string;
  specifyLabel?: string;
}

const questions: HistoryQuestion[] = [
  { name: "suplementos", label: "¿Consume suplementos?" },
  { name: "dieta", label: "¿Realiza alguna dieta?" },
  { name: "fuera", label: "¿Come fuera del hogar?" },
  { name: "metabolica", label: "¿Tiene alguna enfermedad metabólica de base?" },
  { name: "alergias", label: "¿Alergias alimentarias?" },
  { name: "lactosa", label: "¿Intolerancia a la lactosa?" },
  { name: "irritable", label: "¿Colon irritable?" },
  { name: "estrenimiento", label: "¿Estreñimiento?" },
  { name: "intolerancia", label: "¿Intolerancia alimentaria?" },
  { name: "vesicula", label: "¿Alteraciones de la vesícula biliar?" },
  { name: "diverticulos", label: "¿Tiene o tuvo divertículos?" },
  { name: "renal", label: "¿Enfermedad renal?" },
  { name: "medicacion", label: "¿Toma medicación?", specifyLabel: "¿Cuál?" },
  { name: "anticonceptivos", label: "¿Toma anticonceptivos?" },
];

export default function StepHistory({ completeFormStep, goBack }: StepHistoryProps) {
  const { register, watch } = useFormContext();

  return (
    <section className="grid lg:grid-cols-2 gap-6">
      <h2 className="col-span-2 text-white text-2xl font-semibold">Historia clínica</h2>
      <p className="col-span-2 text-white/70">Marca solamente si la respuesta es SÍ</p>

      {questions.map(({ name, label, specifyLabel }: HistoryQuestion) => (
        <div key={name} className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register(`hc.${name}`)}
              className="w-4 h-4 accent-primary rounded"
            />
            <span className="text-white/90 text-sm">{label}</span>
          </label>

          {watch(`hc.${name}`) && (
            <label className="block w-full pl-7">
              <span className="text-white/60 text-xs">{specifyLabel || "Especificar"}</span>
              <input
                className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors mt-1"
                {...register(`hc.texto${name}`)}
                placeholder={specifyLabel || "Especificar..."}
              />
            </label>
          )}
        </div>
      ))}

      <div className="col-span-2 flex gap-3 pt-4">
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