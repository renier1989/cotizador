/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import { calcularMarca, calcularPlan, formatoDinero, obtnerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
    
    const [error, setError] = useState('');
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });
    const [resultado , setResultado] = useState(0);

    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {

        console.log('cotizando....');
        // se inicia con una base 
        let resultado = 2000;
        // luego se obtiene la diferencia de los años 
        let diferencia = obtnerDiferenciaYear(datos.year);
        // console.log('diferencia AÑOS: ', diferencia );
        // se resta el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100;
        // console.log('resta del 3%:', resultado);

        // Europeo 30%
        // Amaricano 15%
        // Asiatico 7%
        // Ruso 3%
        resultado *= calcularMarca(datos.marca);
        // console.log('incremento por marca: ', resultado);

        // Plan Basico 20%
        // Plan Completo 50%
        resultado *= calcularPlan(datos.plan);
        // console.log('incremento por plan: ', resultado);

        resultado = formatoDinero(resultado);
        // console.log('final:', resultado);
        setResultado(resultado);
    }


  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChange,
        error,
        setError,
        cotizarSeguro,
        resultado,
        
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorContext };

export default CotizadorProvider;
