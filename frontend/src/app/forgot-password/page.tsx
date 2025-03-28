"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./forgot-password.css"; // CSS isolado para essa página

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

    try {
      const response = await fetch(
        `${backendUrl}/api/redefinir-senha/solicitar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        alert("Um link de redefinição foi enviado para seu e-mail.");
        router.push("/login");
      } else {
        const error = await response.json();
        alert(
          `Erro: ${error.detail || "Não foi possível enviar o link de redefinição."}`
        );
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-container">
        {/* Lado com imagem */}
        <div className="forgot-image-section">
          <Image
            src="/background.png"
            alt="Imagem de fundo"
            className="forgot-image"
            width={1000}
            height={500}
          />
        </div>

        {/* Lado do formulário */}
        <div className="forgot-form-section">
          <Image
            src="/logo_data.png"
            alt="Logo"
            className="forgot-logo"
            width={180}
            height={60}
            onClick={handleLogoClick}
          />
          <h2 className="forgot-form-title">Recuperar Senha</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="forgot-form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="forgot-submit-button"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Link de Redefinição"}
            </button>
          </form>

          <div className="forgot-back-link">
            <button
              type="button"
              className="forgot-back-button"
              onClick={() => router.push("/login")}
            >
              Voltar para o login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

