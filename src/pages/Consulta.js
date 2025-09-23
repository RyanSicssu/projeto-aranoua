import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Consulta() {
  const navigate = useNavigate();

  return (
    <>
      <header className="navbar">
        E-Saúde IFAM
      </header>

      <div className="container">
        <div className="card">
          <h1>Consulta Online</h1>
          <textarea
            placeholder="Descreva seus sintomas..."
            className="input"
            rows="5"
          ></textarea>
          <button onClick={() => navigate("/relatorio")} className="btn">
            Encaminhar para Médico
          </button>
        </div>
      </div>
    </>
  );
}

export default Consulta;


