import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Outlet />
      {location.pathname === "/cart" || location.pathname === "/order" ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
};

export default RootLayout;
