"use client";
import React from "react";
import "./blog.css";

export default function BlogJuridico() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <span className="issue-number">Edição Nº 10290</span>
        <h1 className="blog-title">BLOG JURÍDICO</h1>
        <span className="blog-category">Escritório & Direito</span>
      </header>

      <section className="blog-content">

        <div className="blog-section">
          <div className="text-block">
            <h2 className="highlight-title">COMO A LEI ESTÁ MUDANDO O MERCADO JURÍDICO</h2>
            <p>
              O setor jurídico está em constante evolução, e as novas reformas estão transformando a maneira como advogados e clientes lidam com processos.
              <br /><br />
              Com as inovações tecnológicas e mudanças regulatórias, é essencial estar atualizado para garantir que os direitos dos cidadãos sejam protegidos.
            </p>
          </div>
          <div className="video-container">
            <video controls>
              <source src="/posicao_1.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>

        <div className="blog-section">
          <div className="text-block">
            <h2 className="highlight-title">O FUTURO DA ADVOCACIA DIGITAL</h2>
            <p>
              A digitalização de documentos e audiências virtuais são tendências que já fazem parte do cotidiano dos escritórios jurídicos.
              <br /><br />
              Como isso afeta os clientes? A acessibilidade e rapidez nos processos agora são um diferencial competitivo para advogados e firmas.
            </p>
          </div>
          <div className="video-container">
            <video controls>
              <source src="/posicao_2.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>

      </section>

      <section className="reviews-section">
        <h2>O QUE NOSSOS CLIENTES DIZEM?</h2>
        <p>"Profissionais incríveis! Resolveram meu caso com agilidade e competência."</p>
        <p>"Atendimento excelente! Sempre disponíveis para esclarecer dúvidas."</p>
      </section>

      <footer className="blog-footer">
        <div className="contact-info">
          <p>📞 +55 31 99897-7237</p>
          <p>✉ comercial@dataaccent.com.br</p>
          <p>🌐 www.legalmindpro.com</p>
        </div>
      </footer>
    </div>
  );
}
