import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProviderComponent } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AuthContextProviderComponent>
          <ErrorBoundary> 
            <App />
          </ErrorBoundary>
        </AuthContextProviderComponent>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

