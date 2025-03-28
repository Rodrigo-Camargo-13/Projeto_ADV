"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import "./chat-juridico.css";

export default function ChatJuridico() {
  const router = useRouter();
  const [mensagem, setMensagem] = useState("");
  const [etapa, setEtapa] = useState(0);
  const [historico, setHistorico] = useState([
    {
      origem: "bot",
      texto: "Olá! Seja bem-vindo ao Chat Jurídico. Para começar, informe seu nome completo.",
    },
  ]);

  const [dadosUsuario, setDadosUsuario] = useState({
    nome: "",
    cpf: "",
    endereco: "",
    telefone: "",
    necessidade: "",
  });

  const etapasAtendimento = [
    { chave: "nome", pergunta: "Agora, por favor, informe seu CPF." },
    { chave: "cpf", pergunta: "Informe seu endereço completo e telefone para contato." },
    { chave: "endereco", pergunta: "Explique brevemente sua necessidade jurídica." },
    {
      chave: "necessidade",
      pergunta:
        "Obrigado pelas informações! Você será encaminhado ao nosso especialista jurídico via WhatsApp.",
    },
  ];

  const enviarMensagem = () => {
    if (mensagem.trim() === "") return;

    const novaMensagem = { origem: "usuario", texto: mensagem };
    setHistorico((prev) => [...prev, novaMensagem]);

    if (etapa <= 3) {
      const campoAtual = etapasAtendimento[etapa]?.chave;
      setDadosUsuario((prev) => ({ ...prev, [campoAtual]: mensagem }));

      setTimeout(() => {
        setHistorico((prev) => [
          ...prev,
          { origem: "bot", texto: etapasAtendimento[etapa]?.pergunta },
        ]);
      }, 1000);

      if (etapa === 3) {
        setTimeout(() => abrirWhatsApp(), 2500);
      }

      setEtapa(etapa + 1);
    }

    setMensagem("");
  };

  const abrirWhatsApp = () => {
    const numero = "+5531998977237";
    const textoWhats = encodeURIComponent(
      `Olá, sou ${dadosUsuario.nome}.\nCPF: ${dadosUsuario.cpf}\nEndereço e Telefone: ${dadosUsuario.endereco}\n\nNecessidade jurídica:\n${dadosUsuario.necessidade}`
    );
    window.open(`https://wa.me/${numero}?text=${textoWhats}`, "_blank");
  };

  const handleReturn = () => {
    router.push("/admin-colaboracao");
  };

  return (
    <div className="chat-juridico-container">
      <header className="chat-header">
        <h1>Chat Jurídico</h1>
        <div className="chat-header-buttons">
          <button className="btn-retornar" onClick={handleReturn}>
            Retornar
          </button>
          <button className="btn-whatsapp" onClick={abrirWhatsApp}>
            <FaWhatsapp /> WhatsApp
          </button>
        </div>
      </header>

      <section className="chat-body">
        {historico.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.origem}`}>
            {msg.texto}
          </div>
        ))}
      </section>

      <footer className="chat-footer">
        <input
          type="text"
          placeholder="Digite aqui..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
        />
        <button className="btn-enviar" onClick={enviarMensagem}>
          <FaPaperPlane />
        </button>
      </footer>
    </div>
  );
}
