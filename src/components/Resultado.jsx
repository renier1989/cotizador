import useCotizador from "../hooks/useCotizador";

const Resultado = () => {
  const { resultado } = useCotizador();
    if(resultado === 0){
        return
    }
  return <div>{resultado}</div>;
};

export default Resultado;
