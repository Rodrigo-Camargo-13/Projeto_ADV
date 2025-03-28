"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaSave, FaEdit } from "react-icons/fa";
import {
  IoMdHome,
  IoMdNotifications,
  IoMdSpeedometer,
  IoMdCalendar,
  IoMdTrophy,
  IoMdSettings,
} from "react-icons/io";
import "./cadastro-clientes.css";

// Função para gerar um ID único automaticamente
const generateUniqueId = () => {
  return `CLI-${Date.now()}`;
};

export default function CadastroClientes() {
  const router = useRouter();

  const [idCliente, setIdCliente] = useState(generateUniqueId());
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Salvar cliente
  const handleSaveCliente = () => {
    if (nome && email && telefone && endereco && bairro && cep && cidade && estado) {
      console.log("Cliente cadastrado:", {
        idCliente,
        nome,
        email,
        telefone,
        endereco,
        bairro,
        cep,
        cidade,
        estado,
      });

      setSuccessMessage("Cliente cadastrado com sucesso!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setIsEditing(false);
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  // Retornar ao dashboard
  const handleReturn = () => {
    router.push("/dashboard");
  };

  return (
    <div className="layout">
      {/* SIDEBAR LATERAL */}
      <aside className="sidebar">
        <div className="navIcon"><IoMdHome size={20} /></div>
        <div className="navIcon"><IoMdNotifications size={20} /></div>
        <div className="navIcon"><IoMdSpeedometer size={20} /></div>
        <div className="navIcon"><IoMdCalendar size={20} /></div>
        <div className="navIcon"><IoMdTrophy size={20} /></div>
        <div className="navIcon"><IoMdSettings size={20} /></div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="mainContent">
        {/* Barra Superior */}
        <div className="topBar">
          <span className="topBarTitle">
            Cadastro de Clientes
          </span>
          <button className="returnButton" onClick={handleReturn}>
            <FaArrowLeft /> Retornar
          </button>
        </div>

        {/* Container Principal */}
        <div className="pageContainer">
          <div className="panel">
            <div className="panelTitle">Novo Cliente</div>

            <form className="service-form-body">
              {/* ID do Cliente */}
              <div className="srv-row single">
                <label>ID do Cliente</label>
                <input type="text" value={idCliente} readOnly />
              </div>

              {/* Nome e Email */}
              <div className="srv-row double">
                <div className="larger-field">
                  <label>Nome Completo *</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Telefone e Endereço */}
              <div className="srv-row double">
                <div>
                  <label>Telefone *</label>
                  <input
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Endereço *</label>
                  <input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Bairro e CEP */}
              <div className="srv-row double">
                <div>
                  <label>Bairro *</label>
                  <input
                    type="text"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>CEP *</label>
                  <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Cidade e Estado */}
              <div className="srv-row double">
                <div>
                  <label>Cidade *</label>
                  <input
                    type="text"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Estado *</label>
                  <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="AC">Acre (AC)</option>
                    <option value="AL">Alagoas (AL)</option>
                    <option value="AP">Amapá (AP)</option>
                    <option value="AM">Amazonas (AM)</option>
                    <option value="BA">Bahia (BA)</option>
                    <option value="CE">Ceará (CE)</option>
                    <option value="DF">Distrito Federal (DF)</option>
                    <option value="ES">Espírito Santo (ES)</option>
                    <option value="GO">Goiás (GO)</option>
                    <option value="MA">Maranhão (MA)</option>
                    <option value="MT">Mato Grosso (MT)</option>
                    <option value="MS">Mato Grosso do Sul (MS)</option>
                    <option value="MG">Minas Gerais (MG)</option>
                    <option value="PA">Pará (PA)</option>
                    <option value="PB">Paraíba (PB)</option>
                    <option value="PR">Paraná (PR)</option>
                    <option value="PE">Pernambuco (PE)</option>
                    <option value="PI">Piauí (PI)</option>
                    <option value="RJ">Rio de Janeiro (RJ)</option>
                    <option value="RN">Rio Grande do Norte (RN)</option>
                    <option value="RS">Rio Grande do Sul (RS)</option>
                    <option value="RO">Rondônia (RO)</option>
                    <option value="RR">Roraima (RR)</option>
                    <option value="SC">Santa Catarina (SC)</option>
                    <option value="SP">São Paulo (SP)</option>
                    <option value="SE">Sergipe (SE)</option>
                    <option value="TO">Tocantins (TO)</option>
                  </select>
                </div>
              </div>

              {/* Botões */}
              <div className="button-group">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <FaEdit /> Editar
                </button>
                <button
                  type="button"
                  className="srv-btn-confirm"
                  onClick={handleSaveCliente}
                >
                  <FaSave /> Salvar
                </button>
              </div>

              {/* Mensagem de Sucesso */}
              {successMessage && (
                <p className="srv-success-message">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
