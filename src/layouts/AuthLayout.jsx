import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="max-w-4xl m-auto mt-10 lg:mt-28 flex flex-col lg:flex-row justify-center items-center">
      <img 
      src="../img/logo.svg" 
      alt="logo" 
      className="max-w-xs"
      />
      <div className="p-10 w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
