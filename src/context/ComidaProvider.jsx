import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";

const ComidaContext = createContext();

const ComidaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  // console.log(categoriaActual);

  const handleClickCategoria = id => {
    const categoria = categorias.filter( categoria => categoria.id === id)[0]
    // console.log(categoria);
    setCategoriaActual(categoria)
  };

  return (
    <ComidaContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
      }}
    >
      {children}
    </ComidaContext.Provider>
  );
};

export { ComidaProvider };
export default ComidaContext;
