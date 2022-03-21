import React, { createContext, useState } from "react";
import ErrorComponent from "../components/shared/ErrorComponent";

export const ErrorContext = createContext();

const ErrorContextProvider = ({ children }) => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Sorry, there was an error");
  const [type, setType] = useState("danger");

  const handleErrorClose = () => setShowError(() => false);
  return (
    <ErrorContext.Provider value={{ setErrorMessage, setShowError, setType }}>
      <ErrorComponent
        show={showError}
        message={errorMessage}
        handleClose={handleErrorClose}
        type={type}
      />
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
