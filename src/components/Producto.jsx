import React from "react";
import { formatearDinero } from "../helpers";
import useComida from "../hooks/useComida";

const Producto = ({ producto }) => {
  // console.log(producto);
  const { handleClickModal, handleSetProducto } = useComida();
  const { imagen, nombre, precio } = producto;

  return (
    <div className="border p-3 shadow-md bg-white ">
      <div className="group overflow-hidden">
        <img
          src={`/img/${imagen}.jpg `}
          alt={`imagen ${nombre}`}
          className="w-full aspect-[3/2] h-[400px] hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-3xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          onClick={() => {
            handleClickModal();
            handleSetProducto(producto);
          }}
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 p-3 uppercase w-full"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
