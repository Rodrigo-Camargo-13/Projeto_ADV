"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaUserPlus } from "react-icons/fa";
import {
  IoMdHome,
  IoMdNotifications,
  IoMdSpeedometer,
  IoMdCalendar,
  IoMdTrophy,
  IoMdSettings,
} from "react-icons/io";
import "./clientes.css"; // Usa o CSS já corrigido abaixo

const clientesSimulados = [
  { id: "CLI-001", nome: "João Silva", cpf: "111.222.333-44", telefone: "(31)99999-1234", email: "joao@gmail.com" },
  { id: "CLI-002", nome: "Maria Souza", cpf: "555.666.777-88", telefone: "(31)98888-5678", email: "maria@gmail.com" },
  { id: "CLI-003", nome: "Carlos Almeida", cpf: "999.888.777-66", telefone: "(11)91234-5678", email: "carlos@gmail.com" },
  { id: "CLI-004", nome: "Ana Beatriz", cpf: "222.333.444-55", telefone: "(21)90000-1234", email: "ana@gmail.com" },
  { id: "CLI-005", nome: "Bruno Ferreira", cpf: "123.456.789-00", telefone: "(31)99999-5678", email: "bruno@gmail.com" },
  { id: "CLI-006", nome: "Fernanda Silva", cpf: "777.888.999-00", telefone: "(11)90000-8888", email: "fernanda@gmail.com" },
  { id: "CLI-007", nome: "Rodrigo Camargo", cpf: "321.654.987-22", telefone: "(31)97777-2222", email: "rodrigo@gmail.com" },
  { id: "CLI-008", nome: "Patrícia Faria", cpf: "999.000.111-33", telefone: "(31)98888-9999", email: "patricia@gmail.com" },
  { id: "CLI-009", nome: "Juliana Santos", cpf: "333.444.555-66", telefone: "(31)98765-4321", email: "juliana@gmail.com" },
  { id: "CLI-010", nome: "Pedro Henrique", cpf: "111.111.111-11", telefone: "(31)91111-1111", email: "pedro@gmail.com" },
  { id: "CLI-011", nome: "Mariana Almeida", cpf: "222.222.222-22", telefone: "(31)92222-2222", email: "mariana@gmail.com" },
  { id: "CLI-012", nome: "Fábio Castro", cpf: "333.333.333-33", telefone: "(31)93333-3333", email: "fabio@gmail.com" },
  { id: "CLI-013", nome: "Isabela Martins", cpf: "444.444.444-44", telefone: "(31)94444-4444", email: "isabela@gmail.com" },
  { id: "CLI-014", nome: "Paulo César", cpf: "555.555.555-55", telefone: "(21)95555-5555", email: "paulo@gmail.com" },
  { id: "CLI-015", nome: "Marta Rocha", cpf: "666.666.666-66", telefone: "(11)96666-6666", email: "marta@gmail.com" },
  { id: "CLI-016", nome: "Leonardo Lima", cpf: "777.777.777-77", telefone: "(31)97777-7777", email: "leonardo@gmail.com" },
  { id: "CLI-017", nome: "Renata Dias", cpf: "888.888.888-88", telefone: "(31)98888-8888", email: "renata@gmail.com" },
  { id: "CLI-018", nome: "Lucas Azevedo", cpf: "999.999.999-99", telefone: "(31)99999-9999", email: "lucas@gmail.com" },
  { id: "CLI-019", nome: "Simone Lopes", cpf: "000.111.222-33", telefone: "(31)90000-1111", email: "simone@gmail.com" },
  { id: "CLI-020", nome: "Marcelo Figueiredo", cpf: "111.000.222-44", telefone: "(31)90123-4567", email: "marcelo@gmail.com" },
];

export default function RelatorioClientes() {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/relatorios");
  };

  return (
    <div className="relatorio-layout">
      {/* SIDEBAR LATERAL */}
      <aside className="relatorio-sidebar">
        <div className="relatorio-navIcon"><IoMdHome size={20} /></div>
        <div className="relatorio-navIcon"><IoMdNotifications size={20} /></div>
        <div className="relatorio-navIcon"><IoMdSpeedometer size={20} /></div>
        <div className="relatorio-navIcon"><IoMdCalendar size={20} /></div>
        <div className="relatorio-navIcon"><IoMdTrophy size={20} /></div>
        <div className="relatorio-navIcon"><IoMdSettings size={20} /></div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="relatorio-mainContent">
        {/* BARRA SUPERIOR */}
        <div className="relatorio-topBar">
          <span className="relatorio-topBarTitle">
            <FaUserPlus style={{ marginRight: "8px" }} />
            Relatório de Clientes
          </span>
          <button className="relatorio-returnButton" onClick={handleReturn}>
            <FaArrowLeft /> Retornar
          </button>
        </div>

        {/* BARRA DE AÇÕES (vazia neste caso) */}
        <div className="relatorio-formBar" />

        {/* CONTEÚDO PRINCIPAL */}
        <div className="relatorio-pageContainer">
          <div className="relatorio-panel">
            <div className="relatorio-panelTitle">Lista de Clientes</div>
            <div className="relatorio-tabela-wrapper">
              <table className="relatorio-clientes-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {clientesSimulados.map((cli) => (
                    <tr key={cli.id}>
                      <td>{cli.id}</td>
                      <td>{cli.nome}</td>
                      <td>{cli.cpf}</td>
                      <td>{cli.telefone}</td>
                      <td>{cli.email}</td>
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
