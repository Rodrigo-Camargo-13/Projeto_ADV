"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AiFillHome,
  AiFillBell,
} from "react-icons/ai";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaTrophy,
  FaCog,
} from "react-icons/fa";

import "./ocr-documentos.css";

export default function OCRDocumentosPage() {
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState("");

  const handleReturn = () => {
    router.push("/analises");
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      setAnalysisResult("Nenhum documento selecionado.");
      return;
    }

    const dummyAnalysis = `
=== Resultado da Análise ===
Nome do arquivo: ${selectedFile.name}
Nomes encontrados: João da Silva
Data identificada: 15/03/2025
Cláusulas: "Responsabilidades, Honorários, Prazo"

Observações:
- Nenhuma cláusula de confidencialidade encontrada.
- Risco potencial para cláusula trabalhista ausente.
`;

    setAnalysisResult(dummyAnalysis);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="ocr-container">
      {/* SIDEBAR PADRÃO */}
      <aside className="ocr-sidebar">
        <div className="ocr-icon"><AiFillHome size={20} /></div>
        <div className="ocr-icon"><AiFillBell size={20} /></div>
        <div className="ocr-icon"><FaTachometerAlt size={20} /></div>
        <div className="ocr-icon"><FaCalendarAlt size={20} /></div>
        <div className="ocr-icon"><FaTrophy size={20} /></div>
        <div className="ocr-icon"><FaCog size={20} /></div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="ocr-main">
        <header className="ocr-header">
          <h2>Olá, seja Bem Vindo</h2>
          <div className="ocr-header-buttons">
            <button className="btn-ghost" onClick={handleReturn}>Retornar</button>
            <button className="btn-primary" onClick={handleSubmit}>Submeter</button>
          </div>
        </header>

        <section className="ocr-upload">
          <label htmlFor="docInput">Escolher Documento</label>
          <input
            id="docInput"
            type="file"
            accept=".pdf, .png, .jpg, .jpeg"
            onChange={handleFileChange}
          />
        </section>

        <section className="ocr-analysis-panel">
          <h3>Resultado da Análise</h3>
          <div className="ocr-result">
            {analysisResult ? (
              <pre>{analysisResult}</pre>
            ) : (
              <p>Nenhum resultado ainda...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
