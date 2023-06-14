import { useState } from "react";
import "./style/style.css";

import { MainLayaut } from "./layaut/MainLayaut";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Card } from "./pages/card/card";
import { Admin } from "./pages/admin/Admin";
function App() {
  return (
    <>
      <MainLayaut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </MainLayaut>
    </>
  );
}

export default App;
