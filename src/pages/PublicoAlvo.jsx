// src/pages/PublicoAlvo.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import imgProdutor from "../assets/img/produtor-rural.jpg";
import imgFamilia from "../assets/img/familia-agricultura-familiar.jpg";
import imgParceria from "../assets/img/parceria.png";
import Pagina from "../components/Pagina";

export default function PublicoAlvo() {
  return (
    <Pagina nome="publico-alvo" descricao="Público-Alvo">
      <div><h3>Público-Alvo</h3></div>

      <div>
        <p>
          O projeto <strong>AgroConecta</strong> tem como missão unir
          tecnologia, empatia e inovação para transformar a relação entre quem
          produz e quem precisa. Nosso foco está em atender e conectar três
          principais grupos de interesse, promovendo impacto social e eficiência
          na distribuição de alimentos.
        </p>
      </div>

      {/* Bloco 1 */}
      <div>
        <div className="item-publico">
          <div>
            <img src={imgProdutor} alt="Produto Rural Plantando" />
          </div>
          <div className="text">
            <h3>Pequenos Produtores Rurais</h3>
            <p>
              Agricultores familiares e pequenos produtores enfrentam desafios
              como a falta de infraestrutura e dificuldades para escoar sua
              produção. O AgroConecta oferece visibilidade e acesso direto ao
              mercado consumidor.
            </p>
          </div>
        </div>
      </div>

      {/* Bloco 2 */}
      <div>
        <div className="item-publico">
          <div>
            <img src={imgFamilia} alt="Famílias com insegurança alimentar" />
          </div>
          <div className="text">
            <h3>Famílias em Situação de Insegurança Alimentar</h3>
            <p>
              Conectamos alimentos de qualidade a famílias que mais precisam,
              por meio de parcerias com entidades sociais e ações integradas de
              distribuição.
            </p>
          </div>
        </div>
      </div>

      {/* Bloco 3 */}
      <div>
        <div className="item-publico">
          <div>
            <img src={imgParceria} alt="Parcerias de Distribuição" />
          </div>
          <div className="text">
            <h3>Empresas, ONGs e Iniciativas</h3>
            <p>
              Parceiros estratégicos ajudam a viabilizar a aquisição, transporte
              e entrega dos alimentos de forma colaborativa, sustentável e
              eficiente.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p>
          Essa abordagem integrada fortalece a comunidade agrícola, combate o
          desperdício e cria soluções sustentáveis que conectam o campo às
          cidades de forma justa e inteligente.
        </p>
      </div>
    </Pagina>
  );
}