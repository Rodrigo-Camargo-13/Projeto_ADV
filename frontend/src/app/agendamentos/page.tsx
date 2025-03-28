"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./agendamentos.css";
import { useRouter } from "next/navigation";

type Agendamento = {
  hora: string;
  nome: string;
  celular: string;
  procedimento: string;
  local: string;
  status: "Livre" | "Marcado";
}[];

export default function Agendamentos() {
  const router = useRouter();
  const [date, setDate] = useState<Date | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setDate(new Date());
  }, []);

  // Definição dos horários disponíveis
  const horarios = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  const [agendamentos, setAgendamentos] = useState<Agendamento>(
    horarios.map((hora) => ({
      hora,
      nome: "-",
      celular: "-",
      procedimento: "-",
      local: "-",
      status: "Livre",
    }))
  );

  // Função para retornar ao Dashboard
  const handleRetornar = () => {
    router.push("/dashboard");
  };

  return (
    <div className="agendamentos-container">
      {/* Barra lateral */}
      <div className="sidebar">
        <h3>Filtrar por Especialidade</h3>
        <select>
          <option value="todas">Todas as Agendas</option>
          <option value="advogado1">Advogado Trabalhista</option>
          <option value="advogado2">Advogado Criminalista</option>
        </select>

        <h3>Selecione a Agenda</h3>
        <select>
          <option value="usuario1">Usuário 1</option>
          <option value="usuario2">Usuário 2</option>
        </select>

        <h3>Calendário</h3>
        <div className="calendar-container">
          {isClient && date !== null && (
            <Calendar onChange={(value) => setDate(value as Date)} value={date} />
          )}
        </div>
      </div>

      {/* Bloco de agendamentos */}
      <div className="agendamentos-content">
        {/* Cabeçalho: Título + Botão no mesmo row */}
        <div className="agendamentos-header">
          <h2>
            Agenda do Dia - {date ? date.toLocaleDateString() : "Carregando..."}
          </h2>
          <button className="return-button" onClick={handleRetornar}>
            Retornar
          </button>
        </div>

        <button className="novo-agendamento">+ Novo Agendamento</button>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Nome</th>
                <th>Celular</th>
                <th>Procedimento</th>
                <th>Local</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {agendamentos.map((item, index) => (
                <tr
                  key={index}
                  className={item.status === "Marcado" ? "marcado" : ""}
                >
                  <td>{item.hora}</td>
                  <td>{item.nome}</td>
                  <td>{item.celular}</td>
                  <td>{item.procedimento}</td>
                  <td>{item.local}</td>
                  <td>
                    <button
                      className={item.status === "Livre" ? "marcar" : "desmarcar"}
                    >
                      {item.status === "Livre" ? "Marcar" : "Desmarcar"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
