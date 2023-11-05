/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const saludo = "hola como estas";
  const fnSaludo = () => {
    console.log("hola desde una funcion");
  };

  return (
    <CotizadorContext.Provider
      value={{
        saludo,
        fnSaludo,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

function useCoti() {
  const coti = useContext(CotizadorContext);
  return coti;
}

export { useCoti };

export default CotizadorProvider;
