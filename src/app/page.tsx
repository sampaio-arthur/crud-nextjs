"use client";

import Pagina from "./components/template/Pagina";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pagina>
      <div style={containerStyle}>
        <h1 
          style={{ 
            ...welcomeTextStyle, 
            textShadow: isHovered ? "0 0 10px white, 0 0 20px violet, 0 0 30px violet" : "none" 
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Bem-vindo ao CRUD em Next.js
        </h1>
        <p style={descriptionStyle}>
          Esta é uma aplicação CRUD simples feita com Next.js, React, TypeScript, Prisma e SQLite.
        </p>
      </div>
    </Pagina>
  );
}


const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(to right, #3b1b69, #000000)",
  color: "white",
  textAlign: "center",
  padding: "20px",
};

const welcomeTextStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  margin: "0",
  transition: "text-shadow 0.3s ease",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  marginTop: "10px",
};
