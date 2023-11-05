/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
    
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

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChange,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorContext };

export default CotizadorProvider;
