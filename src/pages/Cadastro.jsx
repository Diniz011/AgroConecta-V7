// src/pages/Cadastro.jsx
import { useCallback, useRef, useState } from "react";
import bannerCadastro from "../assets/img/banner_cadastro.png";
import Pagina from "../components/Pagina";

export default function Cadastro() {
  const formRef = useRef(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Validação HTML5 + regra extra de confirmação de senha
    const senha = form.querySelector("#senha")?.value || "";
    const confirmar = form.querySelector("#confirmarSenha")?.value || "";
    const confirmarInput = form.querySelector("#confirmarSenha");
    if (confirmarInput) {
      if (senha !== confirmar) {
        confirmarInput.setCustomValidity("As senhas não coincidem.");
      } else {
        confirmarInput.setCustomValidity("");
      }
    }

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Sucesso: aqui você pode enviar os dados (fetch/axios)
      alert("Cadastro enviado com sucesso!");
      form.reset();
      setValidated(false);
      return;
    }
    setValidated(true);
  }, []);

  return (
    <Pagina nome="cadastro" descricao="Cadastro">
      {/* Banner */}
      <div className="mb-4 banner">
        <img src={bannerCadastro} alt="AgroConecta" />
      </div>

      {/* Formulário */}
      <h2 className="mb-4">Cadastre-se para fazer parte da rede Agro Conecta</h2>

      <form
        id="formCadastro"
        className={`needs-validation ${validated ? "was-validated" : ""}`}
        noValidate
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome completo</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            required
            minLength={3}
          />
          <div className="invalid-feedback">Informe seu nome (mínimo 3 letras).</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input type="email" className="form-control" id="email" required />
          <div className="invalid-feedback">Digite um e-mail válido.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="senha" className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            id="senha"
            required
            minLength={6}
          />
          <div className="invalid-feedback">A senha deve ter no mínimo 6 caracteres.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha</label>
          <input type="password" className="form-control" id="confirmarSenha" required />
          <div className="invalid-feedback">As senhas não coincidem.</div>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="termos" required />
          <label className="form-check-label" htmlFor="termos">
            Aceito os termos de uso
          </label>
          <div className="invalid-feedback">Você precisa aceitar os termos.</div>
        </div>

        <button type="submit" className="btn btn-success">
          <i className="bi bi-check-lg"></i> Cadastrar
        </button>
      </form>

      <br />
    </Pagina>
  );
}