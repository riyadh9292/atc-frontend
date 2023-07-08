import React from "react";
import Navbar from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;