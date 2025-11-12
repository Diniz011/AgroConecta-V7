// src/pages/Impacto.jsx
import { useEffect, useMemo, useState } from "react";
import Pagina from "../components/Pagina";

/**
 * Assumptions (ajustáveis no topo para a banca):
 * - PORCAO_POR_PESSOA_DIA_KG: média de alimento por pessoa/dia (0.5 kg é referência comum)
 * - MEDIA_PESSOAS_POR_FAMILIA: tamanho médio familiar (3.5 é uma boa aproximação)
 * - FATOR_CO2E_POR_KG_DESPERDICIO: 1 kg de alimento desperdiçado ~ 2.5 kg CO2e (estimativa usada em literatura)
 *
 * Você pode alterar esses números facilmente para cenários diferentes.
 */
const PORCAO_POR_PESSOA_DIA_KG = 0.5;
const MEDIA_PESSOAS_POR_FAMILIA = 3.5;
const FATOR_CO2E_POR_KG_DESPERDICIO = 2.5;

const number = (v, d = 0) =>
  new Intl.NumberFormat("pt-BR", { maximumFractionDigits: d }).format(v ?? 0);

export default function Impacto() {
  const [kgDisponiveis, setKgDisponiveis] = useState(100);        // kg de alimentos para distribuição
  const [diasSuporte, setDiasSuporte] = useState(7);               // por quantos dias deseja calcular
  const [desperdicioEvitadoKg, setDesperdicioEvitadoKg] = useState(50); // kg que deixariam de ser perdidos
  const [metaFamilias, setMetaFamilias] = useState(30);            // meta para comparar desempenho

  // Carrega último estado do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("calcImpacto");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setKgDisponiveis(parsed.kgDisponiveis ?? 100);
        setDiasSuporte(parsed.diasSuporte ?? 7);
        setDesperdicioEvitadoKg(parsed.desperdicioEvitadoKg ?? 50);
        setMetaFamilias(parsed.metaFamilias ?? 30);
      } catch (e) {
        // noop: if parsing fails, keep defaults but log to console for debugging
        // This satisfies ESLint's no-empty rule.
        console.error("Failed to parse calcImpacto from localStorage:", e);
      }
    }
  }, []);

  // Salva no localStorage
  useEffect(() => {
    localStorage.setItem(
      "calcImpacto",
      JSON.stringify({ kgDisponiveis, diasSuporte, desperdicioEvitadoKg, metaFamilias })
    );
  }, [kgDisponiveis, diasSuporte, desperdicioEvitadoKg, metaFamilias]);

  // Cálculos principais
  const resultados = useMemo(() => {
    const pessoasPorDia = kgDisponiveis / PORCAO_POR_PESSOA_DIA_KG;
    const familiasPorDia = pessoasPorDia / MEDIA_PESSOAS_POR_FAMILIA;

    const pessoasNoPeriodo = pessoasPorDia * diasSuporte;
    const familiasNoPeriodo = familiasPorDia * diasSuporte;

    const refeicoesGeradas = pessoasNoPeriodo; // 1 refeição/pessoa/dia (ajustável se quiser)
    const co2Evitado = desperdicioEvitadoKg * FATOR_CO2E_POR_KG_DESPERDICIO;

    const percentualMeta = metaFamilias > 0 ? (familiasNoPeriodo / metaFamilias) * 100 : 0;

    return {
      pessoasPorDia,
      familiasPorDia,
      pessoasNoPeriodo,
      familiasNoPeriodo,
      refeicoesGeradas,
      co2Evitado,
      percentualMeta,
    };
  }, [kgDisponiveis, diasSuporte, desperdicioEvitadoKg, metaFamilias]);

  return (
    <Pagina nome="Calculadora de Impacto Social">
      <div className="row g-4">
        {/* Formulário */}
        <div className="col-12 col-lg-5">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Parâmetros</h5>

              <div className="mb-3">
                <label className="form-label">Alimentos disponíveis (kg)</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  className="form-control"
                  value={kgDisponiveis}
                  onChange={(e) => setKgDisponiveis(parseFloat(e.target.value) || 0)}
                />
                <div className="form-text">
                  Quantidade total que podemos distribuir por dia.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Período (dias)</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  className="form-control"
                  value={diasSuporte}
                  onChange={(e) => setDiasSuporte(parseInt(e.target.value) || 1)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Desperdício evitado (kg)</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  className="form-control"
                  value={desperdicioEvitadoKg}
                  onChange={(e) => setDesperdicioEvitadoKg(parseFloat(e.target.value) || 0)}
                />
                <div className="form-text">
                  Estimativa de alimento que não será perdido.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Meta de famílias no período</label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  className="form-control"
                  value={metaFamilias}
                  onChange={(e) => setMetaFamilias(parseInt(e.target.value) || 0)}
                />
              </div>

              <div className="small text-muted">
                <strong>Suposições atuais:</strong> {PORCAO_POR_PESSOA_DIA_KG} kg/pessoa/dia,
                {` `}{MEDIA_PESSOAS_POR_FAMILIA} pessoas/família, {FATOR_CO2E_POR_KG_DESPERDICIO} kg CO₂e por kg desperdiçado evitado.
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="col-12 col-lg-7">
          <div className="row g-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3">Impacto no Período</h5>
                  <div className="row text-center">
                    <div className="col-6 col-md-3">
                      <div className="fw-semibold">Pessoas/Dia</div>
                      <div className="display-6">{number(resultados.pessoasPorDia)}</div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="fw-semibold">Famílias/Dia</div>
                      <div className="display-6">{number(resultados.familiasPorDia, 1)}</div>
                    </div>
                    <div className="col-6 col-md-3 mt-4 mt-md-0">
                      <div className="fw-semibold">Pessoas no Período</div>
                      <div className="display-6">{number(resultados.pessoasNoPeriodo)}</div>
                    </div>
                    <div className="col-6 col-md-3 mt-4 mt-md-0">
                      <div className="fw-semibold">Famílias no Período</div>
                      <div className="display-6">{number(resultados.familiasNoPeriodo, 1)}</div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row text-center">
                    <div className="col-6">
                      <div className="fw-semibold">Refeições Geradas</div>
                      <div className="h2">{number(resultados.refeicoesGeradas)}</div>
                      <div className="text-muted small">
                        1 refeição por pessoa/dia
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="fw-semibold">CO₂e Evitado (kg)</div>
                      <div className="h2">{number(resultados.co2Evitado, 1)}</div>
                      <div className="text-muted small">
                        {FATOR_CO2E_POR_KG_DESPERDICIO} kg CO₂e / kg desperdiçado
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div>
                    <div className="d-flex justify-content-between">
                      <span className="fw-semibold">Progresso vs. Meta de Famílias</span>
                      <span>{number(resultados.percentualMeta, 1)}%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                      <div
                        className={`progress-bar ${
                          resultados.percentualMeta >= 100 ? "bg-success" : "bg-info"
                        }`}
                        style={{ width: `${Math.min(100, resultados.percentualMeta)}%` }}
                      />
                    </div>
                    <div className="small text-muted mt-1">
                      Meta: {number(metaFamilias)} famílias • Previsto: {number(resultados.familiasNoPeriodo, 1)}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Dica/Explicação */}
            <div className="col-12">
              <div className="alert alert-secondary mb-0">
                <strong>Como interpretar:</strong> os indicadores combinam capacidade de alimento,
                período e supostos médios para traduzir a operação em impacto social tangível.
                Ajuste os parâmetros e as suposições para diferentes cenários de pitch.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Pagina>
  );
}