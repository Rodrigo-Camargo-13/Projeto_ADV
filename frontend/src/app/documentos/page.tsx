"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaEdit,
  FaSave,
  FaHome,
  FaBell,
  FaChartLine,
  FaCalendarAlt,
  FaTrophy,
  FaCog,
} from "react-icons/fa";

import "./documentos.css";

export default function Documentos() {
  const router = useRouter();

  const [processoNumero, setProcessoNumero] = useState("");
  const [clienteNome, setClienteNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [documentos, setDocumentos] = useState<File[]>([]);
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleUpload = () => {
    if (arquivo) {
      setDocumentos([...documentos, arquivo]);
      setArquivo(null);
      setSuccessMessage("Documento enviado com sucesso!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const handleSave = () => {
    if (!processoNumero || !clienteNome) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    console.log("Salvando processo:", {
      processoNumero,
      clienteNome,
      descricao,
      documentos,
    });

    setSuccessMessage("Processo salvo com sucesso!");
    setTimeout(() => setSuccessMessage(""), 3000);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleReturn = () => {
    router.push("/dashboard");
  };

  return (
    <div className="documentos-layout">
      {/* SIDEBAR PADRÃO */}
      <aside className="documentos-sidebar">
        <div className="icon"><FaHome size={20} /></div>
        <div className="icon"><FaBell size={20} /></div>
        <div className="icon"><FaChartLine size={20} /></div>
        <div className="icon"><FaCalendarAlt size={20} /></div>
        <div className="icon"><FaTrophy size={20} /></div>
        <div className="icon"><FaCog size={20} /></div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="register-service-page">
        {/* Barra Superior */}
        <header className="service-header-bar">
          <h1>
            <span className="highlight">Cadastro</span> de Processo e Documentos
          </h1>
          <div className="button-group">
            <button className="return-btn" onClick={handleReturn}>
              <FaArrowLeft /> Retornar
            </button>
            <button
              className="srv-new-service-btn"
              onClick={() => {
                setProcessoNumero("");
                setClienteNome("");
                setDescricao("");
                setDocumentos([]);
                setIsEditing(true);
              }}
            >
              Novo Processo
            </button>
          </div>
        </header>

        {/* Card Principal */}
        <div className="service-form-card">
          <form className="service-form-body">
            {/* Campos */}
            <div className="srv-row double">
              <div>
                <label>
                  Número do Processo <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: 123456-78.2024.8.09.0001"
                  required
                  value={processoNumero}
                  onChange={(e) => setProcessoNumero(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="larger-field">
                <label>
                  Nome do Cliente <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: João Silva"
                  required
                  value={clienteNome}
                  onChange={(e) => setClienteNome(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Descrição */}
            <div className="srv-row single">
              <div>
                <label>Descrição do Processo</label>
                <textarea
                  className="larger-textarea"
                  placeholder="Detalhe o processo aqui..."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Upload */}
            <div className="upload-section">
              <h3>Adicionar Documentos</h3>
              <input
                type="file"
                onChange={(e) => setArquivo(e.target.files ? e.target.files[0] : null)}
                disabled={!isEditing}
              />
              <button
                type="button"
                onClick={handleUpload}
                className="srv-btn-confirm"
                disabled={!isEditing}
              >
                Enviar Documento
              </button>
            </div>

            {/* Lista */}
            <div className="documentos-list">
              <h3>Documentos Enviados</h3>
              <table>
                <thead>
                  <tr>
                    <th>Nome do Documento</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {documentos.length > 0 ? (
                    documentos.map((doc, index) => (
                      <tr key={index}>
                        <td>{doc.name}</td>
                        <td>
                          <button
                            className="desmarcar"
                            onClick={() =>
                              setDocumentos(documentos.filter((_, i) => i !== index))
                            }
                            disabled={!isEditing}
                          >
                            Remover
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="no-docs">
                        Nenhum documento enviado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Ações */}
            <div className="button-group save-edit-buttons">
              {isEditing ? (
                <button type="button" className="srv-btn-confirm" onClick={handleSave}>
                  <FaSave /> Salvar
                </button>
              ) : (
                <button type="button" className="edit-btn" onClick={handleEdit}>
                  <FaEdit /> Editar
                </button>
              )}
            </div>

            {/* Mensagem */}
            {successMessage && (
              <p className="srv-success-message">{successMessage}</p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
