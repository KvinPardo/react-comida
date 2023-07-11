import { formatearDinero } from "../helpers";
import useComida from "../hooks/useComida";

const ModalProducto = () => {
  const { producto, handleClickModal } = useComida();

  return (
    <div className="flex gap-10">
      <div className="lg:w-1/3">
        <img
          src={`/img/${producto.imagen}.jpg`}
          alt={`Imagen producto ${producto.nombre}`}
          className=""
        />
      </div>
      <div className="lg:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-bold text-5xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>
        <button type="button" className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded">Añadir al Pedido</button>
      </div>
    </div>
  );
};

export default ModalProducto;
