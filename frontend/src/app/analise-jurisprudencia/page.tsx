"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./analise-jurisprudencia.css";

// Ícones
import { AiFillHome, AiFillBell } from "react-icons/ai";
import { FaTachometerAlt, FaCalendarAlt, FaTrophy, FaCog } from "react-icons/fa";

export default function AnaliseJurisprudenciaPage() {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/analises");
  };

  return (
    <div className="layout">
      {/* Barra Lateral com Ícones */}
      <aside className="sidebar">
        <div className="navIcon"><AiFillHome size={24} /></div>
        <div className="navIcon"><AiFillBell size={24} /></div>
        <div className="navIcon"><FaTachometerAlt size={24} /></div>
        <div className="navIcon"><FaCalendarAlt size={24} /></div>
        <div className="navIcon"><FaTrophy size={24} /></div>
        <div className="navIcon"><FaCog size={24} /></div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="mainContent">
        {/* Barra Superior */}
        <div className="topBar">
          <span className="welcome">Olá, seja Bem Vindo</span>
          <button className="returnButton" onClick={handleReturn}>Retornar</button>
        </div>

        {/* Barra de Busca */}
        <div className="searchBar">
          <div className="searchItem">
            <label>Tipo de Processo</label>
            <input className="inputText" type="text" placeholder="" />
          </div>

          <div className="searchItem">
            <label>Termo de busca</label>
            <input className="inputText" type="text" placeholder="" />
          </div>

          <button className="searchButton">Buscar Jurisprudência</button>
        </div>

        {/* Container do Resultado */}
        <div className="resultContainer">
          <div className="resultTitle">Resultado da Análise</div>
          <div className="resultBox">
            {/* Conteúdo da análise aqui (exibido via IA ou API de jurisprudência) */}
          </div>
        </div>
      </main>
    </div>
  );
}
