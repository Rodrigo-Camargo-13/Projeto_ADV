"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  IoMdHome,
  IoMdNotifications,
  IoMdSpeedometer,
  IoMdCalendar,
  IoMdTrophy,
  IoMdSettings,
} from "react-icons/io";

import {
  Bar,
  Pie,
  Line,
  PolarArea,
} from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";
import "./financeiro-mensal.css";

/* REGISTRA MÓDULOS USADOS PELOS GRÁFICOS */
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale
);

export default function FinanceiroMensal() {
  const router = useRouter();

  // Ao clicar em "Retornar", vai para "/relatorios"
  const handleReturn = () => {
    router.push("/relatorios");
  };

  return (
    <div className="financeiro-container">
      {/* Barra Lateral */}
      <aside className="sidebar">
        <ul>
          <li>
            <IoMdHome />
          </li>
          <li>
            <IoMdNotifications />
          </li>
          <li>
            <IoMdSpeedometer />
          </li>
          <li>
            <IoMdCalendar />
          </li>
          <li>
            <IoMdTrophy />
          </li>
          <li>
            <IoMdSettings />
          </li>
        </ul>
      </aside>

      {/* Conteúdo Principal com Scroll Vertical */}
      <main className="financeiro-content">
        {/* Cabeçalho Fixado */}
        <header className="financeiro-header">
          <span>Olá, bem-vindo,</span>
          <div className="date-filter">
            <label className="periodo-label">Período:</label>
            <input type="date" value="2024-01-01" readOnly />
            <input type="date" value="2024-12-31" readOnly />
          </div>
          {/* Botão Retornar → Vai para "/relatorios" */}
          <button className="return-btn" onClick={handleReturn}>Retornar</button>
        </header>

        {/* Indicadores Financeiros (KPIs Básicos) */}
        <section className="indicadores">
          <div className="indicador">
            <span>💰 Total Investimento</span> 
            <h3>R$250.000,00</h3>
          </div>
          <div className="indicador">
            <span>📊 Taxa ROI</span> 
            <h3>36.2%</h3>
          </div>
          <div className="indicador">
            <span>📄 Número de Processos</span> 
            <h3>36</h3>
          </div>
          <div className="indicador">
            <span>📅 Projetos Concluídos</span> 
            <h3>29</h3>
          </div>
        </section>

        {/* SEÇÃO DE BI AVANÇADO */}
        <section className="bi-avancado">
          <h2>BI Avançado</h2>
          <p className="bi-description">
            Dashboard de KPIs e relatórios preditivos para análise de prazos,
            número de processos ativos por advogado, taxas de sucesso e
            rentabilidade por área. Explore as regiões onde o escritório mais
            atua, facilitando estratégias de expansão.
          </p>

          {/* KPIs Avançadas / Indicadores-Chave */}
          <div className="kpis-avancadas">
            <div className="kpi-card">
              <span>Prazos Atendidos</span>
              <h3>92%</h3>
            </div>
            <div className="kpi-card">
              <span>Processos Ativos por Advogado (Média)</span>
              <h3>12</h3>
            </div>
            <div className="kpi-card">
              <span>Taxa de Sucesso</span>
              <h3>78%</h3>
            </div>
            <div className="kpi-card">
              <span>Rentabilidade por Área</span>
              <h3>Trabalhista: R$ 120k</h3>
            </div>
          </div>

          {/* Relatórios Preditivos */}
          <div className="relatorios-preditivos">
            <h3 className="relatorios-title">Relatórios Preditivos</h3>
            <p className="relatorios-desc">
              Projeção de processos futuros, estimativas de receita/honorários e
              possíveis tendências de crescimento ou retração.
            </p>
            <div className="relatorios-graficos">
              <div className="grafico">
                <h4>Tendência de Processos (Mensal)</h4>
                <Line data={tendenciaProcessosData} />
              </div>
              <div className="grafico">
                <h4>Projeção de Honorários (R$)</h4>
                <Line data={projecaoHonorariosData} />
              </div>
            </div>
          </div>

          {/* Heatmap de Demandas */}
          <div className="heatmap-section">
            <h3 className="heatmap-title">Heatmap de Demandas</h3>
            <p className="heatmap-desc">
              Indica em quais regiões/tribunais o escritório tem mais casos,
              facilitando estratégias de expansão.
            </p>
            <div className="heatmap-container">
              <PolarArea data={heatmapData} />
            </div>
          </div>
        </section>

        {/* Gráficos com Scroll Vertical (já existentes) */}
        <section className="graficos">
          <div className="grafico grafico-pizza">
            <h4>Detalhamento Processos</h4>
            <Pie data={detalhamentoProcessosData} />
          </div>
          <div className="grafico grafico-barra">
            <h4>Detalhamento Mensal</h4>
            <Bar data={detalhamentoMensalData} />
          </div>
          <div className="grafico grafico-pizza">
            <h4>Redução de Custo</h4>
            <Pie data={reducaoCustoData} />
          </div>
          <div className="grafico grafico-barra">
            <h4>Projeção de Ganhos</h4>
            <Bar data={projecaoGanhosData} />
          </div>
        </section>
      </main>
    </div>
  );
}

/* --- Dados de Exemplo para os GRÁFICOS já existentes --- */
const detalhamentoProcessosData = {
  labels: ["Concluído", "Pendente"],
  datasets: [
    {
      data: [63.8, 36.2],
      backgroundColor: ["#6C63FF", "#A59FFF"],
    },
  ],
};

const detalhamentoMensalData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [10, 15, 5, 10, 12, 11, 9, 14, 18, 25, 30, 15],
      backgroundColor: "#C7A1FF",
    },
  ],
};

const reducaoCustoData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      data: [13.1, 28.6, 28, 30.3],
      backgroundColor: ["#A59FFF", "#6C63FF", "#C7A1FF", "#B6B3FF"],
    },
  ],
};

const projecaoGanhosData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [
        8000, 18000, 22000, 28000, 32000, 38000, 29000, 31000, 40000, 36000,
        35000, 33000,
      ],
      backgroundColor: "#C7A1FF",
    },
  ],
};

/* 1) Tendência de Processos (Mensal) */
const tendenciaProcessosData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Set"],
  datasets: [
    {
      label: "Processos Iniciados",
      data: [8, 10, 12, 9, 11, 15, 18, 16, 20],
      borderColor: "#ff6384",
      backgroundColor: "#ff638455",
      fill: true,
      tension: 0.2,
    },
    {
      label: "Processos Concluídos",
      data: [5, 4, 9, 6, 8, 10, 11, 13, 15],
      borderColor: "#36a2eb",
      backgroundColor: "#36a2eb55",
      fill: true,
      tension: 0.2,
    },
  ],
};

/* 2) Projeção de Honorários */
const projecaoHonorariosData = {
  labels: ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Honorários (R$ mil)",
      data: [12, 14, 16, 21, 25, 30],
      borderColor: "#4bc0c0",
      backgroundColor: "#4bc0c055",
      fill: true,
      tension: 0.2,
    },
  ],
};

/* 3) Heatmap de Demandas (PolarArea) */
const heatmapData = {
  labels: [
    "Região 1 (SP)",
    "Região 2 (RJ)",
    "Região 3 (MG)",
    "Região 4 (PR)",
    "Região 5 (RS)",
  ],
  datasets: [
    {
      data: [25, 18, 15, 12, 10],
      backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffa600", "#4bc0c0"],
    },
  ],
};
