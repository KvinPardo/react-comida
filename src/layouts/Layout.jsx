import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import Sidebar from "../components/Sidebar";
import Resume from "../components/Resume";
import useComida from "../hooks/useComida";
import ModalProducto from "../components/ModalProducto";

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
  const { modal, handleClickModal } = useComida();
  // console.log(modal);

  return (
    <>
      <div className="lg:flex">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet />
        </main>
        <Resume />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>
    </>
  );
};

export default Layout;
