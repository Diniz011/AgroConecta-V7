import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulação de autenticação "Agricultor" e "Família"
    if (email === "agricultor@agro.com" && senha === "123") {
      localStorage.setItem("userType", "agricultor");
      navigate("/dashboard");
      return;
    }

    if (email === "familia@agro.com" && senha === "123") {
      localStorage.setItem("userType", "familia");
      navigate("/dashboard");
      return;
    }

    alert("Credenciais inválidas. Tente novamente.");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #0f8a27, #79d47d)" }}>
      <div className="card p-4 shadow-lg" style={{ width: "380px", borderRadius: "20px" }}>
        <h3 className="text-center mb-4 text-success fw-bold">
          <i className="bi bi-person-circle me-2"></i>
          Login
        </h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-success fw-semibold">Email</label>
            <input
              type="email"
              className="form-control border-success"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-success fw-semibold">Senha</label>
            <input
              type="password"
              className="form-control border-success"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 py-2 mt-2 fw-bold"
            style={{ borderRadius: "10px" }}
          >
            Entrar
          </button>
          <button
            type="button"
            className="w-100 py-2 mt-3 fw-bold d-flex align-items-center justify-content-center"
            style={{
              borderRadius: "10px",
              background: "#ffffff",
              border: "2px solid #0f8a27",
              color: "#0f8a27",
              gap: "10px",
            }}
            onClick={() => alert("Login com Google (fictício)")}
          >
            <i className="bi bi-google" style={{ fontSize: "1.3rem", color: "#0f8a27" }}></i>
            Entrar com Google
          </button>
        </form>

        <p className="text-center mt-3">
          <span className="text-muted">Não tem conta? </span>
          <a href="/cadastro" className="text-success fw-semibold text-decoration-none">
            Criar conta
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;