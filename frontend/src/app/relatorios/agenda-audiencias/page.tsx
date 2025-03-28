"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiFillHome, AiFillBell } from "react-icons/ai";
import { FaTachometerAlt, FaCalendarAlt, FaTrophy, FaCog } from "react-icons/fa";
import "./agenda-audiencias.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const audiencias = [
  { data: "07/11/2016", horario: "07:00", processo: "DF74865123", cliente: "André Felipe", local: "Fórum Central", comarca: "São Paulo", tipo: "Inicial" },
  { data: "08/11/2016", horario: "07:00", processo: "DF74049545", cliente: "Marlene Inácio", local: "TJSP", comarca: "Campinas", tipo: "Instrução" },
  { data: "10/11/2016", horario: "07:00", processo: "DF7467513", cliente: "Nilson Ricardo", local: "Fórum Trabalhista", comarca: "Ribeirão Preto", tipo: "Encerramento" },
  { data: "10/11/2016", horario: "07:41", processo: "DF7467513", cliente: "Nilson Ricardo", local: "Fórum Criminal", comarca: "São Paulo", tipo: "Inicial" },
  { data: "11/11/2016", horario: "06:00", processo: "DF74290270", cliente: "Jefferson Fernandes", local: "Justiça Federal", comarca: "Santos", tipo: "Instrução" },
];

export default function AgendaAudiencias() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  const [date, setDate] = useState<Date | null>(new Date());
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  return (
    <div className="agenda-layout">
      <aside className="agenda-sidebar">
        <div className="agenda-navIcon"><AiFillHome size={20} /></div>
        <div className="agenda-navIcon"><AiFillBell size={20} /></div>
        <div className="agenda-navIcon"><FaTachometerAlt size={20} /></div>
        <div className="agenda-navIcon"><FaCalendarAlt size={20} /></div>
        <div className="agenda-navIcon"><FaTrophy size={20} /></div>
        <div className="agenda-navIcon"><FaCog size={20} /></div>
      </aside>

      <main className="agenda-mainContent">
        <div className="agenda-topBar">
          <span className="agenda-topBarTitle">Consultar Agendamentos</span>
          <button className="agenda-returnButton" onClick={() => router.push("/relatorios")}>Retornar</button>
        </div>

        <div className="agenda-formBar">
          <div className="agenda-filtersInline">
            <div className="agenda-filterGroup">
              <label>Data Início:</label>
              <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
            </div>
            <div className="agenda-filterGroup">
              <label>Data Fim:</label>
              <input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
            </div>
            <button className="agenda-submitButton">Consultar</button>
          </div>
        </div>

        <div className="agenda-pageContainer">
          <div className="agenda-panel">
            <div className="agenda-panelTitle">Calendário</div>
            <div className="agenda-calendarWrapper">
              {isClient && (
                <Calendar onChange={(val) => setDate(val as Date)} value={date!} locale="pt-BR" />
              )}
            </div>
          </div>

          <div className="agenda-panel">
            <div className="agenda-panelTitle">Tabela de Audiências</div>
            <div className="agenda-tabela-wrapper">
              <table className="agenda-table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Processo</th>
                    <th>Cliente</th>
                    <th>Local</th>
                    <th>Comarca</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {audiencias.map((aud, idx) => (
                    <tr key={idx}>
                      <td>{aud.data}</td>
                      <td>{aud.horario}</td>
                      <td>{aud.processo}</td>
                      <td>{aud.cliente}</td>
                      <td>{aud.local}</td>
                      <td>{aud.comarca}</td>
                      <td>{aud.tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
