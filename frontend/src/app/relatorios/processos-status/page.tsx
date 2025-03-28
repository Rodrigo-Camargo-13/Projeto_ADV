"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./processos-status.css";
import { useRouter } from "next/navigation";

import { AiFillHome, AiFillBell } from "react-icons/ai";
import { FaTachometerAlt, FaCalendarAlt, FaTrophy, FaCog } from "react-icons/fa";

export default function ProcessosStatusPage() {
  const router = useRouter();

  const [numeroProcesso, setNumeroProcesso] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [statusProcesso, setStatusProcesso] = useState("");
  const [comarca, setComarca] = useState("");
  const [estado, setEstado] = useState("");
  const [dataAudiencia, setDataAudiencia] = useState("");
  const [tendenciaGanho, setTendenciaGanho] = useState("");
  const [valorCausa, setValorCausa] = useState("");
  const [pontosFortes, setPontosFortes] = useState("");
  const [pontosFracos, setPontosFracos] = useState("");
  const [testemunhas, setTestemunhas] = useState("");

  const processosSimulados: { [key: string]: any } = {
    "123456": {
      nomeCliente: "João Silva",
      statusProcesso: "Em andamento",
      comarca: "São Paulo",
      estado: "SP",
      dataAudiencia: "2025-05-15",
      tendenciaGanho: "Alta",
      valorCausa: "R$ 50.000",
      pontosFortes: "Testemunhas favoráveis, evidências concretas.",
      pontosFracos: "Prazo apertado para novas provas.",
      testemunhas: "Maria Souza, Pedro Oliveira",
    },
    "654321": {
      nomeCliente: "Ana Oliveira",
      statusProcesso: "Concluído",
      comarca: "Campinas",
      estado: "SP",
      dataAudiencia: "2024-08-20",
      tendenciaGanho: "Média",
      valorCausa: "R$ 30.000",
      pontosFortes: "Decisão prévia favorável, argumentos sólidos.",
      pontosFracos: "Testemunha chave ausente.",
      testemunhas: "Carlos Mendes",
    },
  };

  const handleProcessoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numero = e.target.value;
    setNumeroProcesso(numero);

    if (processosSimulados[numero]) {
      const dados = processosSimulados[numero];
      setNomeCliente(dados.nomeCliente);
      setStatusProcesso(dados.statusProcesso);
      setComarca(dados.comarca);
      setEstado(dados.estado);
      setDataAudiencia(dados.dataAudiencia);
      setTendenciaGanho(dados.tendenciaGanho);
      setValorCausa(dados.valorCausa);
      setPontosFortes(dados.pontosFortes);
      setPontosFracos(dados.pontosFracos);
      setTestemunhas(dados.testemunhas);
    } else {
      setNomeCliente("");
      setStatusProcesso("");
      setComarca("");
      setEstado("");
      setDataAudiencia("");
      setTendenciaGanho("");
      setValorCausa("");
      setPontosFortes("");
      setPontosFracos("");
      setTestemunhas("");
    }
  };

  const handleRetornar = () => {
    router.push("/relatorios");
  };

  return (
    <div className="processos-layout">
      <aside className="processos-sidebar">
        <div className="processos-navIcon"><AiFillHome size={20} /></div>
        <div className="processos-navIcon"><AiFillBell size={20} /></div>
        <div className="processos-navIcon"><FaTachometerAlt size={20} /></div>
        <div className="processos-navIcon"><FaCalendarAlt size={20} /></div>
        <div className="processos-navIcon"><FaTrophy size={20} /></div>
        <div className="processos-navIcon"><FaCog size={20} /></div>
      </aside>

      <main className="processos-main">
        <div className="processos-topbar">
          <span className="processos-title">Status do Processo</span>
          <button className="processos-return" onClick={handleRetornar}>
            <FaArrowLeft /> Retornar
          </button>
        </div>

        <div className="processos-container">
          <h2>Digite o número do processo</h2>
          <input
            type="text"
            value={numeroProcesso}
            onChange={handleProcessoChange}
            placeholder="Digite o número do processo"
          />

          <h2>Nome do Cliente</h2>
          <input type="text" value={nomeCliente} readOnly />

          <div className="processos-row">
            <div>
              <h2>Status do Processo</h2>
              <input type="text" value={statusProcesso} readOnly />
            </div>
            <div>
              <h2>Comarca</h2>
              <input type="text" value={comarca} readOnly />
            </div>
            <div>
              <h2>Estado</h2>
              <input type="text" value={estado} readOnly />
            </div>
          </div>

          <div className="processos-row">
            <div>
              <h2>Data da Audiência</h2>
              <input type="date" value={dataAudiencia} readOnly />
            </div>
            <div>
              <h2>Tendência de Ganho</h2>
              <input type="text" value={tendenciaGanho} readOnly />
            </div>
            <div>
              <h2>Valor da Causa</h2>
              <input type="text" value={valorCausa} readOnly />
            </div>
          </div>

          <div className="processos-row processos-textareas">
            <div>
              <h2>Pontos Fortes</h2>
              <textarea value={pontosFortes} readOnly />
            </div>
            <div>
              <h2>Pontos Fracos</h2>
              <textarea value={pontosFracos} readOnly />
            </div>
            <div>
              <h2>Testemunhas</h2>
              <textarea value={testemunhas} readOnly />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
