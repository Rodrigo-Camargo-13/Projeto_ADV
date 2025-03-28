"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.page}>
      {/* VÍDEO DE FUNDO */}
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        id="video-bg"
      >
        <source src="/background_2.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* ESCURECIMENTO SOBRE O VÍDEO */}
      <div className={styles.overlay} />

      {/* CABEÇALHO */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo_data.png"
            alt="LegalMind Logo"
            width={200}
            height={50}
            priority
          />
        </div>
        <nav className={styles.nav}>
          <a href="/">Início</a>
          <a href="/login">Acessar Plataforma</a>
          <a href="/blog">Blog Jurídico</a>
        </nav>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          O Futuro da Advocacia é <span className={styles.highlight}>Agora</span>
        </h1>
        <p>
          Bem-vindo ao <strong>LegalMind</strong>, a plataforma que transforma seu escritório em uma máquina de produtividade e inovação.
        </p>
        <a href="/cadastro" className={styles.ctaButton}>Comece Agora</a>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>🔐 Segurança Avançada</h3>
          <p>Criptografia adaptativa, blockchain e proteção de dados sensíveis em tempo real.</p>
        </div>
        <div className={styles.feature}>
          <h3>🤖 IA Jurídica Integrada</h3>
          <p>Automação de contratos, análises preditivas, geração de petições e muito mais com IA.</p>
        </div>
        <div className={styles.feature}>
          <h3>📊 Gestão Estratégica</h3>
          <p>BI jurídico, dashboards de performance e relatórios inteligentes para tomadas de decisão.</p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className={styles.footer}>
        <p>© 2025 LegalMind • Desenvolvido por DataAccent</p>
      </footer>
    </div>
  );
}
