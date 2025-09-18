import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Relatorio() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Relatório Médico</h1>
      <p>Paciente encaminhado para consulta presencial se necessário.</p>
      <button onClick={() => navigate("/")} className="btn">
        Voltar ao Login
      </button>
    </div>
  );
}

export default Relatorio;
