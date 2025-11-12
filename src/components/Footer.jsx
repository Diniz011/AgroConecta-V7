import { Link } from "react-router-dom";

// Footer

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Agro Conecta</h5>
                        <p>Conectando o campo ao mundo digital</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Links Rápidos</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="text-white text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/beneficios"
                                    className="text-white text-decoration-none"
                                >
                                    Benefícios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/publico-alvo"
                                    className="text-white text-decoration-none"
                                >
                                    Público-alvo
                                </Link>
                            </li>
                            <li>
                                <Link to="/clima" className="text-white text-decoration-none">
                                    Clima
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cadastro"
                                    className="text-white text-decoration-none"
                                >
                                    Cadastro
                                </Link>
                            </li>
                            <li>
                                <Link to="/impacto" className="text-white text-decoration-none">
                                    Impacto Social
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contato</h5>
                        <p>
                            contato@agroconecta.com.br
                            <br />
                            (11) 99999-8888
                        </p>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; 2025 Agro Conecta. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
