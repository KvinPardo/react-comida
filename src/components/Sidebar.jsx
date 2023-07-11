import useComida from "../hooks/useComida";
import Categoria from "./Categoria";

const Sidebar = () => {

  const { categorias } = useComida();


  return (
    <aside className="lg:w-60">
      <div className="p-4 flex justify-center items-center">
        <img src="/img/logo.svg" alt="imagen-logo" className="w-40" />
      </div>

      <div className="">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>

      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-red-500 text-white w-full p-3 hover:bg-red-700"
        >
          Cancelar Orden
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
