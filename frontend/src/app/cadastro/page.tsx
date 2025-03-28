"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./register.css"; 

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const router = useRouter();

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      nome: nome.trim(),
      email: email.trim(),
      senha: senha.trim(),
      confirmacao_senha: confirmSenha.trim(),
    };

    try {
      const response = await fetch(`${backendUrl}/api/cadastro/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        router.push("/login");
      } else {
        const errorData = await response.json();
        console.error("Erro no backend:", errorData);
        alert(`Erro ao cadastrar: ${errorData.detail}`);
      }
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="image-section">
          <Image 
            src="/background.png" 
            alt="Register Background" 
            className="register-image" 
            width={1920} 
            height={1080} 
            priority
          />
        </div>
        <div className="form-section">
          <Image
            src="/logo_data.png"
            alt="Logo"
            className="logo"
            width={180}
            height={60}
            onClick={handleLogoClick}
          />
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome de Usuário"
              className="form-input"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirme a senha"
              className="form-input"
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
              required
            />
            <button type="submit" className="register-button">Confirmar Cadastro</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
