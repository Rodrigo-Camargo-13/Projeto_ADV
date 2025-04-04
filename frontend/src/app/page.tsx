"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>LegalMind Pro - Transforme seu Escritório com IA Jurídica</title>
        <meta name="description" content="Plataforma jurídica com inteligência artificial para gestão de processos, clientes, documentos e relatórios. Aumente produtividade com tecnologia." />
        <meta property="og:title" content="LegalMind Pro - IA Jurídica Integrada" />
        <meta property="og:description" content="Software jurídico com inteligência artificial para transformar seu escritório." />
        <meta property="og:image" content="https://legalmindpro.com/logo_data.png" />
        <meta property="og:url" content="https://legalmindpro.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <video className={styles.backgroundVideo} autoPlay muted loop playsInline>
        <source src="/background_2.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      <div className={styles.overlay} />

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src="/logo_data.png" alt="LegalMind Logo" width={200} height={50} priority />
        </div>
        <nav className={styles.nav}>
          <a href="/">Início</a>
          <a href="/login">Acessar Plataforma</a>
          <a href="/blog">Blog Jurídico</a>
          <a href="/landing">Solução Jurídica</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <h1>
          O Futuro da Advocacia é <span className={styles.highlight}>Agora</span>
        </h1>
        <p>
          Bem-vindo ao <strong>LegalMind</strong>, a plataforma que transforma seu escritório em uma máquina de produtividade e inovação.
        </p>
        <a href="/cadastro" className={styles.ctaButton}>Comece Agora</a>
      </section>

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

      <footer className={styles.footer}>
        <p>© 2025 LegalMind • Desenvolvido por DataAccent</p>
      </footer>
    </div>
  );
}
