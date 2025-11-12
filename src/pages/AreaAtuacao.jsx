// src/pages/PublicoAlvo.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MapaInterativoAtuacao from "../components/MapaInterativoAtuacao";
import Pagina from "../components/Pagina";

export default function AreaAtuacao() {
  return (
    <Pagina nome="area-atuacao" descricao="Área de Atuação">
      <div>
        <h3>Área de Atuação</h3>
      </div>

      <div>
        <p>
          A AgroConecta já conta com produtores e fornecedores cadastrados em
          Minas Gerais, Pará e São Paulo. Essa presença amplia as
          oportunidades de negócios e garante mais opções de qualidade para
          produtores e parceiros da região.
        </p>
      </div>

      <div>
        <MapaInterativoAtuacao
          onMapClick={({ nome, sigla }) =>
            alert(`Clicked on ${nome} (${sigla})`)
          }
        />
      </div>
    </Pagina>
  );
}
