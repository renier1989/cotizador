import useCotizador from "../hooks/useCotizador";
import {MARCAS, PLANES} from "../constants"
const Resultado = () => {
  const { resultado,datos } = useCotizador();
  const {marca, plan, year} = datos

  const [nombreMarca] = MARCAS.filter(m =>m.id === Number(marca));
  const [nombrePlan] = PLANES.filter(p =>p.id === Number(plan));
  

  if (resultado === 0) {
    return;
  }
  return <div className="bg-gray-100 text-center p-5 mt-5 shadow">
    <h2 className="uppercase text-gray-600 font-bold text-3xl">
            Resumen
    </h2>
    <p className="my-2"> 
    <span className="font-bold">Marca : </span>
        {nombreMarca.nombre}
    </p>
    <p className="my-2"> 
    <span className="font-bold">Plan : </span>
        {nombrePlan.nombre}
    </p>
    <p className="my-2"> 
    <span className="font-bold">Año del Auto : </span>
        {year}
    </p>
    <p className="my-2 text-2xl"> 
    <span className="font-bold">Total Cotización : </span>
        {resultado}
    </p>
  </div>;
};

export default Resultado;
