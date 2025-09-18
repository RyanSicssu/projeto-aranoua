import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Consulta() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Consulta Online</h1>
      <textarea placeholder="Descreva seus sintomas..." className="input" rows="5"></textarea>
      <button onClick={() => navigate("/relatorio")} className="btn">
        Encaminhar para Médico
      </button>
    </div>
  );
}

export default Consulta;
