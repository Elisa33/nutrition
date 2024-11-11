import { useFormContext } from "react-hook-form";

export default function StepFood({ completeFormStep }) {
  const { register, watch } = useFormContext();

  return (
    <section className="grid gap-8">
      <h2>Alimentos</h2>
      <p className="text-gray-500">
        A continuacion deberá marcar todo aquello que consume y que no le
        molestaria que forme parte de su plan de alimentación
      </p>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="py-6">
          <h3>Infusiones</h3>
          <input
            className="invisible inp-cbx"
            id="te"
            type="checkbox"
            {...register("infusiones.te")}
          />
          <label className="cbx alimentos" htmlFor="te">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            té
          </label>
          <input
            className="invisible inp-cbx"
            id="cafe"
            type="checkbox"
            {...register("infusiones.cafe")}
          />
          <label className="cbx alimentos" htmlFor="cafe">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            café
          </label>
          <input
            className="invisible inp-cbx"
            id="mate"
            type="checkbox"
            {...register("infusiones.mate")}
          />
          <label className="cbx alimentos" htmlFor="mate">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            mate
          </label>
          <input
            className="invisible inp-cbx"
            id="matecocido"
            type="checkbox"
            {...register("infusiones.mate_cocido")}
          />
          <label className="cbx alimentos" htmlFor="matecocido">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            mate cocido
          </label>
          <input
            className="invisible inp-cbx"
            id="malta"
            type="checkbox"
            {...register("infusiones.malta")}
          />
          <label className="cbx alimentos" htmlFor="malta">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            malta
          </label>
          <input
            className="invisible block inp-cbx"
            id="infsotros"
            type="checkbox"
            {...register("infusiones.otros")}
          />
          <label className="cbx alimentos" htmlFor="infsotros">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            otros
          </label>
        </div>
        <div className="py-6">
          <h3>Lácteos</h3>
          <input
            className="invisible inp-cbx"
            id="leche"
            type="checkbox"
            {...register("lacteos.leche")}
          />
          <label className="cbx alimentos" htmlFor="leche">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            leche
          </label>
          <input
            className="invisible inp-cbx"
            id="yogurt"
            type="checkbox"
            {...register("lacteos.yogurt")}
          />
          <label className="cbx alimentos" htmlFor="yogurt">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            yogurt
          </label>
          <input
            className="invisible inp-cbx"
            id="queso"
            type="checkbox"
            {...register("lacteos.queso")}
          />
          <label className="cbx alimentos" htmlFor="queso">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            queso
          </label>
          <input
            className="invisible inp-cbx"
            id="huevos"
            type="checkbox"
            {...register("lacteos.huevos")}
          />
          <label className="cbx alimentos" htmlFor="huevos">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            huevos
          </label>
          <input
            className="invisible inp-cbx"
            id="ricota"
            type="checkbox"
            {...register("lacteos.ricota")}
          />
          <label className="cbx alimentos" htmlFor="ricota">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            ricota
          </label>
        </div>
        <div className="py-6">
          <h3>Carnes</h3>
          <input
            className="invisible inp-cbx"
            id="pollo"
            type="checkbox"
            {...register("carnes.pollo")}
          />
          <label className="cbx alimentos" htmlFor="pollo">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            pollo
          </label>
          <input
            className="invisible inp-cbx"
            id="pescado"
            type="checkbox"
            {...register("carnes.pescado")}
          />
          <label className="cbx alimentos" htmlFor="pescado">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            pescado
          </label>
          <input
            className="invisible inp-cbx"
            id="vaca"
            type="checkbox"
            {...register("carnes.vaca")}
          />
          <label className="cbx alimentos" htmlFor="vaca">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            vaca
          </label>
          <input
            className="invisible inp-cbx"
            id="cerdo"
            type="checkbox"
            {...register("carnes.cerdo")}
          />
          <label className="cbx alimentos" htmlFor="cerdo">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            cerdo
          </label>
        </div>
        <div className="py-6">
          <h3>Pan y galletitas</h3>
          <input
            className="invisible inp-cbx"
            id="panblanco"
            type="checkbox"
            {...register("panes.pan_blanco")}
          />
          <label className="cbx alimentos" htmlFor="panblanco">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            Pan Blanco
          </label>
          <input
            className="invisible inp-cbx"
            id="pansalvado"
            type="checkbox"
            {...register("panes.pan_salvado")}
          />
          <label className="cbx alimentos" htmlFor="pansalvado">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            Pan de Salvado
          </label>
          <input
            className="invisible inp-cbx"
            id="galletitasagua"
            type="checkbox"
            {...register("panes.galletitas_agua")}
          />
          <label className="cbx alimentos" htmlFor="galletitasagua">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            Galletitas de agua
          </label>
          <input
            className="invisible inp-cbx"
            id="galletitassinsal"
            type="checkbox"
            {...register("panes.galletitas_sinsal")}
          />
          <label className="cbx alimentos" htmlFor="galletitassinsal">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            Galletitas sin sal
          </label>
          <input
            className="invisible inp-cbx"
            id="galletitasdulces"
            type="checkbox"
            {...register("panes.galletitas_dulces")}
          />
          <label className="cbx alimentos" htmlFor="galletitasdulces">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            Galletitas dulces
          </label>
          <input
            className="invisible inp-cbx"
            id="galletitasarroz"
            type="checkbox"
            {...register("panes.galletitas_arroz")}
          />
          <label className="cbx alimentos" htmlFor="galletitasarroz">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            Galletitas de arroz
          </label>
        </div>
        <div className="py-6">
          <h3>Semillas</h3>
          <input
            className="invisible inp-cbx"
            id="chia"
            type="checkbox"
            {...register("semillas.chia")}
          />
          <label className="cbx alimentos" htmlFor="chia">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            chia
          </label>
          <input
            className="invisible inp-cbx"
            id="sesamo"
            type="checkbox"
            {...register("semillas.sesamo")}
          />
          <label className="cbx alimentos" htmlFor="sesamo">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            sesamo
          </label>
          <input
            className="invisible inp-cbx"
            id="girasol"
            type="checkbox"
            {...register("semillas.girasol")}
          />
          <label className="cbx alimentos" htmlFor="girasol">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            girasol
          </label>
          <input
            className="invisible inp-cbx"
            id="amaranto"
            type="checkbox"
            {...register("semillas.amaranto")}
          />
          <label className="cbx alimentos" htmlFor="amaranto">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            amaranto
          </label>
          <input
            className="invisible inp-cbx"
            id="lino"
            type="checkbox"
            {...register("semillas.lino")}
          />
          <label className="cbx alimentos" htmlFor="lino">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            lino
          </label>
          <input
            className="invisible inp-cbx"
            id="amapola"
            type="checkbox"
            {...register("semillas.amapola")}
          />
          <label className="cbx alimentos" htmlFor="amapola">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            amapola
          </label>
          <input
            className="invisible inp-cbx"
            id="zapallo"
            type="checkbox"
            {...register("semillas.zapallo")}
          />
          <label className="cbx alimentos" htmlFor="zapallo">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            zapallo
          </label>
          <input
            className="invisible inp-cbx"
            id="otras"
            type="checkbox"
            {...register("semillas.otras")}
          />
          <label className="cbx alimentos" htmlFor="otras">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            otras
          </label>
        </div>
        <div className="py-6">
          <h3>Frutas Secas</h3>
          <input
            className="invisible inp-cbx"
            id="nuez"
            type="checkbox"
            {...register("frutossecos.nuez")}
          />
          <label className="cbx alimentos" htmlFor="nuez">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            nuez
          </label>
          <input
            className="invisible inp-cbx"
            id="almendra"
            type="checkbox"
            {...register("frutossecos.almendra")}
          />
          <label className="cbx alimentos" htmlFor="almendra">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            almendra
          </label>
          <input
            className="invisible inp-cbx"
            id="castania"
            type="checkbox"
            {...register("frutossecos.castania")}
          />
          <label className="cbx alimentos" htmlFor="castania">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            castaña
          </label>
          <input
            className="invisible inp-cbx"
            id="pistacho"
            type="checkbox"
            {...register("frutossecos.pistacho")}
          />
          <label className="cbx alimentos" htmlFor="pistacho">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            pistacho
          </label>
          <input
            className="invisible inp-cbx"
            id="avellana"
            type="checkbox"
            {...register("frutossecos.avellana")}
          />
          <label className="cbx alimentos" htmlFor="avellana">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            avellana
          </label>
          <input
            className="invisible inp-cbx"
            id="pasasuva"
            type="checkbox"
            {...register("frutossecos.pasas_uva")}
          />
          <label className="cbx alimentos" htmlFor="pasasuva">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            pasas uva
          </label>
          <input
            className="invisible inp-cbx"
            id="pasasarandano"
            type="checkbox"
            {...register("frutossecos.pasas_arandano")}
          />
          <label className="cbx alimentos" htmlFor="pasasarandano">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            pasas arandano
          </label>
          <input
            className="invisible inp-cbx"
            id="bananachips"
            type="checkbox"
            {...register("frutossecos.banana_chips")}
          />
          <label className="cbx alimentos" htmlFor="bananachips">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            banana chips
          </label>
          <input
            className="invisible inp-cbx"
            id="jengibrechips"
            type="checkbox"
            {...register("frutossecos.jengibre_chips")}
          />
          <label className="cbx alimentos" htmlFor="jengibrechips">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            jengibre chips
          </label>
          <input
            className="invisible inp-cbx"
            id="mani"
            type="checkbox"
            {...register("frutossecos.mani")}
          />
          <label className="cbx alimentos" htmlFor="mani">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            mani
          </label>
          <input
            className="invisible inp-cbx"
            id="fsotros"
            type="checkbox"
            {...register("frutossecos.otros")}
          />
          <label className="cbx alimentos" htmlFor="fsotros">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            otros
          </label>
        </div>
        <div className="py-6">
          <h3>Legumbres / Derivados</h3>
          <input
            className="invisible inp-cbx"
            id="soja"
            type="checkbox"
            {...register("legumbres.soja")}
          />
          <label className="cbx alimentos" htmlFor="soja">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            soja
          </label>
          <input
            className="invisible inp-cbx"
            id="lentejas"
            type="checkbox"
            {...register("legumbres.lentejas")}
          />
          <label className="cbx alimentos" htmlFor="lentejas">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            lentejas
          </label>
          <input
            className="invisible inp-cbx"
            id="garbanzos"
            type="checkbox"
            {...register("legumbres.garbanzos")}
          />
          <label className="cbx alimentos" htmlFor="garbanzos">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            garbanzos
          </label>
          <input
            className="invisible inp-cbx"
            id="porotos"
            type="checkbox"
            {...register("legumbres.porotos")}
          />
          <label className="cbx alimentos" htmlFor="porotos">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            porotos
          </label>
          <input
            className="invisible inp-cbx"
            id="otros"
            type="checkbox"
            {...register("legumbres.otros")}
          />
          <label className="cbx alimentos" htmlFor="otros">
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            otros
          </label>
        </div>
      </div>

      <label className="w-full py-6">
        Comentarios
        <input className="bottom-line" {...register("comentariosalimentos")} />
      </label>
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
