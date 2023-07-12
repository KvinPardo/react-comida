import { createContext, useEffect, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";
import { toast } from "react-toastify";

const ComidaContext = createContext();

const ComidaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0)
  // console.log(categoriaActual);

  useEffect(() => {
    const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
    setTotal(nuevoTotal)
  }, [pedido])



  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    // console.log(categoria);
    setCategoriaActual(categoria);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  // Con esto puedo sacar cosas de un objeto
  const handleAgregarPedido = ({ categoria_id,  ...producto }) => {
    // console.log(producto);
    setPedido([...pedido, producto]); // toma una copia de lo que haya en pedido y agrégale este producto nuevo

    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );
      setPedido(pedidoActualizado);
      toast.success("Pedido Actualizado");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al Pedido");
    }
  };

  // botón editar de Resumen
  const handleEditarCantidad = id => {
    // console.log(id);
    const productoActualizar = pedido.filter( producto => producto.id === id)[0]
    setProducto(productoActualizar);
    setModal(!modal)
  };



  // Eliminar Producto
  const handleEliminarProductoPedido = id => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id)
    setPedido(pedidoActualizado);
    toast.success('Pedido Eliminado')
  }




  return (
    <ComidaContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarProductoPedido,
        total
      }}
    >
      {children}
    </ComidaContext.Provider>
  );
};

export { ComidaProvider };
export default ComidaContext;
