import { useContext } from "react";
import ComidaContext from "../context/ComidaProvider";

const useComida = () => {
  return useContext(ComidaContext);
};

export default useComida;
