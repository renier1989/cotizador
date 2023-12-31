import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

function Formulario() {
  const {datos, handleChange, error, setError, cotizarSeguro } = useCotizador();
    const handleSubmit = e =>{
        e.preventDefault();
        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios!')
            return
        }
        setError('');
        cotizarSeguro();
    }
  return (
    <>

    {error && <Error/>}

      <form onSubmit={e => handleSubmit(e)}>
        <div className="my-5">
          <label className="block text-gray-400 uppercase font-bold mb-3">
            marca
          </label>
          <select
            onChange={(e) => handleChange(e)}
            value={datos.marca}
            name="marca"
            className="w-full p-3 bg-white border border-gray-200 "
          >
            <option value="">-- Seleccione la Marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block text-gray-400 uppercase font-bold mb-3">
            años
          </label>
          <select
            onChange={(e) => handleChange(e)}
            value={datos.year}
            name="year"
            className="w-full p-3 bg-white border border-gray-200 "
          >
            <option value="">-- Seleccione el año --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block text-gray-400 uppercase font-bold mb-3">
            elige un plan
          </label>
          <div className="flex gap-3">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChange(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="cotizar"
        />
      </form>
    </>
  );
}

export default Formulario;
