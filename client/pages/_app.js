import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import ErrorContextProvider from "../context/ErrorContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <MainLayout>
      <ErrorContextProvider>
        <Component {...pageProps} />
      </ErrorContextProvider>
    </MainLayout>
  );
}

export default MyApp;
