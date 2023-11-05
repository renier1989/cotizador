/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import { obtnerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
    
    const [error, setError] = useState('');
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });

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
        console.log('diferencia', diferencia );
        resultado -= ((diferencia * 3) * resultado) / 100;
        // se resta el 3% por cada año
        console.log(resultado);

        // Amaricano 15%
        // Europeo 30%
        // Asiatico 5%
        // Ruso 10%

        // Plan Basico 20%
        // Plan Completo 50%
    }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChange,
        error,
        setError,
        cotizarSeguro,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorContext };

export default CotizadorProvider;
