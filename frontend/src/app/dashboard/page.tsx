"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import "./dashboard.css";

import logo from "/public/logo_data.png";
import processos from "/public/processos.png";
import agendamentos from "/public/agendamentos.png";
import documentos from "/public/documento.png";
import relatorios from "/public/relatorios.png";
import userIcon from "/public/user_icon.png";
import analisesImg from "/public/analises.png";
import geradorImg from "/public/gerador_docs.png";
import clientesImg from "/public/clientes.png";
import colaboracaoImg from "/public/colaboracao.png";

const Dashboard = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("Usuário");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken: any = jwtDecode(token);
          setUserName(decodedToken.nome || decodedToken.username || "Usuário");
        } catch (error) {
          console.error("Erro ao decodificar o token:", error);
        }
      }
    }
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <img src={logo.src} alt="Logo" />
        </div>
        <div className="dashboard-user-info">
          <img src={userIcon.src} alt="User Avatar" />
          <span>Olá, {userName}</span>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-card" onClick={() => router.push("/processos")}>
            <img src={processos.src} alt="Processos" />
            <span>Processos</span>
          </div>
          <div className="dashboard-card" onClick={() => router.push("/agendamentos")}>
            <img src={agendamentos.src} alt="Agendamentos" />
            <span>Agendamentos</span>
          </div>
          <div className="dashboard-card" onClick={() => router.push("/documentos")}>
            <img src={documentos.src} alt="Documentos" />
            <span>Documentos</span>
          </div>
          <div className="dashboard-card" onClick={() => router.push("/relatorios")}>
            <img src={relatorios.src} alt="Relatórios" />
            <span>Relatórios</span>
          </div>
          <div className="dashboard-card" onClick={() => router.push("/analises")}>
            <img src={analisesImg.src} alt="Análises" />
            <span>Análises</span>
          </div>
          <div className="dashboard-card" onClick={() => router.push("/automacao-documentos")}>
            <img src={geradorImg.src} alt="Gerador de Documentos" />
            <span>Gerador de Documentos</span>
          </div>
          <div className="dashboard-card" onClick={() => router.push("/cadastro-clientes")}>
            <img src={clientesImg.src} alt="Cadastro de Clientes" />
            <span>Cadastro de Clientes</span>
          </div>
          <div className="dashboard-card" onClick={() => router.push("/admin-colaboracao")}>
            <img src={colaboracaoImg.src} alt="Colaboração" />
            <span>Painel Equipe</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
