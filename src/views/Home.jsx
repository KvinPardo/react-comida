import Producto from "../components/Producto";
import { productos } from "../data/productos";
import useComida from "../hooks/useComida";

const Home = () => {
  // console.log(productos);
  const { categoriaActual } = useComida();

  return (
    <div>
      <h1 className="text-4xl">{categoriaActual.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido</p>

      <div className="grid gap-x-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-y-6">
        {productos.map((producto) => (
          <Producto key={producto.imagen} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Home;
