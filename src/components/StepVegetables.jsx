import { useFormContext } from "react-hook-form";

export default function StepVegetables({ completeFormStep }) {
  const { register, watch } = useFormContext();

  return (
    <section>
      <h2>Verduras</h2>
      <p className="text-gray-500">por favor tachar aquellas que NO consuma.</p>
      <ul className="grid lg:grid-cols-3 gap-5 py-5 lista">
        <li>
          <input
            type="checkbox"
            id="albahaca"
            {...register("verduras.albahaca")}
            value="albahaca"
          />
          <label htmlFor="albahaca">albahaca</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="alcaucil"
            {...register("verduras.alcaucil")}
            value="alcaucil"
          />
          <label htmlFor="alcaucil">alcaucil</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="acelga"
            {...register("verduras.acelga")}
            value="acelga"
          />
          <label htmlFor="acelga">acelga</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="achicoria"
            {...register("verduras.achicoria")}
            value="achicoria"
          />
          <label htmlFor="achicoria">achicoria</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="apio"
            {...register("verduras.apio")}
            value="apio"
          />
          <label htmlFor="apio">apio</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="arvejas"
            {...register("verduras.arvejas")}
            value="arvejas"
          />
          <label htmlFor="arvejas">arvejas frescas</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="batata"
            {...register("verduras.batata")}
            value="batata"
          />
          <label htmlFor="batata">batata</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="berenjena"
            {...register("verduras.berenjena")}
            value="berenjena"
          />
          <label htmlFor="berenjena">berenjena</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="berro"
            {...register("verduras.berro")}
            value="berro"
          />
          <label htmlFor="berro">berro</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="brocoli"
            {...register("verduras.brocoli")}
            value="brocoli"
          />
          <label htmlFor="brocoli">brocoli</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="brotesdesoja"
            {...register("verduras.brotes_soja")}
            value="brotesdesoja"
          />
          <label htmlFor="brotesdesoja">brotes de soja</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="cebolla"
            {...register("verduras.cebolla")}
            value="cebolla"
          />
          <label htmlFor="cebolla">cebolla</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="cebollaverdeo"
            {...register("verduras.cebolla_verdeo")}
            value="cebollaverdeo"
          />
          <label htmlFor="cebollaverdeo">cebolla de verdeo</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="chauchas"
            {...register("verduras.chauchas")}
            value="chauchas"
          />
          <label htmlFor="chauchas">chauchas</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="choclo"
            {...register("verduras.choclo")}
            value="choclo"
          />
          <label htmlFor="choclo">choclo</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="coliflor"
            {...register("verduras.coliflor")}
            value="coliflor"
          />
          <label htmlFor="coliflor">coliflor</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="endibia"
            {...register("verduras.endibia")}
            value="endibia"
          />
          <label htmlFor="endibia">endibia</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="escarola"
            {...register("verduras.escarola")}
            value="escarola"
          />
          <label htmlFor="escarola">escarola</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="esparragos"
            {...register("verduras.esparragos")}
            value="esparragos"
          />
          <label htmlFor="esparragos">espárragos</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="espinaca"
            {...register("verduras.espinaca")}
            value="espinaca"
          />
          <label htmlFor="espinaca">espinaca</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="habas"
            {...register("verduras.habas")}
            value="habas"
          />
          <label htmlFor="habas">habas</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="hinojo"
            {...register("verduras.hinojo")}
            value="hinojo"
          />
          <label htmlFor="hinojo">hinojo</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="lechuga"
            {...register("verduras.lechuga")}
            value="lechuga"
          />
          <label htmlFor="lechuga">lechuga</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="mandioca"
            {...register("verduras.mandioca")}
            value="mandioca"
          />
          <label htmlFor="mandioca">mandioca</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="morronrojo"
            {...register("verduras.morron_rojo")}
            value="morronrojo"
          />
          <label htmlFor="morronrojo">morrón rojo</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="morronverde"
            {...register("verduras.morron_verde")}
            value="morronverde"
          />
          <label htmlFor="morronverde">morrón verde</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="nabo"
            {...register("verduras.nabo")}
            value="nabo"
          />
          <label htmlFor="nabo">nabo</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="pepino"
            {...register("verduras.pepino")}
            value="pepino"
          />
          <label htmlFor="pepino">pepino</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="tomate"
            {...register("verduras.tomate")}
            value="tomate"
          />
          <label htmlFor="tomate">tomate</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="palta"
            {...register("verduras.palta")}
            value="palta"
          />
          <label htmlFor="palta">palta</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="papa"
            {...register("verduras.papa")}
            value="papa"
          />
          <label htmlFor="papa">papa</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="palmitos"
            {...register("verduras.palmitos")}
            value="palmitos"
          />
          <label htmlFor="palmitos">palmitos</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="puerro"
            {...register("verduras.puerro")}
            value="puerro"
          />
          <label htmlFor="puerro">puerro</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="radicheta"
            {...register("verduras.radicheta")}
            value="radicheta"
          />
          <label htmlFor="radicheta">radicheta</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="rabanito"
            {...register("verduras.rabanito")}
            value="rabanito"
          />
          <label htmlFor="rabanito">rabanito</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="rabano"
            {...register("verduras.rabano")}
            value="rabano"
          />
          <label htmlFor="rabano">rábano</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="remolacha"
            {...register("verduras.remolacha")}
            value="remolacha"
          />
          <label htmlFor="remolacha">remolacha</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="repollitobruselas"
            {...register("verduras.repollito_bruselas")}
            value="repollitobruselas"
          />
          <label htmlFor="repollitobruselas">repollito de bruselas</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="repollo"
            {...register("verduras.repollo")}
            value="repollo"
          />
          <label htmlFor="repollo">repollo</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="rucula"
            {...register("verduras.rucula")}
            value="rucula"
          />
          <label htmlFor="rucula">rucula</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="zanahoria"
            {...register("verduras.zanahoria")}
            value="zanahoria"
          />
          <label htmlFor="zanahoria">zanahoria</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="zapallo"
            {...register("verduras.zapallo")}
            value="zapallo"
          />
          <label htmlFor="zapallo">zapallo</label>
        </li>

        <li>
          <input
            type="checkbox"
            id="zapallito"
            {...register("verduras.zapallito")}
            value="zapallito"
          />
          <label htmlFor="zapallito">zapallito</label>
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
