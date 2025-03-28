"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillHome, AiFillBell } from "react-icons/ai";
import { FaTachometerAlt, FaCalendarAlt, FaTrophy, FaCog, FaArrowLeft } from "react-icons/fa";
import "./admin-blog.css";

type BlogBlockKey = "bloco1" | "bloco2";

type BlogBlockContent = {
  titulo: string;
  texto: string;
  videoUrl: string;
};

type BlogContentState = Record<BlogBlockKey, BlogBlockContent>;

export default function AdminBlogJuridicoPage() {
  const router = useRouter();

  const [edicao, setEdicao] = useState<number>(10290); // valor inicial padrão
  const [conteudo, setConteudo] = useState<BlogContentState>({
    bloco1: {
      titulo: "COMO A LEI ESTÁ MUDANDO O MERCADO JURÍDICO",
      texto: "O setor jurídico está em constante evolução...",
      videoUrl: "/posicao_1.mp4",
    },
    bloco2: {
      titulo: "O FUTURO DA ADVOCACIA DIGITAL",
      texto: "A digitalização de documentos e audiências virtuais...",
      videoUrl: "/posicao_2.mp4",
    },
  });

  // ✅ Carrega do localStorage com segurança no navegador
  useEffect(() => {
    if (typeof window !== "undefined") {
      const edicaoSalva = localStorage.getItem("blogJuridicoEdicao");
      if (edicaoSalva) setEdicao(Number(edicaoSalva));

      const salvo = localStorage.getItem("blogJuridicoConteudo");
      if (salvo) {
        try {
          const json = JSON.parse(salvo);
          setConteudo(json);
        } catch (err) {
          console.error("Erro ao carregar conteúdo salvo do blog:", err);
        }
      }
    }
  }, []);

  const handleChange = (
    bloco: BlogBlockKey,
    campo: keyof BlogBlockContent,
    valor: string
  ) => {
    setConteudo((prev) => ({
      ...prev,
      [bloco]: {
        ...prev[bloco],
        [campo]: valor,
      },
    }));
  };

  const handleFileUpload = (bloco: BlogBlockKey, file: File | null) => {
    if (file) {
      const videoURL = URL.createObjectURL(file);
      handleChange(bloco, "videoUrl", videoURL);
    }
  };

  const handleSalvar = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("blogJuridicoConteudo", JSON.stringify(conteudo));
      const novaEdicao = edicao + 1;
      setEdicao(novaEdicao);
      localStorage.setItem("blogJuridicoEdicao", novaEdicao.toString());
      alert("Alterações salvas com sucesso!");
    }
  };

  const handleRetornar = () => {
    router.push("/dashboard");
  };

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="navIcon"><AiFillHome size={20} /></div>
        <div className="navIcon"><AiFillBell size={20} /></div>
        <div className="navIcon"><FaTachometerAlt size={20} /></div>
        <div className="navIcon"><FaCalendarAlt size={20} /></div>
        <div className="navIcon"><FaTrophy size={20} /></div>
        <div className="navIcon"><FaCog size={20} /></div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="mainContent">
        <div className="topBar">
          <span className="topBarTitle">Administração do Blog Jurídico</span>
          <button className="returnButton" onClick={handleRetornar}>
            <FaArrowLeft /> Retornar
          </button>
        </div>

        <div className="pageContainer">
          <h2>Edição Nº {edicao}</h2>

          {(["bloco1", "bloco2"] as BlogBlockKey[]).map((bloco, index) => (
            <div key={bloco} style={{ marginBottom: "40px" }}>
              <h2>Bloco {index + 1}</h2>

              <label>Título:</label>
              <input
                type="text"
                value={conteudo[bloco].titulo}
                onChange={(e) => handleChange(bloco, "titulo", e.target.value)}
              />

              <label>Texto:</label>
              <textarea
                value={conteudo[bloco].texto}
                onChange={(e) => handleChange(bloco, "texto", e.target.value)}
                rows={5}
              />

              <label>URL do Vídeo:</label>
              <input
                type="text"
                value={conteudo[bloco].videoUrl}
                onChange={(e) => handleChange(bloco, "videoUrl", e.target.value)}
              />

              <label>Ou selecione um arquivo de vídeo:</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) =>
                  handleFileUpload(bloco, e.target.files?.[0] || null)
                }
              />

              <div style={{ marginTop: "20px" }}>
                <video
                  src={conteudo[bloco].videoUrl}
                  controls
                  style={{ width: "100%", borderRadius: "8px", maxHeight: "320px" }}
                />
              </div>
            </div>
          ))}

          <button onClick={handleSalvar} className="save-button">
            Salvar Alterações
          </button>
        </div>
      </main>
    </div>
  );
}
