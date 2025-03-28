"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./processos.css";
import backgroundImage from "/public/background_processos.png";

type Processo = {
  numero: string;
  status: string;
  ultimaAtualizacao: string;
  advogado: string;
} | null;

export default function Processos() {
  const router = useRouter();
  const [numeroProcesso, setNumeroProcesso] = useState("");
  const [resultado, setResultado] = useState<Processo>(null);

  const buscarProcesso = () => {
    setResultado({
      numero: numeroProcesso,
      status: "Em andamento",
      ultimaAtualizacao: "02/03/2025",
      advogado: "Dr. Rodrigo Camargo",
    });
  };

  const voltarDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div
      className="processos-container"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="overlay"></div>

      <div className="processos-content">
        <h2>Consulta de Processos</h2>
        <p>Insira o número do processo para consultar o andamento.</p>

        <input
          type="text"
          placeholder="Digite o número do processo"
          value={numeroProcesso}
          onChange={(e) => setNumeroProcesso(e.target.value)}
        />
        <button onClick={buscarProcesso}>Buscar</button>

        {resultado && (
          <div className="resultado">
            <h3>Resultado:</h3>
            <p>
              <strong>Número:</strong> {resultado.numero}
            </p>
            <p>
              <strong>Status:</strong> {resultado.status}
            </p>
            <p>
              <strong>Última Atualização:</strong> {resultado.ultimaAtualizacao}
            </p>
            <p>
              <strong>Advogado Responsável:</strong> {resultado.advogado}
            </p>
          </div>
        )}

        {/* Botão de Voltar no canto inferior direito */}
        <button className="voltar-button" onClick={voltarDashboard}>
          Retornar
        </button>
      </div>
    </div>
  );
}
