import { useFormContext } from "react-hook-form";

interface StepActivityProps {
  completeFormStep: () => void;
  goBack: () => void;
}

const inputClass =
  "w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors";
const smallInputClass =
  "w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors";

export default function StepActivity({ completeFormStep, goBack }: StepActivityProps) {
  const { register, watch } = useFormContext();

  return (
    <section className="space-y-6">
      <h2 className="text-white text-2xl font-semibold">Actividad física</h2>

      <div className="grid gap-5">
        <label className="space-y-1">
          <span className="text-white/80 text-sm">Tipo de actividad física</span>
          <input
            className={inputClass}
            {...register("actividad.tipo")}
            placeholder="Ej: Running, CrossFit, Yoga..."
          />
        </label>

        <label className="space-y-1">
          <span className="text-white/80 text-sm">Horas de entrenamiento por semana</span>
          <input
            className={inputClass}
            type="number"
            {...register("actividad.tiempo")}
            placeholder="Ej: 3"
          />
        </label>

        <div className="space-y-3">
          <label className="flex items-center gap-4 py-2">
            <span className="text-white/90 text-sm">¿Come algo antes de entrenar?</span>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">No</span>
              <input
                type="checkbox"
                {...register("actividad.comidaantes")}
                className="w-4 h-4 accent-primary rounded"
              />
              <span className="text-white/60 text-sm">Sí</span>
            </div>
          </label>
          {watch("actividad.comidaantes") && (
            <label className="block pl-4 space-y-1">
              <span className="text-white/60 text-xs">¿Qué?</span>
              <input
                className={smallInputClass}
                {...register("actividad.quecomeantes")}
                placeholder="¿Qué comes antes?"
              />
            </label>
          )}
        </div>

        <div className="space-y-3">
          <label className="flex items-center gap-4 py-2">
            <span className="text-white/90 text-sm">¿Come algo después de entrenar?</span>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">No</span>
              <input
                type="checkbox"
                {...register("actividad.comidadespues")}
                className="w-4 h-4 accent-primary rounded"
              />
              <span className="text-white/60 text-sm">Sí</span>
            </div>
          </label>
          {watch("actividad.comidadespues") && (
            <label className="block pl-4 space-y-1">
              <span className="text-white/60 text-xs">¿Qué?</span>
              <input
                className={smallInputClass}
                {...register("actividad.quecomedespues")}
                placeholder="¿Qué comes después?"
              />
            </label>
          )}
        </div>

        <label className="space-y-1">
          <span className="text-white/80 text-sm">¿Qué bebidas utiliza durante el entrenamiento?</span>
          <input
            className={inputClass}
            {...register("actividad.bebidas")}
            placeholder="Agua, bebida deportiva..."
          />
        </label>

        <label className="space-y-1">
          <span className="text-white/80 text-sm">¿Cuál es tu comida favorita?</span>
          <input
            className={inputClass}
            {...register("otros.comidafavorita")}
            placeholder="Tu comida favorita..."
          />
        </label>

        <label className="space-y-1">
          <span className="text-white/80 text-sm">¿Cuál es el motivo de la consulta?</span>
          <input
            className={inputClass}
            {...register("otros.motivoconsulta")}
            placeholder="Cuéntame por qué venís..."
          />
        </label>

        <label className="space-y-1">
          <span className="text-white/80 text-sm">¿Cómo me conociste?</span>
          <input
            className={inputClass}
            {...register("otros.comoconociste")}
            placeholder="Red social, recomendación..."
          />
        </label>
      </div>

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