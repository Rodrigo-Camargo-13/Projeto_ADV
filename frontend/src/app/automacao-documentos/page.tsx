"use client";
import React, { useState } from "react";
import "./automacao-documentos.css";
import { FaHome, FaBell, FaChartLine, FaCalendarAlt, FaTrophy, FaCog, FaCheck } from "react-icons/fa";
import jsPDF from "jspdf";
import { useRouter } from "next/navigation";

export default function AutomacaoDocumentos() {
  const router = useRouter(); // Para navegar ao dashboard

  // Estado do tipo de documento
  const [tipoDocumento, setTipoDocumento] = useState("");

  // Campos do formulário
  const [nomeCliente, setNomeCliente] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [descricaoFatos, setDescricaoFatos] = useState("");
  const [data, setData] = useState("");
  const [testemunhas, setTestemunhas] = useState("");
  const [valorContrato, setValorContrato] = useState("");
  const [assunto, setAssunto] = useState("");

  // Função para gerar PDF
  const gerarDocumentoPDF = () => {
    // Verifica se os campos obrigatórios foram preenchidos
    if (
      !tipoDocumento ||
      !nomeCliente ||
      !endereco ||
      !email ||
      !telefone ||
      !descricaoFatos ||
      !data ||
      !assunto
    ) {
      alert("⚠️ Preencha todos os campos obrigatórios antes de gerar o documento!");
      return;
    }

    // Cria instância do jsPDF
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    // Título do PDF
    doc.setFontSize(14);
    doc.text(`${tipoDocumento.toUpperCase()} GERADO`, 40, 40);

    // Conteúdo do PDF
    doc.setFontSize(11);
    const conteudo = `
Nome: ${nomeCliente}
Endereço: ${endereco}
E-mail: ${email}
Telefone: ${telefone}
CEP: ${cep}
Bairro: ${bairro}
Cidade: ${cidade}
Estado: ${estado}

Descrição do Assunto: ${descricaoFatos}
Data: ${data}
Testemunhas: ${testemunhas}
Valor do Contrato: ${valorContrato}
Assunto do Documento: ${assunto}

---
Documento gerado com sucesso para fins de exemplo.
(Altere conforme sua necessidade.)
    `;
    const linhas = doc.splitTextToSize(conteudo, 500);
    doc.text(linhas, 40, 70);

    // Salvar PDF
    doc.save(`${tipoDocumento}_gerado.pdf`);
  };

  // Retornar ao dashboard
  const handleReturn = () => {
    router.push("/dashboard");
  };

  return (
    <div className="automacao-container">
      {/* SIDEBAR */}
      <nav className="sidebar">
        <ul>
          <li><FaHome size={20} /></li>
          <li><FaBell size={20} /></li>
          <li><FaChartLine size={20} /></li>
          <li><FaCalendarAlt size={20} /></li>
          <li><FaTrophy size={20} /></li>
          <li><FaCog size={20} /></li>
        </ul>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="content">
        {/* TOPO */}
        <div className="header-top">
          <h3>Olá seja bem vindo!</h3>
          <div className="buttons">
            <select
              className="btn-tipo-documento"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
            >
              <option value="">Tipo de Documento</option>
              <option value="Contrato">Contrato</option>
              <option value="Petição">Petição</option>
              <option value="Procuração">Procuração</option>
            </select>
            {/* Botão Retornar → Dashboard */}
            <button className="btn-retornar" onClick={handleReturn}>
              Retornar
            </button>
          </div>
        </div>

        {/* CARD DE FORMULÁRIO */}
        <div className="form-area">
          {/* Nome e Endereço */}
          <div className="input-line">
            <label>Nome</label>
            <input
              type="text"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(e.target.value)}
            />
          </div>
          <div className="input-line">
            <label>Endereço</label>
            <input
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          {/* Linha de 3 colunas: E-mail, Telefone, CEP */}
          <div className="row3">
            <div>
              <label>E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Telefone</label>
              <input
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div>
              <label>CEP</label>
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
          </div>

          {/* Linha de 3 colunas: Bairro, Cidade, Estado */}
          <div className="row3">
            <div>
              <label>Bairro</label>
              <input
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>
            <div>
              <label>Cidade</label>
              <input
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <div>
              <label>Estado</label>
              <input
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </div>
          </div>

          {/* Campo "Descreva o assunto" */}
          <div className="input-line">
            <label>Descreva o assunto</label>
            <input
              type="text"
              value={descricaoFatos}
              onChange={(e) => setDescricaoFatos(e.target.value)}
            />
          </div>

          {/* Linha com Data, Testemunhas, Valor do Contrato, Assunto do Documento */}
          <div className="row4">
            <div>
              <label>Data</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div>
              <label>Testemunhas</label>
              <input
                type="text"
                value={testemunhas}
                onChange={(e) => setTestemunhas(e.target.value)}
              />
            </div>
            <div>
              <label>Valor do contrato</label>
              <input
                type="text"
                value={valorContrato}
                onChange={(e) => setValorContrato(e.target.value)}
              />
            </div>
            <div>
              <label>Assunto do documento</label>
              <input
                type="text"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTÃO VERDE FIXO NO CANTO INFERIOR DIREITO */}
      <button className="confirmButton" onClick={gerarDocumentoPDF}>
        <FaCheck size={30} />
      </button>
    </div>
  );
}
