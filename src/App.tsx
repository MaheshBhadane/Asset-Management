import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/assets/Header";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Services />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
