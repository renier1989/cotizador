import useCotizador from "../hooks/useCotizador"
import Formulario from "./Formulario"
import Resultado from "./Resultado";
import Spinner from "./Spinner";

function AppSeguro() {
    const {cargando} = useCotizador();
  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-3xl">Cotizador de seguros de Autos </h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/3 p-10 rounded-lg mx-auto shadow mb-10" >
            <Formulario/>

            {cargando ? <Spinner/> : <Resultado/>}
        </main>
    </>
  )
}

export default AppSeguro