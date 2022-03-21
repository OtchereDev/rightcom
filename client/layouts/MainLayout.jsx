import React from "react";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";
import SSRProvider from 'react-bootstrap/SSRProvider';
import Head from "next/head";

const MainLayout = ({ children }) => {
  return (
    <SSRProvider>
      <Head>
        <title>RightCom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      {children}

      <Footer />
    </SSRProvider>
  );
};

export default MainLayout;
