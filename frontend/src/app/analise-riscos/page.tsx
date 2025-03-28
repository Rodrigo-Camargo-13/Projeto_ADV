"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./analise-riscos.css";
import { FaHome, FaBell, FaChartLine, FaCalendarAlt, FaTrophy, FaCog } from "react-icons/fa";

export default function AnaliseRiscos() {
  const router = useRouter();

  const [descricaoCaso, setDescricaoCaso] = useState("");
  const [analise, setAnalise] = useState({
    sucesso: "",
    pontosFortes: "",
    pontosFracos: "",
    riscos: "",
    oportunidades: "",
  });

  const analisarCaso = () => {
    if (!descricaoCaso.trim()) return;

    // Simulação de IA gerando uma resposta automática
    setAnalise({
      sucesso: `Probabilidade de sucesso: ${(Math.random() * 100).toFixed(1)}%`,
      pontosFortes: "Equipe experiente, base de clientes consolidada, modelo de negócio validado.",
      pontosFracos: "Falta de inovação, dificuldades com a concorrência, necessidade de captação de recursos.",
      riscos: "Mudanças na legislação, flutuações do mercado, concorrência agressiva.",
      oportunidades: "Crescimento do setor, adoção de novas tecnologias, expansão de mercado.",
    });
  };

  const handleReturn = () => {
    router.push("/analises");
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <nav className="sidebar">
        <ul>
          <li><FaHome size={20} /></li>
          <li><FaBell size={20} /></li>
          <li><FaChartLine size={20} /></li>
          <li><FaCalendarAlt size={20} /></li>
          <li><FaTrophy size={20} /></li>
          <li><FaCog size={20} /></li>
        </ul>
      </nav>

      {/* Conteúdo principal */}
      <div className="mainContent">
        <div className="header">
          <h3>Olá, seja Bem-Vindo</h3>
          <button className="returnButton" onClick={handleReturn}>Retornar</button>
        </div>

        {/* Campo de Entrada */}
        <div className="inputContainer">
          <label>Descreva o caso :</label>
          <input
            type="text"
            value={descricaoCaso}
            onChange={(e) => setDescricaoCaso(e.target.value)}
            placeholder="Digite a descrição do caso..."
          />
          <button className="submitButton" onClick={analisarCaso}>Submeter</button>
        </div>

        {/* Matriz SWOT */}
        <div className="swotContainer">
          <div className="swotItem">
            <h4>PONTOS FORTES</h4>
            <p>{analise.pontosFortes || "..."}</p>
          </div>
          <div className="swotItem">
            <h4>PONTOS FRACOS</h4>
            <p>{analise.pontosFracos || "..."}</p>
          </div>
          <div className="swotItem">
            <h4>RISCOS</h4>
            <p>{analise.riscos || "..."}</p>
          </div>
          <div className="swotItem">
            <h4>OPORTUNIDADES</h4>
            <p>{analise.oportunidades || "..."}</p>
          </div>
          <div className="centerBox">
            <h4>Descrição do processo:</h4>
            <p>{descricaoCaso || "Aguardando análise..."}</p>
            <p>{analise.sucesso}</p>
          </div>
          <span className="swotTag swotS">S</span>
          <span className="swotTag swotW">W</span>
          <span className="swotTag swotT">T</span>
          <span className="swotTag swotO">O</span>
        </div>
      </div>
    </div>
  );
}
