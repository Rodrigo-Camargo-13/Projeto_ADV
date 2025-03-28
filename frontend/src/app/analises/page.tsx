"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./Analises.css";

import logo from "/public/logo_data.png";
import analiseAvancadaIcon from "/public/analise_avancada.png";
import analiseDocumentosIcon from "/public/analise_documentos.png";
import analiseJurisprudenciaIcon from "/public/analise_jurisprudencia.png";
import analiseRiscosIcon from "/public/analise_riscos.png";
import userIcon from "/public/user_icon.png";

const Analises = () => {
  const router = useRouter();

  return (
    <div className="analises-page">
      <aside className="analises-sidebar">
        <div className="analises-sidebar-logo">
          <Image src={logo} alt="Logo" width={120} height={50} priority />
        </div>
        <nav className="analises-sidebar-menu">
          <ul>
            <li onClick={() => router.push("/")}>Home</li>
            <li onClick={() => router.push("/dashboard")}>Painel Administrativo</li>
            <li onClick={() => router.push("/ia-avancada")}>Análise Avançada</li>
            <li onClick={() => router.push("/ocr-documentos")}>Análise de Documentos</li>
            <li onClick={() => router.push("/analise-jurisprudencia")}>Análise Jurisprudência</li>
            <li onClick={() => router.push("/analise-riscos")}>Análise de Riscos</li>
          </ul>
        </nav>
      </aside>

      <main className="analises-main-content">
        <header className="analises-header">
          <div className="analises-user-info">
            <Image src={userIcon} alt="User Avatar" width={40} height={40} priority />
            <span>Olá, seja bem-vindo!</span>
          </div>
        </header>

        <div className="analises-grid">
          <div className="analises-card" onClick={() => router.push("/ia-avancada")}>
            <Image src={analiseAvancadaIcon} alt="Análise Avançada" width={70} height={70} priority />
            <span>Análise Avançada</span>
          </div>

          <div className="analises-card" onClick={() => router.push("/ocr-documentos")}>
            <Image src={analiseDocumentosIcon} alt="Análise de Documentos" width={70} height={70} priority />
            <span>Análise de Documentos</span>
          </div>

          <div className="analises-card" onClick={() => router.push("/analise-jurisprudencia")}>
            <Image src={analiseJurisprudenciaIcon} alt="Análise de Jurisprudência" width={70} height={70} priority />
            <span>Análise de Jurisprudência</span>
          </div>

          <div className="analises-card" onClick={() => router.push("/analise-riscos")}>
            <Image src={analiseRiscosIcon} alt="Análise de Riscos" width={70} height={70} priority />
            <span>Análise de Riscos</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analises;
