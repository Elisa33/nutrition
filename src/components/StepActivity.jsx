import { useFormContext } from "react-hook-form";

export default function StepActivity({ completeFormStep }) {
  const { register, watch } = useFormContext();

  return (
    <section>
      <h2>Actividad fisica</h2>
      <div className="grid gap-4 py-5">
        <label className="w-full">
          Tipo de actividad física
          <input className="bottom-line" {...register("actividad.tipo")} />
        </label>
        <label className="w-full">
          Horas de entrenamiento por semana
          <input
            className="bottom-line"
            type="text"
            pattern="\d*"
            {...register("actividad.tiempo")}
          />
        </label>
        <label className="flex items-center gap-4 py-4">
          <span>¿Come algo antes de entrenar?</span>
          <div className="flex items-center gap-2">
            <span>No</span>
            <input
              className="radio__toggle"
              type="checkbox"
              {...register("actividad.comidaantes")}
            />
            <span>Si</span>
          </div>
        </label>
        {watch("actividad.comidaantes") && (
          <label className="w-full">
            ¿Qué?
            <input
              className="bottom-line"
              {...register("actividad.quecomeantes")}
            />
          </label>
        )}
        <label className="flex items-center gap-4 py-4">
          <span>¿Come algo despues de entrenar?</span>
          <div className="flex items-center gap-2">
            <span>No</span>
            <input
              className="radio__toggle"
              type="checkbox"
              {...register("actividad.comidadespues")}
            />
            <span>Si</span>
          </div>
        </label>
        {watch("actividad.comidadespues") && (
          <label className="w-full">
            ¿Qué?
            <input
              className="bottom-line"
              {...register("actividad.quecomedespues")}
            />
          </label>
        )}
        <label className="w-full pt-5">
          ¿Qué bebidas utiliza durante el entrenamiento?
          <input className="bottom-line" {...register("actividad.bebidas")} />
        </label>
        <label className="w-full">
          ¿Cual es tu comida favorita?
          <input
            className="bottom-line"
            {...register("otros.comidafavorita")}
          />
        </label>
        <label className="w-full">
          ¿Cual es el motivo de la consulta?
          <input
            className="bottom-line"
            {...register("otros.motivoconsulta")}
          />
        </label>
        <label className="w-full">
          ¿Como me conociste?
          <input className="bottom-line" {...register("otros.comoconociste")} />
        </label>
      </div>
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
