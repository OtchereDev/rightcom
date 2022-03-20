import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SSRProvider from 'react-bootstrap/SSRProvider';

const MainLayout = ({ children }) => {
  return (
    <SSRProvider>
      <NavBar />

      {children}

      <Footer />
    </SSRProvider>
  );
};

export default MainLayout;
