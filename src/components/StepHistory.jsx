import { useFormContext } from "react-hook-form";

export default function StepHistory({ completeFormStep }) {
  const { register, watch } = useFormContext();

  return (
    <section className="grid lg:grid-cols-2 gap-8">
      <h2 className="col-span-2">Historia Clínica</h2>
      <label className="flex items-center gap-4">
        <span>¿Consume suplementos?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.suplementos")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.suplementos") && (
        <label className="w-full">
          Especificar
          <input className="bottom-line" {...register("hc.textosuplementos")} />
        </label>
      )}

      <label className="flex items-center gap-4">
        <span>¿Realiza alguna dieta?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.dieta")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.dieta") && (
        <label className="w-full">
          Especificar
          <input className="bottom-line" {...register("hc.textodieta")} />
        </label>
      )}

      <label className="flex items-center gap-4">
        <span>¿Come fuera del hogar?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.fuera")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.fuera") && (
        <label className="w-full">
          Especificar
          <input className="bottom-line" {...register("hc.textofuera")} />
        </label>
      )}

      <label className="flex items-center gap-4">
        <span>¿Tiene alguna enfermedad metabólica de base?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.metabolica")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.metabolica") && (
        <label className="w-full">
          Especificar
          <input className="bottom-line" {...register("hc.textometabolica")} />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Alergias alimentarias?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.alergias")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.alergias") && (
        <label className="w-full">
          Especificar
          <input className="bottom-line" {...register("hc.textoalergias")} />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Intolerancia a la lactosa?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.lactosa")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.lactosa") && (
        <label className="w-full">
          Especificar
          <input className="bottom-line" {...register("hc.textolactosa")} />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Colon Irritable?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.irritable")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.irritable") && (
        <label className="w-full">
          Especificar
          <input className="bottom-line" {...register("hc.textoirritable")} />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Estreñimiento?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.estrenimiento")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.estrenimiento") && (
        <label className="w-full">
          Especificar
          <input
            className="bottom-line"
            {...register("hc.textoestrenimiento")}
          />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Intolerancia alimentaria?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.intolerancia")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.intolerancia") && (
        <label className="w-full">
          Especificar
          <input
            className="bottom-line"
            {...register("hc.textointolerancia")}
          />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Alteraciones de la vesícula biliar?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.vesicula")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.vesicula") && (
        <label className="w-full">
          Especificar
          <input className="bottom-line" {...register("hc.textovesicula")} />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Tiene o tuvo divertículos?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.diverticulos")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.diverticulos") && (
        <label className="w-full">
          Especificar
          <input
            className="bottom-line"
            {...register("hc.textodiverticulos")}
          />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Enfermedad renal?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.renal")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.renal") && (
        <label className="w-full">
          Especificar
          <input className="bottom-line" {...register("hc.textorenal")} />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Toma medicación?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            type="checkbox"
            {...register("hc.medicacion")}
          />
          <span>Si</span>
        </div>
      </label>

      {watch("hc.medicacion") && (
        <label className="w-full">
          ¿Cuál?
          <input className="bottom-line" {...register("hc.textomedicacion")} />
        </label>
      )}
      <label className="flex items-center gap-4">
        <span>¿Toma anticonceptivos?</span>
        <div className="flex items-center gap-2">
          <span>No</span>
          <input
            className="radio__toggle"
            onClick={() => {
              showInput("anticonceptivos");
            }}
            type="checkbox"
            {...register("hc.anticonceptivos")}
          />
        </div>
        <span>Si</span>
      </label>

      {watch("hc.anticonceptivos") && (
        <label className="w-full">
          Especificar
          <input
            className="bottom-line"
            {...register("hc.textoanticonceptivos")}
          />
        </label>
      )}
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
