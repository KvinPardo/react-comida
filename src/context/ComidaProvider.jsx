import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";

const ComidaContext = createContext();

const ComidaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({})
  // console.log(categoriaActual);

  const handleClickCategoria = id => {
    const categoria = categorias.filter( categoria => categoria.id === id)[0]
    // console.log(categoria);
    setCategoriaActual(categoria)
  };


  const handleClickModal = () => {
    setModal(!modal)
  }


  const handleSetProducto = producto => {
    setProducto(producto)
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
        handleSetProducto
      }}
    >
      {children}
    </ComidaContext.Provider>
  );
};

export { ComidaProvider };
export default ComidaContext;
