import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      {/* <Navbar /> */}
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-blue-100 rounded py-2">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
