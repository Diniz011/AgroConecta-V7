// src/pages/Beneficios.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import bannerSobre from "../assets/img/banner_sobre.png";
import imgCooperativismo from "../assets/img/cooperativismo.png";
import imgQualidade from "../assets/img/qualidade.png";
import imgDistribuicao from "../assets/img/distribuicao.png";
import imgEducacao from "../assets/img/educacao.png";
import Pagina from "../components/Pagina";

export default function Beneficios() {
  return (
    <Pagina nome="beneficios" descricao="Benefícios">
      {/* Banner */}
      <div className="banner">
        <img src={bannerSobre} alt="AgroConecta - Benefícios" />
      </div>

      {/* Cenário atual */}
      <div className="container-informacoes">
        <div><h3>Cenário atual</h3></div>
        <div>
          <p>
            Segundo Bárbara Mangiaterra, CEO da CompartVeg em fala ao site
            Eattae (EATTAE, 2022) dentre vários problemas que os pequenos
            agricultores enfrentam os principais são: dificuldade de
            comercialização da produção, dificuldades logísticas e dificuldade
            de acesso aos tratamentos fitossanitários.
          </p>
          <p>
            Além disso, segundo dados do IBGE (2023) 21,6 milhões de domicílios
            são afetados por algum grau de insegurança alimentAR. No âmbito
            dos alimentos como frutas e legumes, segundo o censo de 2017, os
            pequenos agricultores somam 77% dos produtores rurais no Brasil —
            o que mostra que as dificuldades enfrentadas por eles impactam
            negativamente tanto a economia dos agricultores quanto a segurança
            alimentar da população.
          </p>
        </div>
      </div>

      {/* Solução */}
      <div className="container-informacoes">
        <div>
          <h3>Solução</h3>
          <p>Sua estrutura integrará quatro pilares:</p>
        </div>

        {/* Pilar 1 */}
        <div className="item">
          <div>
            <img src={imgCooperativismo} alt="Imagem simbolizando o cooperativismo" />
          </div>
          <div>
            <h4>Rede de Cooperativas Digitais</h4>
            <ul>
              <li>Cadastro de fornecedores e produtores.</li>
              <li>Organização de cooperativas.</li>
              <li>Compartilhamento de recursos e logística.</li>
            </ul>
          </div>
        </div>

        {/* Pilar 2 */}
        <div className="item">
          <div>
            <img src={imgQualidade} alt="Monitoramento e qualidade" />
          </div>
          <div>
            <h4>Monitoramento e qualidade</h4>
            <ul>
              <li>Rastreamento de produção agrícola.</li>
              <li>Indicadores de qualidade.</li>
              <li>Alertas para evitar desperdícios.</li>
              <li>Otimização do tempo de colheita.</li>
            </ul>
          </div>
        </div>

        {/* Pilar 3 */}
        <div className="item">
          <div>
            <img src={imgDistribuicao} alt="Distribuição inteligente" />
          </div>
          <div>
            <h4>Distribuição inteligente</h4>
            <ul>
              <li>Conexão entre famílias e cooperativas.</li>
              <li>Implementação de rotas para minimizar perdas e custos.</li>
            </ul>
          </div>
        </div>

        {/* Pilar 4 */}
        <div className="item">
          <div>
            <img src={imgEducacao} alt="Engajamento e educação" />
          </div>
          <div>
            <h4>Engajamento e educação</h4>
            <ul>
              <li>Chat colaborativo para troca de experiências entre agricultores.</li>
              <li>Dicas sobre aproveitamento eficiente dos alimentos.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impacto esperado */}
      <div className="container-informacoes">
        <div><h3>Impacto Esperado</h3></div>
        <div>
          <p>O AgroConecta deve levar a:</p>
          <ul>
            <li>Menos desperdício de alimentos com melhor planejamento e distribuição.</li>
            <li>Mais oportunidades de mercado para pequenos produtores.</li>
            <li>Melhor acesso a alimentos para famílias em vulnerabilidade.</li>
            <li>Contribuição direta ao ODS 2: segurança alimentar e agricultura sustentável.</li>
          </ul>
        </div>
      </div>
    </Pagina>
  );
}