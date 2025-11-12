import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Pagina = function ({ nome, descricao, children }) {
    return (
        <>
            <Navbar pgAtivo={nome} />

            <div className="container mt-5">
                {descricao &&
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={"/" + nome} className="text-decoration-none">Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{descricao}</li>
                        </ol>
                    </nav>
                }
                {children}
            </div>

            <Footer />
        </>
    );
}

export default Pagina;