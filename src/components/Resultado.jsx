import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constants";
import { useCallback, useRef, useMemo } from "react";
const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;

  const yearRef = useRef(year);
// //   esto es cuando se usa el hook de useCallback
//   const [nombreMarca] = useCallback(MARCAS.filter((m) => m.id === Number(marca)), [resultado]);
//   const [nombrePlan] = useCallback(PLANES.filter((p) => p.id === Number(plan)), [resultado]);
//   esto es cuando se usa el hook de useMemo
  const [nombreMarca] = useMemo(() =>MARCAS.filter((m) => m.id === Number(marca)), [resultado]);
  const [nombrePlan] = useMemo(()=>PLANES.filter((p) => p.id === Number(plan)), [resultado]);

  if (resultado === 0) {
    return;
  }
  return (
    <div className="bg-gray-100 text-center p-5 mt-5 shadow">
      <h2 className="uppercase text-gray-600 font-bold text-3xl">Resumen</h2>
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
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización : </span>
        {resultado}
      </p>
    </div>
  );
};

export default Resultado;
