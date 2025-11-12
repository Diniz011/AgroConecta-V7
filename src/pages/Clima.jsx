import bannerClima from "../assets/img/carrosel_img5.png";
import ClimaWidget from "../components/ClimaWidget";
import Pagina from "../components/Pagina";

export default function Clima() {
  return (
    <Pagina nome="clima" descricao="Clima">
      {/* Banner */}
      <div className="mb-4 banner">
        <img src={bannerClima} alt="AgroConecta" />
      </div>

      {/* Texto informativo */}
      <div>
        <p>
          Estar informado sobre as condições climáticas é essencial para quem
          trabalha com cultivo. O clima influencia diretamente o desenvolvimento
          das plantas, o momento ideal para o plantio, irrigação, adubação e até
          a colheita. Chuvas em excesso, secas prolongadas ou geadas inesperadas
          podem comprometer toda uma produção. Por isso, acompanhar a previsão
          do tempo ajuda o produtor a tomar decisões mais seguras, prevenir
          perdas e aumentar a produtividade. Além disso, com informações
          precisas sobre o clima, é possível planejar melhor o uso de insumos,
          economizar recursos e proteger o solo e as plantas de danos
          climáticos. Ficar de olho no tempo não é apenas precaução, é
          estratégia para garantir um cultivo mais eficiente, sustentável e
          lucrativo.
        </p>
      </div>

      {/* Consulta do Clima */}
      <ClimaWidget />

      <br />
    </Pagina>
  );
}