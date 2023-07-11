import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1 className="text-4xl">Inicia Sesión</h1>

      <div className="bg-white shadow-xl rounded-md mt-10 px-5 py-10">
        <form>
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
          <div className="">
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

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase fonbold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/registro">¿No tienes cuenta? Crea una.</Link>
      </nav>
    </div>
  );
};

export default Login;
