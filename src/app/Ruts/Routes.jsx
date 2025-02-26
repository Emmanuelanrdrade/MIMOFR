"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
const Rutas = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Rutas;
