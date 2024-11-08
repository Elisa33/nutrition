import { useFormContext } from "react-hook-form";

export default function StepPersonalData({ completeFormStep }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="grid gap-5 md:grid-cols-2">
      <h2 className="col-span-2">Datos personales</h2>
      <label>
        Nombre *
        <input
          className="bottom-line"
          {...register("datos.nombre", { required: "Ingresa tu nombre" })}
        />
        {errors.datos?.nombre && <span>{errors.datos.nombre.message}</span>}
      </label>
      <label>
        Apellido *
        <input
          className="bottom-line"
          {...register("datos.apellido", { required: "Ingresa tu apellido" })}
        />
        {errors.datos?.apellido && <span>{errors.datos.apellido.message}</span>}
      </label>
      {/* Resto de campos... */}
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
