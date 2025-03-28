"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./relatorios.css";

import logo from "/public/logo_data.png";
import userIcon from "/public/user_icon.png";
import analiseAvancadaIcon from "/public/analise_avancada.png";
import analiseDocumentosIcon from "/public/analise_documentos.png";
import analiseJurisprudenciaIcon from "/public/analise_jurisprudencia.png";
import analiseRiscosIcon from "/public/analise_riscos.png";

const Relatorios = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="relatorios-page">
      {/* Sidebar */}
      <aside className="relatorios-sidebar">
        <div className="relatorios-sidebar-logo">
          <Image src={logo} alt="Logo" width={120} height={50} priority />
        </div>
        <nav className="relatorios-sidebar-menu">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/dashboard")}>Painel Administrativo</li>
            <li onClick={() => navigate("/relatorios/processos-status")}>Relatório de Processos</li>
            <li onClick={() => navigate("/relatorios/agenda-audiencias")}>Agenda de Audiências</li>
            <li onClick={() => navigate("/relatorios/financeiro-mensal")}>Relatório Financeiro</li>
            <li onClick={() => navigate("/relatorios/clientes")}>Relatório de Clientes</li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="relatorios-main-content">
        <header className="relatorios-header">
          <div className="relatorios-user-info">
            <Image src={userIcon} alt="User" width={35} height={35} />
            <span>Olá, seja bem-vindo!</span>
          </div>
        </header>

        <div className="relatorios-grid">
          <div className="relatorios-card" onClick={() => navigate("/relatorios/processos-status")}>
            <Image src={analiseAvancadaIcon} alt="Relatório Processos" width={70} height={70} priority />
            <span>Relatório de Processos</span>
          </div>

          <div className="relatorios-card" onClick={() => navigate("/relatorios/agenda-audiencias")}>
            <Image src={analiseDocumentosIcon} alt="Agenda Audiências" width={70} height={70} priority />
            <span>Agenda de Audiências</span>
          </div>

          <div className="relatorios-card" onClick={() => navigate("/relatorios/financeiro-mensal")}>
            <Image src={analiseJurisprudenciaIcon} alt="Financeiro" width={70} height={70} priority />
            <span>Relatório Financeiro</span>
          </div>

          <div className="relatorios-card" onClick={() => navigate("/relatorios/clientes")}>
            <Image src={analiseRiscosIcon} alt="Clientes" width={70} height={70} priority />
            <span>Relatório de Clientes</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Relatorios;
