import { useFormContext } from "react-hook-form";

export default function StepFood({ completeFormStep }) {
  const { register, watch } = useFormContext();

  // Función para determinar si un item está activo
  const isChecked = (section, item) => watch(`${section}.${item}`);

  return (
    <section className="grid gap-4 lg:gap-8">
      <h2>Alimentos</h2>
      <p className="text-gray-500">
        A continuación, marque todo aquello que consume y que no le molestaría
        que forme parte de su plan de alimentación.
      </p>
      <div className="grid gap-2 md:grid-cols-2">
        {/* Infusiones Section */}
        <div className="py-6">
          <h3>Infusiones</h3>
          {["cafe", "mate", "mate_cocido", "malta", "otros"].map((item) => (
            <div key={item} className="flex items-center">
              <input
                id={item}
                type="checkbox"
                {...register(`infusiones.${item}`)}
                className="w-5 h-5 rounded-full border-gray-700 text-secondary-400 focus:ring-secondary-400
                  checked:bg-secondary-400 checked:border-secondary-400 checked:text-white
                  appearance-none border transition-colors cursor-pointer"
              />
              <label
                htmlFor={item}
                className="ml-2 cursor-pointer flex items-center"
              >
                {isChecked("infusiones", item) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-4 h-4 text-primary-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
                <span className="ml-2">{item.replace(/_/g, " ")}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Ejemplo adicional: Lácteos Section */}
        <div className="py-6">
          <h3>Lácteos</h3>
          {["leche", "yogurt", "queso", "huevos", "ricota"].map((item) => (
            <div key={item} className="flex items-center">
              <input
                id={item}
                type="checkbox"
                {...register(`lacteos.${item}`)}
                className="w-5 h-5 rounded-full border-gray-700 text-secondary-400 focus:ring-secondary-400
                  checked:bg-secondary-400 checked:border-secondary-400 checked:text-white
                  appearance-none border transition-colors cursor-pointer"
              />
              <label
                htmlFor={item}
                className="ml-2 cursor-pointer flex items-center"
              >
                {isChecked("lacteos", item) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-4 h-4 -translate-x-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
                <span className="ml-2">{item}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={completeFormStep}
        className="py-2 px-4 bg-primary text-white rounded-lg mt-4"
      >
        Siguiente
      </button>
    </section>
  );
}
