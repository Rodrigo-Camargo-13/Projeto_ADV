"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./ia-avancada.css";

import { AiFillHome, AiFillBell } from "react-icons/ai";
import { FaTachometerAlt, FaCalendarAlt, FaTrophy, FaCog } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { Chart, registerables } from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";
import jsPDF from "jspdf";

Chart.register(...registerables);

export default function IaAvancadaPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [explain, setExplain] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [userMessage, setUserMessage] = useState("");
  const [approvals, setApprovals] = useState<string[]>([]);

  const handleExplain = () => {
    setIsLoading(true);
    setTimeout(() => {
      setExplain("Baseado em 200 casos anteriores, a probabilidade de sucesso aumentou pela jurisprudência favorável.");
      setIsLoading(false);
    }, 1500);
  };

  const handleChatSend = () => {
    if (!userMessage.trim()) return;
    setChatMessages((prev) => [...prev, `Você: ${userMessage}`]);
    setUserMessage("");

    setTimeout(() => {
      setChatMessages((prev) => [...prev, "IA: Artigos 483 e 484 da CLT são comumente usados neste tipo de ação."]);
    }, 1000);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Resumo da Análise - IA Avançada", 10, 10);
    doc.text("Probabilidade de sucesso: 80%", 10, 20);
    doc.text("Prazo médio: 6 meses", 10, 30);
    doc.save("analise_IA.pdf");
  };

  const sendEmail = () => {
    alert("Função de envio de e-mail acionada. Integre com seu backend para envio real.");
  };

  const approveCase = () => {
    setApprovals((prev) => [...prev, "Advogado X aprovou a análise"]);
  };

  const handleReturn = () => {
    router.push("/analises");
  };

  const lineData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Probabilidade de Sucesso (%)",
        data: [45, 50, 58, 70, 72, 80],
        borderColor: "#0d99ff",
        backgroundColor: "#0d99ff44",
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["Caso A", "Caso B", "Caso C"],
    datasets: [
      {
        label: "Prazo (meses)",
        data: [6, 8, 5],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
      },
      {
        label: "Custos (mil R$)",
        data: [10, 15, 9],
        backgroundColor: ["#ffa600", "#003f5c", "#bc5090"],
      },
    ],
  };

  const pieData = {
    labels: ["Honorários", "Custas Processuais", "Deslocamentos"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
      },
    ],
  };

  return (
    <div className="layout">
      {/* SIDEBAR LATERAL */}
      <aside className="sidebar">
        <div className="navIcon"><AiFillHome size={20} /></div>
        <div className="navIcon"><AiFillBell size={20} /></div>
        <div className="navIcon"><FaTachometerAlt size={20} /></div>
        <div className="navIcon"><FaCalendarAlt size={20} /></div>
        <div className="navIcon"><FaTrophy size={20} /></div>
        <div className="navIcon"><FaCog size={20} /></div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="mainContent">
        {/* Barra Superior */}
        <div className="topBar">
          <span className="topBarTitle">Olá, seja Bem Vindo</span>
          <button className="returnButton" onClick={handleReturn}>Retornar</button>
        </div>

        {/* Barra "Escolher Documento" + "Submeter" */}
        <div className="formBar">
          <div className="formBarLeft">
            <label>Escolher Documento</label>
            <label>Descreva o tipo de reclamação:</label>
            <textarea className="bigTextArea" />
          </div>
          <button className="submitButton">Submeter</button>
        </div>

        {/* Container Principal */}
        <div className="pageContainer">
          {isLoading && (
            <div className="loadingOverlay">
              <ClipLoader color="#fff" size={50} />
            </div>
          )}

          {/* Resultado da Análise */}
          <div className="panel">
            <div className="panelTitle">Resultado da Análise</div>
            <div className="resultRow">
              <div className="resultField">
                <label>Probabilidade de sucesso</label>
                <input className="inputField" type="text" />
              </div>
              <div className="resultField">
                <label>Prazo médio de resolução</label>
                <input className="inputField" type="text" />
              </div>
              <div className="resultField">
                <label>Estimativa de custos</label>
                <input className="inputField" type="text" />
              </div>
            </div>

            <label className="panelLabel">Documentação Relevante</label>
            <textarea className="textAreaField" />

            <label className="panelLabel">Argumentação Jurídica</label>
            <textarea className="textAreaField" />
          </div>

          {/* Gráficos */}
          <div className="panel">
            <div className="panelTitle">Gráficos de Análise</div>
            <p className="sectionTitle">
              Visualize probabilidade vs. tempo, casos semelhantes e evolução de custos:
            </p>
            <div className="chartsRow">
              <div className="chartItem"><Line data={lineData} /></div>
              <div className="chartItem"><Bar data={barData} /></div>
              <div className="chartItem"><Pie data={pieData} /></div>
            </div>
          </div>

          {/* Ações */}
          <div className="panel">
            <div className="panelTitle">Ações</div>
            <div className="actionButtons">
              <button className="actionButton" onClick={generatePDF}>Gerar PDF</button>
              <button className="actionButton" onClick={sendEmail}>Enviar por e-mail</button>
              <button className="actionButton" onClick={approveCase}>Aprovar Caso</button>
            </div>
            {approvals.map((ap, i) => (
              <p key={i} style={{ fontSize: "14px" }}>{ap}</p>
            ))}
          </div>

          {/* Explicabilidade */}
          <div className="panel">
            <div className="panelTitle">Explicabilidade da IA</div>
            <button className="actionButton" onClick={handleExplain}>Explicar Probabilidade</button>
            {explain && <div className="explainBox">{explain}</div>}
          </div>

          {/* Chat */}
          <div className="panel">
            <div className="panelTitle">Chat Interativo</div>
            <p className="sectionTitle">
              Converse com a IA para tirar dúvidas sobre artigos de lei, embasamento jurídico etc.
            </p>
            <div className="chatContainer">
              {chatMessages.map((msg, i) => {
                const isUser = msg.startsWith("Você:");
                return (
                  <div key={i} className={`chatBubble ${isUser ? "user" : ""}`}>
                    {msg}
                  </div>
                );
              })}
            </div>
            <div className="chatInput">
              <input
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Digite sua pergunta..."
              />
              <button onClick={handleChatSend}>Enviar</button>
            </div>
          </div>

          {/* Sugestão de Documentos */}
          <div className="panel">
            <div className="panelTitle">Sugestão de Documentos</div>
            <p style={{ fontSize: "14px" }}>
              Se o sistema de IA detectar algo como "Reclamação Trabalhista de Assédio", sugerimos automaticamente a petição inicial, checklist de provas etc.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
