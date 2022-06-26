import React from "react";
import Navbar from "./Navbar/Navbar";
import Topside from "./Navbar/TopSite";
import Saidbar from "./Saidbar/Saidbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <Topside />
        <Navbar />
        <Saidbar />
      </div>
      <div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
