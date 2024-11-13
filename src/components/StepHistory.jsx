import { useFormContext } from "react-hook-form";

export default function StepHistory({ completeFormStep }) {
  const { register, watch } = useFormContext();

  // Preguntas a mapear
  const questions = [
    { name: "suplementos", label: "¿Consume suplementos?" },
    { name: "dieta", label: "¿Realiza alguna dieta?" },
    { name: "fuera", label: "¿Come fuera del hogar?" },
    {
      name: "metabolica",
      label: "¿Tiene alguna enfermedad metabólica de base?",
    },
    { name: "alergias", label: "¿Alergias alimentarias?" },
    { name: "lactosa", label: "¿Intolerancia a la lactosa?" },
    { name: "irritable", label: "¿Colon Irritable?" },
    { name: "estrenimiento", label: "¿Estreñimiento?" },
    { name: "intolerancia", label: "¿Intolerancia alimentaria?" },
    { name: "vesicula", label: "¿Alteraciones de la vesícula biliar?" },
    { name: "diverticulos", label: "¿Tiene o tuvo divertículos?" },
    { name: "renal", label: "¿Enfermedad renal?" },
    { name: "medicacion", label: "¿Toma medicación?", specifyLabel: "¿Cuál?" },
    { name: "anticonceptivos", label: "¿Toma anticonceptivos?" },
  ];

  return (
    <section className="grid lg:grid-cols-2 gap-8">
      <h2 className="col-span-2">Historia Clínica</h2>
      <p className="col-span-2">Marca solamente si la respuesta es SI</p>

      {questions.map(({ name, label, specifyLabel }) => (
        <div key={name}>
          <label className="space-y-4">
            <span>{label}</span>
            <div className="flex items-center gap-2">
              <input
                className="radio__toggle"
                type="checkbox"
                {...register(`hc.${name}`)}
              />
              <span>Si</span>
            </div>
          </label>

          {watch(`hc.${name}`) && (
            <label className="w-full">
              {specifyLabel || "Especificar"}
              <input className="bottom-line" {...register(`hc.texto${name}`)} />
            </label>
          )}
        </div>
      ))}

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
