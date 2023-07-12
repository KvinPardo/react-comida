import { useState, useEffect } from "react";
import { formatearDinero } from "../helpers";
import useComida from "../hooks/useComida";

const ModalProducto = () => {
  const { producto, handleClickModal, handleAgregarPedido, pedido } =
    useComida();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    // console.log('Agregaste algo');
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      // console.log('Si está en el pedido...');
      const productoEdicion = pedido.filter(
        (pedidoState) => pedidoState.id === producto.id
      )[0];

      setCantidad(productoEdicion.cantidad);
      setEdicion(true);
    }
  }, [pedido]);

  return (
    <div className="lg:flex items-center gap-10 justify-center w-full h-full p-4">
      <div className="lg:w-1/3">
        <img
          src={`/img/${producto.imagen}.jpg`}
          alt={`Imagen producto ${producto.nombre}`}
          className=""
        />
      </div>
      <div className="lg:w-2/3 flex flex-col lg:gap-y-5">
        <div className="absolute lg:right-5 lg:top-[15px] right-3 top-3">
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

        <h1 className="lg:text-3xl font-bold mt-5 text-[20px]">
          {producto.nombre}
        </h1>
        <p className="mt-5 font-bold lg:text-5xl text-amber-500 text-[20px]">
          {formatearDinero(producto.precio)}
        </p>

        {/* cantidad */}
        <div className="flex gap-4 mt-5">
          <button
            className="text-[16px]"
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 border rounded-full border-gray-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>

          <p className="text-2xl text-[20px]">{cantidad}</p>

          <button
            onClick={() => {
              if (cantidad >= 5) return;
              setCantidad(cantidad + 1);
            }}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 border rounded-full border-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 w-full lg:w-[200px] py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => {
            handleClickModal();
            handleAgregarPedido({ ...producto, cantidad });
          }}
        >
          {edicion ? "Guardar Cambios" : "Añadir al Pedido"}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
