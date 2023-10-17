import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import WithHeader from "./template/WithHeader";
import theme from "./style/theme";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/AdminLogin";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={WithHeader(<Home />)} />
        <Route path="/login" element={WithHeader(<Login/>)}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
