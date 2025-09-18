import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Login() {
    const navigate = useNavigate();

    return (
        <>
            <header>Telemedicina IFAM</header>
            <div className="container">
                <h1>Login</h1>
                <input type="text" placeholder="Usuário" className="input" />
                <input type="password" placeholder="Senha" className="input" />
                <button onClick={() => navigate("/consulta")} className="btn">
                    Entrar
                </button>
            </div>
        </>
    );
}

export default Login;



