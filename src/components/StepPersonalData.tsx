import { useFormContext } from "react-hook-form";

// 1. Define la estructura de tu formulario completo
interface FormValues {
  datos: {
    nombre: string;
    apellido: string;
    edad: number;
    altura: string;
    peso: number;
    email: string;
    telefono: string;
  };
  // ... si tienes más pasos, agrega sus campos aquí
}

interface StepPersonalDataProps {
  completeFormStep: () => void;
}

export default function StepPersonalData({ completeFormStep }: StepPersonalDataProps) {
  // 2. Pásale el tipo al hook
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<FormValues>();

  const handleNext = async (): Promise<void> => {
    // TypeScript ahora sabe exactamente qué strings son válidos aquí
    const valid = await trigger([
      "datos.nombre",
      "datos.apellido",
      "datos.edad",
      "datos.altura",
      "datos.peso",
      "datos.email",
      "datos.telefono",
    ]);
    if (valid) completeFormStep();
  };

  const inputClass =
    "w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors";

  return (
    <section className="grid gap-5 md:grid-cols-2">
      <h2 className="col-span-2 text-white text-2xl font-semibold">Datos personales</h2>

      <label className="space-y-1">
        <span className="text-white/80 text-sm">Nombre *</span>
        <input
          className={inputClass}
          type="text"
          {...register("datos.nombre", { required: "Ingresa tu nombre" })}
          placeholder="Tu nombre"
        />
        {errors.datos?.nombre && (
          <span className="text-accent text-sm">{errors.datos.nombre.message}</span>
        )}
      </label>
      <label className="space-y-1">
        <span className="text-white/80 text-sm">Apellido *</span>
        <input
          className={inputClass}
          type="text"
          {...register("datos.apellido", { required: "Ingresa tu apellido" })}
          placeholder="Tu apellido"
        />
        {errors.datos?.apellido && (
          <span className="text-accent text-sm">{errors.datos.apellido.message}</span>
        )}
      </label>
      <label className="space-y-1">
        <span className="text-white/80 text-sm">Edad *</span>
        <input
          className={inputClass}
          type="text"
          {...register("datos.edad", { required: "Ingresa tu edad" })}
          placeholder="Tu edad"
        />
        {errors.datos?.edad && (
          <span className="text-accent text-sm">{errors.datos.edad.message}</span>
        )}
      </label>
      <label className="space-y-1">
        <span className="text-white/80 text-sm">altura *</span>
        <input
          className={inputClass}
          type="text"
          {...register("datos.altura", { required: "Ingresa tu altura" })}
          placeholder="Tu altura"
        />
        {errors.datos?.altura && (
          <span className="text-accent text-sm">{errors.datos.altura.message}</span>
        )}
      </label>
      <label className="space-y-1">
        <span className="text-white/80 text-sm">Peso *</span>
        <input
          className={inputClass}
          type="text"
          {...register("datos.peso", { required: "Ingresa tu peso" })}
          placeholder="Tu peso"
        />
        {errors.datos?.peso && (
          <span className="text-accent text-sm">{errors.datos.peso.message}</span>
        )}
      </label>
      <label className="space-y-1">
        <span className="text-white/80 text-sm">telefono *</span>
        <input
          className={inputClass}
          type="text"
          {...register("datos.telefono", { required: "Ingresa tu telefono" })}
          placeholder="Tu telefono"
        />
        {errors.datos?.telefono && (
          <span className="text-accent text-sm">{errors.datos.telefono.message}</span>
        )}
      </label>
      <label className="space-y-1">
        <span className="text-white/80 text-sm">email *</span>
        <input
          className={inputClass}
          type="text"
          {...register("datos.email", { required: "Ingresa tu email" })}
          placeholder="Tu email"
        />
        {errors.datos?.email && (
          <span className="text-accent text-sm">{errors.datos.email.message}</span>
        )}
      </label>
     
 <button
    type="button"
    onClick={handleNext} // <-- ¡Asegúrate de que esto esté aquí!
    className="py-2.5 px-8 bg-white text-secondary hover:bg-white/90 rounded-lg font-medium transition-colors"
  >
        Siguiente
      </button>
      
    </section>
  );
}