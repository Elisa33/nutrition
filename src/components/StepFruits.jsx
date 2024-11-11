import { useFormContext } from "react-hook-form";

export default function StepFruits({ completeFormStep }) {
  const { register, watch } = useFormContext();

  return (
    <section className="grid  gap-8">
      <h2>Frutas</h2>
      <p className="text-gray-500">por favor tachar aquellas que NO consuma.</p>
      <ul className="grid lg:grid-cols-3 gap-5 py-5 lista frutas">
        <li>
          <input
            type="checkbox"
            id="anana"
            {...register("frutas.anana")}
            value="anana"
          />
          <label htmlFor="anana">ananá</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="arandanos"
            {...register("frutas.arandanos")}
            value="arandanos"
          />
          <label htmlFor="arandanos">arándanos</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="banana"
            {...register("frutas.banana")}
            value="banana"
          />
          <label htmlFor="banana">banana</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="cereza"
            {...register("frutas.cereza")}
            value="cereza"
          />
          <label htmlFor="cereza">cereza</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="ciruela"
            {...register("frutas.ciruela")}
            value="ciruela"
          />
          <label htmlFor="ciruela">ciruela</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="damasco"
            {...register("frutas.damasco")}
            value="damasco"
          />
          <label htmlFor="damasco">damasco</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="durazno"
            {...register("frutas.durazno")}
            value="durazno"
          />
          <label htmlFor="durazno">durazno</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="frambuesa"
            {...register("frutas.frambuesa")}
            value="frambuesa"
          />
          <label htmlFor="frambuesa">frambuesa</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="frutillas"
            {...register("frutas.frutillas")}
            value="frutillas"
          />
          <label htmlFor="frutillas">frutillas</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="guinda"
            {...register("frutas.guinda")}
            value="guinda"
          />
          <label htmlFor="guinda">guinda</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="higo"
            {...register("frutas.higo")}
            value="higo"
          />
          <label htmlFor="higo">higo</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="kiwi"
            {...register("frutas.kiwi")}
            value="kiwi"
          />
          <label htmlFor="kiwi">kiwi</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="limon"
            {...register("frutas.limon")}
            value="limon"
          />
          <label htmlFor="limon">limon</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="mandarina"
            {...register("frutas.mandarina")}
            value="mandarina"
          />
          <label htmlFor="mandarina">mandarina</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="mango"
            {...register("frutas.mango")}
            value="mango"
          />
          <label htmlFor="mango">mango</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="mamon"
            {...register("frutas.mamon")}
            value="mamon"
          />
          <label htmlFor="mamon">mamon</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="manzana"
            {...register("frutas.manzana")}
            value="manzana"
          />
          <label htmlFor="manzana">manzana</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="pera"
            {...register("frutas.pera")}
            value="pera"
          />
          <label htmlFor="pera">pera</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="sandia"
            {...register("frutas.sandia")}
            value="sandia"
          />
          <label htmlFor="sandia">sandia</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="uva"
            {...register("frutas.uva")}
            value="uva"
          />
          <label htmlFor="uva">uva</label>
        </li>
      </ul>

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
