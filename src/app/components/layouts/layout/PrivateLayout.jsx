import React from "react";
import Navbar from "../header/header";
import Footer from "../footer/footer";

const PrivateLayout = ({ children }) => {
  // check is the token exists in session
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PrivateLayout;
