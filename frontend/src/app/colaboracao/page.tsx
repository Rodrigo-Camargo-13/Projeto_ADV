"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./colaboracao.css";

import { AiFillHome, AiFillBell, AiFillSetting } from "react-icons/ai";
import { FaTachometerAlt, FaCalendarAlt, FaTrophy } from "react-icons/fa";

interface TaskItem {
  text: string;
  status: "aFazer" | "emProgresso" | "concluido";
  responsavel: string;
}

export default function ColaboracaoPage() {
  const router = useRouter();

  const [kanbanData, setKanbanData] = useState<{
    aFazer: TaskItem[];
    emProgresso: TaskItem[];
    concluido: TaskItem[];
  }>({
    aFazer: [
      { text: "Analisar documento X", status: "aFazer", responsavel: "Carlos" },
      { text: "Revisar contrato trabalhista", status: "aFazer", responsavel: "Ana" },
    ],
    emProgresso: [
      { text: "Audiência em andamento", status: "emProgresso", responsavel: "Marcia" },
    ],
    concluido: [
      { text: "Petição inicial finalizada", status: "concluido", responsavel: "Roberto" },
    ],
  });

  const [newTask, setNewTask] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([
    "Ana: Precisamos revisar o contrato ASAP!",
    "Carlos: OK, estou fazendo.",
  ]);
  const [chatInput, setChatInput] = useState("");

  const versionsMock = [
    { docName: "Petição 123", version: "v1.2", editedBy: "Ana", date: "2025-04-10" },
    { docName: "Contrato 987", version: "v1.0", editedBy: "Carlos", date: "2025-03-22" },
    { docName: "Procuração XYZ", version: "v2.1", editedBy: "Ana", date: "2025-02-18" },
  ];

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const newItem: TaskItem = {
      text: newTask.trim(),
      status: "aFazer",
      responsavel: responsavel.trim() || "Não definido",
    };
    setKanbanData((prev) => ({
      ...prev,
      aFazer: [...prev.aFazer, newItem],
    }));
    setNewTask("");
    setResponsavel("");
  };

  const moveCard = (
    from: "aFazer" | "emProgresso" | "concluido",
    to: "aFazer" | "emProgresso" | "concluido",
    index: number
  ) => {
    if (from === to) return;
    const itemToMove = kanbanData[from][index];

    setKanbanData((prev) => {
      const updated = { ...prev };
      updated[from] = [...updated[from]];
      updated[from].splice(index, 1);
      const updatedItem = { ...itemToMove, status: to };
      updated[to] = [...updated[to], updatedItem];
      return updated;
    });
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages((prev) => [...prev, `Você: ${chatInput}`]);
    setChatInput("");
  };

  const handleReturn = () => {
    router.push("/admin-colaboracao");
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="navIcon"><AiFillHome /></div>
        <div className="navIcon"><AiFillBell /></div>
        <div className="navIcon"><FaTachometerAlt /></div>
        <div className="navIcon"><FaCalendarAlt /></div>
        <div className="navIcon"><FaTrophy /></div>
        <div className="navIcon"><AiFillSetting /></div>
      </aside>

      <main className="mainContent">
        <div className="topBar">
          <span className="topBarTitle">Recursos de Colaboração</span>
          <button className="returnButton" onClick={handleReturn}>Retornar</button>
        </div>

        <div className="pageContainer">
          <form
            className="addTaskForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTask();
            }}
          >
            <div className="formGroup">
              <label>Nova Tarefa</label>
              <input
                className="addTaskInput"
                type="text"
                placeholder="Ex.: Criar petição para caso Y"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label>Responsável</label>
              <input
                className="addTaskInput"
                type="text"
                placeholder="Ex.: Ana"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
              />
            </div>
            <button type="submit" className="addTaskButton">Adicionar</button>
          </form>

          {/* Kanban */}
          <div className="kanbanContainer">
            {["aFazer", "emProgresso", "concluido"].map((coluna) => (
              <div className="kanbanColumn" key={coluna}>
                <h3>
                  {coluna === "aFazer"
                    ? "A Fazer"
                    : coluna === "emProgresso"
                    ? "Em Progresso"
                    : "Concluído"}
                </h3>
                <div className="kanbanList">
                  {kanbanData[coluna as keyof typeof kanbanData].map((item, index) => (
                    <div
                      key={index}
                      className={`kanbanCard ${
                        coluna === "aFazer"
                          ? "aFazerCard"
                          : coluna === "emProgresso"
                          ? "emProgressoCard"
                          : "concluidoCard"
                      }`}
                      onClick={() =>
                        moveCard(
                          coluna as any,
                          coluna === "aFazer"
                            ? "emProgresso"
                            : coluna === "emProgresso"
                            ? "concluido"
                            : "aFazer",
                          index
                        )
                      }
                    >
                      <div className="taskText">{item.text}</div>
                      <div className="taskResponsavel">Responsável: {item.responsavel}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Interno */}
          <div className="chatContainer">
            <div className="chatHeader">Chat Interno</div>
            <div className="chatMessages">
              {chatMessages.map((msg, i) => {
                const isUser = msg.startsWith("Você:");
                return (
                  <div key={i} className={`chatBubble ${isUser ? "userMessage" : ""}`}>
                    {msg}
                  </div>
                );
              })}
            </div>
            <div className="chatInputBox">
              <input
                type="text"
                placeholder="Digite uma mensagem..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button onClick={handleSendMessage}>Enviar</button>
            </div>
          </div>

          {/* Controle de Versões */}
          <div className="versionControl">
            <div className="versionHeader">Controle de Versões de Documentos</div>
            <table className="versionTable">
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Versão</th>
                  <th>Editado por</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {versionsMock.map((v, i) => (
                  <tr key={i}>
                    <td>{v.docName}</td>
                    <td>{v.version}</td>
                    <td>{v.editedBy}</td>
                    <td>{v.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "20px", fontSize: "12px", color: "#aaa" }}>
            <strong>Observação sobre Chat:</strong> Este chat, no momento, funciona apenas
            localmente (não é real-time entre diferentes usuários). Para funcionar
            bidirecional em tempo real, integre com um backend usando WebSocket.
          </p>
        </div>
      </main>
    </div>
  );
}
