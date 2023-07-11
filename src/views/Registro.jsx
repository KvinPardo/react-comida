import { Link } from "react-router-dom";



const Registro = () => {
  return (
    <div>
      <h1 className="text-4xl">Crea tu cuenta</h1>
      <p>Llena el formulario</p>

      <div className="bg-white shadow-xl rounded-md mt-10 px-5 py-10">
        <form>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 w-full p-3 bg-gray-50 outline-none"
              name="name"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full p-3 bg-gray-50 outline-none"
              name="email"
              placeholder="Tu Email"
            />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 w-full p-3 bg-gray-50 outline-none"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password_confirmation">
              Repetir Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 w-full p-3 bg-gray-50 outline-none"
              name="password"
              placeholder="Repetir password"
            />
          </div>
          <input
            type="submit"
            value="Crear cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase fonbold cursor-pointer"
          />
        </form>
      </div>
      <nav className="mt-5">
        <Link to="/auth/login">Ya tienes cuenta? Inicia Sesión.</Link>
      </nav>
    </div>
  );
};

export default Registro;
