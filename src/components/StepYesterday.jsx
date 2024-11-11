import { useFormContext } from "react-hook-form";

export default function StepYesterday({ completeFormStep }) {
  const { register, watch } = useFormContext();

  return (
    <section>
      <h2>Recodatorio 24hs</h2>
      <p className="text-gray-500">¿Que comió ayer?</p>
      <div className="flex items-center justify-between py-5">
        <h4>Desayuno</h4>
        <label className="flex items-center gap-4">
          Hora:
          <input
            className="w-20"
            type="text"
            inputMode="numeric"
            {...register("dieta.desayunohora")}
          />
        </label>
      </div>
      <input className="bottom-line" {...register("dieta.desayuno")} />
      <div className="flex items-center justify-between py-5">
        <h4>colacion</h4>
        <label className="flex items-center gap-4">
          Hora:
          <input
            className="w-20"
            type="text"
            inputMode="numeric"
            {...register("dieta.colacionhora")}
          />
        </label>
      </div>
      <input className="bottom-line" {...register("dieta.colacion")} />
      <div className="flex items-center justify-between py-5">
        <h4>almuerzo</h4>
        <label className="flex items-center gap-4">
          Hora:
          <input
            className="w-20"
            type="text"
            inputMode="numeric"
            {...register("dieta.almuerzohora")}
          />
        </label>
      </div>
      <input className="bottom-line" {...register("dieta.almuerzo")} />
      <div className="flex items-center justify-between py-5">
        <h4>merienda</h4>
        <label className="flex items-center gap-4">
          Hora:
          <input
            className="w-20"
            type="text"
            inputMode="numeric"
            {...register("dieta.meriendahora")}
          />
        </label>
      </div>
      <input className="bottom-line" {...register("dieta.merienda")} />
      <div className="flex items-center justify-between py-5">
        <h4>colacion</h4>
        <label className="flex items-center gap-4">
          Hora:
          <input
            className="w-20"
            type="text"
            inputMode="numeric"
            {...register("dieta.colaciondoshora")}
          />
        </label>
      </div>
      <input className="bottom-line" {...register("dieta.colaciondos")} />
      <div className="flex items-center justify-between py-5">
        <h4>cena</h4>
        <label className="flex items-center gap-4">
          Hora:
          <input
            className="w-20"
            type="text"
            inputMode="numeric"
            {...register("dieta.cenahora")}
          />
        </label>
      </div>
      <input className="bottom-line" {...register("dieta.cena")} />
      <div className="flex items-center justify-between py-5">
        <h4>otras</h4>
        <label className="flex items-center gap-4">
          Hora:
          <input
            className="hora"
            type="text"
            inputMode="numeric"
            {...register("dieta.otrashora")}
          />
        </label>
      </div>
      <input className="bottom-line" {...register("dieta.otras")} />
    </section>
  );
}
