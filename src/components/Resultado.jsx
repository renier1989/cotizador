import useCotizador from "../hooks/useCotizador";
import {MARCAS, PLANES} from "../constants"
const Resultado = () => {
  const { resultado,datos } = useCotizador();
  const {marca, plan, year} = datos

  const [nombreMarca] = MARCAS.filter(m =>m.id === Number(marca));
  console.log(nombreMarca);

  if (resultado === 0) {
    return;
  }
  return <div className="bg-gray-100 text-center p-5 mt-5 shadow">
    <h2 className="uppercase text-gray-600 font-bold text-3xl">
            Resumen
    </h2>
    <p className="my-2"> 
    <span className="font-bold">Marca : </span>
        {marca}
    </p>
  </div>;
};

export default Resultado;
