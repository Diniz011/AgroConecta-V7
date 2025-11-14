// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Pagina from "../components/Pagina";

// Import das imagens
import img1 from "../assets/img/carrosel_img1.png";
import img2 from "../assets/img/carrosel_img2.png";
import img3 from "../assets/img/carrosel_img3.png";
import img4 from "../assets/img/carrosel_img4.png";
import img5 from "../assets/img/carrosel_img5.png";

function Home() {
  return (
    <Pagina nome="Home">
      {/* Carrossel */}
      <div
        id="carouselExample"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Imagem 1" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Imagem 2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Imagem 3" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="Imagem 4" />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="Imagem 5" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Sobre */}
      <div className="mb-3">
        <h2>Sobre o Agro Conecta</h2>
        <p>
          O Agro Conecta é um projeto global que visa erradicar a fome no
          mundo por meio da conexão entre pequenos produtores rurais, famílias
          em situação de vulnerabilidade alimentar e empresas ou pessoas
          intermediárias. Nossa missão é criar uma rede sustentável que
          promova a distribuição justa e eficiente de alimentos.
        </p>
        <p>
          Com o uso de tecnologia e parcerias estratégicas, o Agro Conecta
          facilita o acesso a alimentos frescos e nutritivos, ao mesmo tempo
          em que apoia os pequenos produtores rurais, fortalecendo suas
          comunidades e gerando impacto positivo na economia local.
        </p>
      </div>

      {/* Saiba mais */}
      <div className="mb-4">
        <h3>Saiba mais</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cPbdc9-c0os?si=DilJ-5s-6t7s_9EX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="mt-3 d-flex flex-wrap gap-2">
          <Link to="/beneficios" className="btn btn-success">
            <i className="bi bi-bookmark-fill"></i> Benefícios
          </Link>
          <Link to="/publico-alvo" className="btn btn-success">
            <i className="bi bi-bullseye"></i> Público Alvo
          </Link>
          <Link to="/cadastro" className="btn btn-success">
            <i className="bi bi-person-fill-add"></i> Cadastre-se
          </Link>
          <Link to="/fale-conosco" className="btn btn-success">
            <i className="bi bi-telephone-fill"></i> Fale Conosco
          </Link>
          <Link to="/clima" className="btn btn-success">
            <i className="bi bi-cloud-fill"></i> Clima
          </Link>
          <Link to="/area-atuacao" className="btn btn-success">
            <i className="bi bi-cloud-fill"></i> Área de Atuação
          </Link>
          <Link to="/impacto" className="btn btn-success">
            <i className="bi bi-graph-up"></i> Impacto Social
          </Link>
          <Link to="/login" className="btn btn-success">
            <i className="bi-box-arrow-in-right"></i> Login
          </Link>
        </div>
      </div>
    </Pagina>
  );
}

export default Home;
