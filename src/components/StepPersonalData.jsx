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
          type="text"
          {...register("datos.nombre", { required: "Ingresa tu nombre" })}
        />
        {errors.datos?.nombre && <span>{errors.datos.nombre.message}</span>}
      </label>
      <label>
        Apellido *
        <input
          className="bottom-line"
          type="text"
          {...register("datos.apellido", { required: "Ingresa tu apellido" })}
        />
        {errors.datos?.apellido && <span>{errors.datos.apellido.message}</span>}
      </label>
      <label>
        Edad
        <input
          className="bottom-line"
          type="number"
          {...register("datos.edad", { required: "Ingresa tu edad" })}
        />
        {errors.datos?.edad && <span>{errors.datos.edad.message}</span>}
      </label>
      <label>
        Altura
        <input
          className="bottom-line"
          type="text"
          {...register("datos.altura", { required: "Ingresa tu altura" })}
        />
        {errors.datos?.altura && <span>{errors.datos.altura.message}</span>}
      </label>
      <label>
        Peso
        <input
          className="bottom-line"
          type="number"
          {...register("datos.peso", { required: "Ingresa tu peso" })}
        />
        {errors.datos?.peso && <span>{errors.datos.peso.message}</span>}
      </label>
      <label>
        Email
        <input
          className="bottom-line"
          {...register("datos.email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
        />
        {errors.datos?.email && <span>{errors.datos.email.message}</span>}
      </label>
      <label>
        Teléfono
        <input
          className="bottom-line"
          inputMode="tel"
          {...register("datos.telefono", { required: true })}
        />
        {errors.datos?.telefono && <span>{errors.datos.telefono.message}</span>}
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
