import React from "react";
import { formatearDinero } from "../helpers";

const Producto = ({ producto }) => {
  // console.log(producto);
  const { imagen, nombre, precio } = producto;

  return (
    <div className="border p-3 shadow-md bg-white">
      <img
        src={`/img/${imagen}.jpg `}
        alt={`imagen ${nombre}`}
        className="w-full"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-3xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
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
