import React from "react";
import useComida from "../hooks/useComida";
import ResumenProducto from "./ResumenProducto";
import { formatearDinero } from "../helpers";

const Resumen = () => {
  const { pedido, total } = useComida();

  const comprobarPedido = () => pedido.length === 0;
  // console.log(comprobarPedido());

  return (
    <aside className="lg:w-96 h-screen lg:overflow-y-scroll w-full p-5">
      <h1>Mi pedido</h1>
      <p className="text-lg my-5">
        Aquí podrás ver el resumen y totales del pedido
      </p>

      <div className="flex flex-col  gap-y-5">
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">No hay elementos</p>
        ) : (
          pedido.map((producto) => (
            <ResumenProducto key={producto.id} producto={producto} />
          ))
        )}
      </div>

      <p className="text-xl mt-10">
        Total: {""}
        {formatearDinero(total)}
      </p>

      <form className="w-full">
        <div className="mt-5">
          <input
            className={`${
              comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            } px-4 py-2 rounded uppercase font-bold text-white w-full cursor-pointer `}
            type="submit"
            value="Confirmar Pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </aside>
  );
};

export default Resumen;
