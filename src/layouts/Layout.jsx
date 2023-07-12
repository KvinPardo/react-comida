import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import Sidebar from "../components/Sidebar";
import useComida from "../hooks/useComida";
import ModalProducto from "../components/ModalProducto";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resumen from "../components/Resumen";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Layout = () => {
  const { modal } = useComida();
  // console.log(modal);

  return (
    <>
      <div className="lg:flex">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet />
        </main>
        <Resumen />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>

      <ToastContainer />
    </>
  );
};

export default Layout;
