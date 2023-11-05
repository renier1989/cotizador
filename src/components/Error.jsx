import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const {error} = useCotizador()
  return (
    <div className="bg-red-50 border border-red-300 rounded-lg text-center font-semibold p-3 text-red-700">{error}</div>
  )
}

export default Error