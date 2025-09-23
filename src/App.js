import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Consulta from "./pages/Consulta";
import Relatorio from "./pages/Relatorio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />        {/* Página inicial */}
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/relatorio" element={<Relatorio />} />
      </Routes>
    </Router>
  );
}

export default App;

