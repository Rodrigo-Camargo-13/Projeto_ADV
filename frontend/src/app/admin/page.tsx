"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./admin.css";

export default function AdminLandingPage() {
  const router = useRouter();

  const handleBoxClick = (destination: string) => {
    router.push(destination);
  };

  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(/background_1.png)` }}
    >
      <header className="landing-header">
        <Image
          src="/logo_data.png"
          alt="Logo da Plataforma"
          className="landing-logo"
          width={150}
          height={60}
        />
        <h1 className="landing-title">Bem-vindo! Ao controle LegalMind ...</h1>
      </header>

      <main className="landing-main">
        <div className="boxes-container">
          <div className="box" onClick={() => handleBoxClick("/")}>
            <Image
              src="/site.png"
              alt="Site"
              className="box-image"
              width={140}
              height={140}
            />
            <span>SITE</span>
          </div>
          <div className="box admin-panel" onClick={() => handleBoxClick("/dashboard")}>
            <Image
              src="/adm.png"
              alt="Painel Administrativo"
              className="box-image"
              width={140}
              height={140}
            />
            <span>PAINEL ADMINISTRATIVO</span>
          </div>
        </div>
      </main>

      <footer className="landing-footer">
        <div className="footer-icons">
          <div className="footer-item">
            <Image src="/icon_telefone.png" alt="Telefone" width={24} height={24} />
            <span>(31) 99897-7237</span>
          </div>
          <div className="footer-item">
            <Image src="/icon_email.png" alt="Email" width={24} height={24} />
            <span>
              <a href="mailto:comercial@dataaccent.com.br">
                comercial@dataaccent.com.br
              </a>
            </span>
          </div>
          <div className="footer-item">
            <Image src="/icon_site.png" alt="Site" width={24} height={24} />
            <span>
              <a
                href="https://www.dataaccent.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dataaccent.com.br
              </a>
            </span>
          </div>
          <div className="footer-item">
            <Image src="/icon_rede.png" alt="Rede Social" width={24} height={24} />
            <span>
              <a href="#">@dataaccent</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

