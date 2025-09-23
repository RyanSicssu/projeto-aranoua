import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Relatorio() {
  const navigate = useNavigate();

  return (
    <>
      <header className="navbar">
        E-Saúde IFAM
      </header>

      <div className="container">
        <div className="card">
          <h1>Relatório Médico</h1>
          <p>Paciente encaminhado para consulta presencial se necessário.</p>

          <div className="dashboard">
            <div className="stat-card">
              <h3>Consultas Realizadas</h3>
              <p>25</p>
            </div>
            <div className="stat-card">
              <h3>Encaminhamentos</h3>
              <p>8</p>
            </div>
          </div>

          <button onClick={() => navigate("/")} className="btn">
            Voltar ao Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Relatorio;

