import { useFormContext } from "react-hook-form";

export default function StepHistory({ completeFormStep }) {
  const { register, watch } = useFormContext();

  return (
    <section className="grid gap-8">
      <h2>Historia Clínica</h2>
      <label>
        ¿Consume suplementos?
        <input type="checkbox" {...register("hc.suplementos")} />
      </label>
      {watch("hc.suplementos") && (
        <label>
          Especificar
          <input className="bottom-line" {...register("hc.textosuplementos")} />
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
