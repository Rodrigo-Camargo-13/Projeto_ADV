"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./login.css"; // ✅ Caminho correto para os estilos

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  const handleRegister = () => {
    router.push("/cadastro");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload = { email, senha: password };
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

    try {
      const response = await fetch(`${backendUrl}/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Bem-vindo, ${data.nome}!`);

        localStorage.setItem("token", data.access_token);
        localStorage.setItem("perfil", data.perfil);

        router.push("/dashboard");
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.detail || "Erro desconhecido ao realizar login."}`);
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Fundo animado */}
      <div className="animated-bg"></div>

      <div className="login-container">
        <div className="image-section">
          <Image src="/background.png" alt="Login Background" className="login-image" width={1000} height={500} />
        </div>
        <div className="form-section">
          <Image src="/logo_data.png" alt="Logo" className="logo" width={180} height={60} onClick={handleLogoClick} />
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="forgot-password">
              <button type="button" className="forgot-password-button" onClick={handleForgotPassword}>
                Esqueceu a senha? <span>Clique aqui</span>
              </button>
            </div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Carregando..." : "LOGIN"}
            </button>
          </form>
          <div className="register-link">
            <button type="button" className="register-button" onClick={handleRegister}>
              Não tem uma conta? <span>Cadastre-se aqui</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
