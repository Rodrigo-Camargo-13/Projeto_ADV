'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './landing.module.css';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>LegalMind Pro | Solução Completa para Escritórios de Advocacia</title>
        <meta name="description" content="Automatize contratos, petições, relatórios, análises preditivas e gerenciamento jurídico com IA. Veja como funciona." />
        <meta property="og:title" content="LegalMind Pro | Plataforma Jurídica com IA" />
        <meta property="og:description" content="Veja como o LegalMind está modernizando escritórios de advocacia com inteligência artificial." />
        <meta property="og:image" content="https://legalmindpro.com/logo_data.png" />
        <meta property="og:url" content="https://legalmindpro.com/landing" />
        <meta property="og:type" content="website" />
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            O Futuro da Advocacia é <span>Agora</span>
          </h1>
          <p className={styles.subtitle}>
            Bem-vindo ao <strong>LegalMind</strong>, a plataforma que transforma seu escritório em uma máquina de produtividade e inovação.
          </p>
          <a
            className={styles.cta}
            href="https://wa.me/5531998977237?text=Ol%C3%A1%2C+tenho+interesse+no+LegalMind+Pro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comece Agora
          </a>

          <div className={styles.videoDemo}>
            <video
              className={styles.video}
              src="/LegalMindPro.mp4"
              controls
              muted
              loop
              playsInline
              poster="/demo-screenshot.png"
            >
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>

          <blockquote className={styles.testimonial}>
            “Com o LegalMind ganhamos 2h por dia em produtividade e nunca mais perdemos um prazo.”
            <footer>— Dra. Camila Souza | Advocacia Souza & Campos</footer>
          </blockquote>
        </section>

        <section className={styles.features}>
          <h2>Como Funciona</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>📁 Gestão Completa de Processos</h3>
              <p>Cadastre, consulte e acompanhe processos com histórico, documentos e IA preditiva.</p>
            </div>
            <div className={styles.card}>
              <h3>📅 Agendamentos e Audiências</h3>
              <p>Organize reuniões, audiências e compromissos com alertas e integração automática.</p>
            </div>
            <div className={styles.card}>
              <h3>🧠 IA Jurídica Estratégica</h3>
              <p>Obtenha previsões de sucesso, análise SWOT, sugestões jurídicas e geração de documentos com IA.</p>
            </div>
            <div className={styles.card}>
              <h3>📊 Relatórios e BI</h3>
              <p>Acesse relatórios financeiros, de clientes e dashboards com indicadores estratégicos.</p>
            </div>
            <div className={styles.card}>
              <h3>🤝 Colaboração e Chat Jurídico</h3>
              <p>Trabalhe em equipe com kanban, controle de versão de documentos e chat jurídico integrado.</p>
            </div>
            <div className={styles.card}>
              <h3>📚 Blog e Notificações</h3>
              <p>Gerencie conteúdo jurídico e envie notificações inteligentes para sua equipe e clientes.</p>
            </div>
          </div>
        </section>

        <section className={styles.faq}>
          <h2>Perguntas Frequentes</h2>

          <details className={styles.faqItem}>
            <summary>O sistema é completo para o dia a dia de um escritório?</summary>
            <p>Sim! O LegalMind Pro cobre todas as frentes: processos, agendamentos, clientes, documentos, análises com IA, BI e colaboração.</p>
          </details>

          <details className={styles.faqItem}>
            <summary>Como a IA é utilizada no sistema?</summary>
            <p>Ela oferece previsões de resultados, análise SWOT, sugestão de argumentos e documentos, busca de jurisprudência e classificação de riscos.</p>
          </details>

          <details className={styles.faqItem}>
            <summary>O sistema possui integração com tribunais?</summary>
            <p>Sim, você pode realizar consultas automáticas de processos, mantendo seus dados sempre atualizados.</p>
          </details>

          <details className={styles.faqItem}>
            <summary>É possível trabalhar em equipe no sistema?</summary>
            <p>Sim, há recursos de kanban, controle de versão de documentos e chat interno entre usuários do escritório.</p>
          </details>

          <details className={styles.faqItem}>
            <summary>Como é feito o suporte e o onboarding?</summary>
            <p>Você recebe um onboarding completo com vídeo-aulas e suporte via WhatsApp, chat e e-mail todos os dias úteis.</p>
          </details>
        </section>
      </main>
    </>
  );
}
