import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/navbar/Navbar";

const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
