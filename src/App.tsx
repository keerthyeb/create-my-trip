import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import WithHeader from "./template/WithHeader";
import theme from "./style/theme";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/AdminLogin";
import ThankYou from "./pages/ThankYou/ThankYou";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={WithHeader(<Home />)} />
        <Route path="/login" element={WithHeader(<Login />)} />
        <Route path="/thankyou" element={WithHeader(<ThankYou />)} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
