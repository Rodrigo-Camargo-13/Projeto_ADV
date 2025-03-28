"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./admin-colaboracao.css";

// Ajuste os caminhos das imagens conforme sua estrutura
import logo from "/public/logo_data.png";
import kanbanIcon from "/public/kanban.png";
import chatIcon from "/public/chat.png";
import notificacoesIcon from "/public/notificacoes.png";
import blogIcon from "/public/blog.png";
import userIcon from "/public/user_icon.png";

const AdminColaboracaoPage = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="admin-colaboracao-page">
      {/* Sidebar */}
      <aside className="sidebar-colaboracao">
        <div className="logo-colaboracao">
          <Image src={logo} alt="Logo" width={120} height={50} priority />
        </div>

        <nav className="menu-colaboracao">
          <ul>
            <li onClick={() => handleNavigation("/")}>Home</li>
            <li onClick={() => handleNavigation("/dashboard")}>Painel Administrativo</li>
            <li onClick={() => handleNavigation("/colaboracao")}>Colaboração</li>
            <li onClick={() => handleNavigation("/chat-juridico")}>Chat Jurídico</li>
            <li onClick={() => handleNavigation("/notificacoes")}>Notificações</li>
            <li onClick={() => handleNavigation("/admin-blog")}>Blog Jurídico</li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="conteudo-colaboracao">
        <header className="cabecalho-colaboracao">
          <div className="usuario-colaboracao">
            <Image src={userIcon} alt="Usuário" width={40} height={40} priority />
            <span>Olá, seja bem-vindo!</span>
          </div>
        </header>

        <div className="cards-colaboracao">
          <div className="card-colaboracao" onClick={() => handleNavigation("/colaboracao")}>
            <Image src={kanbanIcon} alt="Colaboração" width={70} height={70} />
            <span className="card-titulo">Colaboração Entre Equipe</span>
          </div>

          <div className="card-colaboracao" onClick={() => handleNavigation("/chat-juridico")}>
            <Image src={chatIcon} alt="Chat Jurídico" width={70} height={70} />
            <span className="card-titulo">Chat Jurídico</span>
          </div>

          <div className="card-colaboracao" onClick={() => handleNavigation("/notificacoes")}>
            <Image src={notificacoesIcon} alt="Notificações" width={70} height={70} />
            <span className="card-titulo">Notificações</span>
          </div>

          <div className="card-colaboracao" onClick={() => handleNavigation("/admin-blog")}>
            <Image src={blogIcon} alt="Blog Jurídico" width={70} height={70} />
            <span className="card-titulo">Blog Jurídico</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminColaboracaoPage;