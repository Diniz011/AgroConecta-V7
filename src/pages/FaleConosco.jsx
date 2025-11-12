// src/pages/FaleConosco.jsx
import React, { useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Pagina from "../components/Pagina";

export default function FaleConosco() {
  const formRef = useRef(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Sucesso (substitua por fetch/axios se quiser enviar)
    alert("Mensagem enviada com sucesso!");
    form.reset();
    setValidated(false);
  }, []);

  return (
    <Pagina nome="fale-conosco" descricao="Fale Conosco">
      <div className="container mt-5 p-0">
        <h2>Fale Conosco</h2>
        <p>Estamos aqui para ajudar você a conectar-se com o mundo agrícola</p>
      </div>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row">
            {/* Info */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="contact-info">
                <h3 className="mb-4">Informações de Contato</h3>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h5>Nosso Endereço</h5>
                    <p>Avenida Rural, 1234, São Paulo - SP</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <h5>Telefone</h5>
                    <p>(11) 99999-8888</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p>contato@agroconecta.com.br</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div>
                    <h5>Horário de Atendimento</h5>
                    <p>Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>

                <div className="social-links mt-4">
                  <a href="#" className="social-icon" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-icon" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="social-icon" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="social-icon" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="social-icon" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-7">
              <div className="contact-form-container">
                <h3 className="mb-4">Envie uma Mensagem</h3>
                <form
                  id="contactForm"
                  className={`contact-form ${validated ? "was-validated" : ""}`}
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        id="nome"
                        type="text"
                        className="form-control"
                        placeholder="Seu Nome"
                        required
                        minLength={2}
                      />
                      <div className="invalid-feedback">Informe seu nome.</div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Seu Email"
                        required
                      />
                      <div className="invalid-feedback">Digite um e-mail válido.</div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Seu Telefone"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <select className="form-select" defaultValue="">
                        <option value="" disabled>Assunto</option>
                        <option>Dúvidas sobre serviços</option>
                        <option>Suporte técnico</option>
                        <option>Parcerias</option>
                        <option>Outros</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <textarea
                      id="mensagem"
                      className="form-control"
                      rows="6"
                      placeholder="Sua Mensagem"
                      minLength={30}
                      maxLength={500}
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      A mensagem deve ter entre 30 e 500 caracteres.
                    </div>
                  </div>

                  <button id="enviar-mensagem" type="submit" className="btn btn-success">
                    <i className="bi bi-send"></i> Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-container">
            <iframe
              title="Mapa - São Paulo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488551751!2d-46.92459743594929!3d-23.68153120118435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1647283221154!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Perguntas Frequentes</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="accordion" id="accordionFaq1">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Como posso me cadastrar na plataforma?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFaq1"
                  >
                    <div className="accordion-body">
                      Para se cadastrar, basta acessar a página de{" "}
                      <Link to="/cadastro" className="text-decoration-none">Cadastro</Link>, preencher todos os
                      campos necessários e confirmar seu email. O processo é
                      rápido e simples.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      Quais são os benefícios de usar o Agro Conecta?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaq1"
                  >
                    <div className="accordion-body">
                      O Agro Conecta oferece diversos benefícios como acesso a
                      informações de mercado em tempo real, conexão com
                      compradores e fornecedores, assistência técnica e muito
                      mais. Visite nossa página de{" "}
                      <Link to="/beneficios" className="text-decoration-none">Benefícios</Link> para saber mais.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="col-lg-6">
              <div className="accordion" id="accordionFaq2">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      Como funciona o suporte técnico?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaq2"
                  >
                    <div className="accordion-body">
                      Nossa equipe de suporte está disponível de segunda a
                      sexta, das 8h às 18h, por telefone, email ou chat. Além
                      disso, oferecemos assistência técnica remota e presencial
                      para produtores rurais.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                    >
                      O aplicativo está disponível para quais dispositivos?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaq2"
                  >
                    <div className="accordion-body">
                      Nosso aplicativo está disponível para download na App
                      Store (iOS) e Google Play Store (Android). Além disso,
                      você pode acessar todas as funcionalidades também pelo
                      nosso site.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Pagina>
  );
}