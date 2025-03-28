"use client";
import React, { useState, useEffect } from "react";
import { FaBell, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./notificacoes.css";

interface Notificacao {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  lida: boolean;
}

export default function Notificacoes() {
  const router = useRouter();
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);

  useEffect(() => {
    setNotificacoes([
      {
        id: 1,
        titulo: "Audiência marcada",
        descricao: "Audiência marcada para o processo Nº 1234-56.2024 no dia 10/04 às 14h.",
        data: "12/03/2024",
        lida: false,
      },
      {
        id: 2,
        titulo: "Documento Recebido",
        descricao: "Recebido documento do cliente João Silva sobre o processo Nº 9876-54.2024.",
        data: "11/03/2024",
        lida: true,
      },
      {
        id: 3,
        titulo: "Prazo final para recurso",
        descricao: "Atenção! Último dia para enviar recurso do processo Nº 3333-22.2024 é amanhã.",
        data: "10/03/2024",
        lida: false,
      },
    ]);
  }, []);

  const marcarComoLida = (id: number) => {
    setNotificacoes(prev => prev.map(n => (n.id === id ? { ...n, lida: true } : n)));
  };

  const removerNotificacao = (id: number) => {
    setNotificacoes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="notificacoes-container">
      <header className="notificacoes-header">
        <h1><FaBell /> Notificações do Escritório</h1>
        <button className="btn-retornar" onClick={() => router.push("/admin-colaboracao")}>
          Retornar
        </button>
      </header>

      <section className="notificacoes-list">
        {notificacoes.length === 0 ? (
          <p className="sem-notificacoes">Não há notificações no momento.</p>
        ) : (
          notificacoes.map((notificacao) => (
            <div key={notificacao.id} className={`notificacao-item ${notificacao.lida ? 'lida' : ''}`}>
              <div className="notificacao-conteudo" onClick={() => marcarComoLida(notificacao.id)}>
                <h2>{notificacao.titulo}</h2>
                <p>{notificacao.descricao}</p>
                <span className="notificacao-data">{notificacao.data}</span>
              </div>
              <button className="btn-remover" onClick={() => removerNotificacao(notificacao.id)}>
                <FaTrashAlt />
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
