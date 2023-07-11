import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Resume from "../components/Resume";

const Layout = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
        <Outlet />
      </main>
      <Resume />
    </div>
  );
};

export default Layout;
