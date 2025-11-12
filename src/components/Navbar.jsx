import { Link } from "react-router-dom";
import "../assets/css/style.css";

const MenuItem = ({ nome, descricao, link, menuAtual }) => {
  let classe = "nav-link";

  if (menuAtual == nome) {
    classe += " active";
  }

  return (
    <li className="nav-item">
      <Link className={classe} to={link}>
        {descricao}
      </Link>
    </li>
  )
}

const Navbar = ({ pgAtivo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand text-white text-decoration-none" to="/">
          Agro Conecta
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <MenuItem nome="beneficios" descricao="Benefícios" link="/beneficios" menuAtual={pgAtivo} />
            <MenuItem nome="publico-alvo" descricao="Público-Alvo" link="/publico-alvo" menuAtual={pgAtivo} />
            <MenuItem nome="clima" descricao="Clima" link="/clima" menuAtual={pgAtivo} />
            <MenuItem nome="cadastro" descricao="Cadastro" link="/cadastro" menuAtual={pgAtivo} />
            <MenuItem nome="fale-conosco" descricao="Fale Conosco" link="/fale-conosco" menuAtual={pgAtivo} />
            <MenuItem nome="area-atuacao" descricao="Área de Atuação" link="/area-atuacao" menuAtual={pgAtivo} />
            <MenuItem nome="impacto" descricao="Impacto Social" link="/impacto" menuAtual={pgAtivo} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
