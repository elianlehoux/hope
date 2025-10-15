"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="modern-container">
      {/* Background con gradiente moderno */}
      <div className="modern-background">
        <div className="gradient-overlay"></div>
      </div>

      {/* Contenido principal */}
      <div className="modern-content">
        {/* Imagen principal */}
        <div className="hero-image-container">
          <Image
            src="/hero-image.png"
            alt="Hope Aviation"
            width={600}
            height={400}
            priority
            className="hero-image"
          />
        </div>

        {/* Título principal */}
        <div className="title-section">
          <h1 className="main-title">
            <span className="title-word">Coming</span>
            <span className="title-word-soon">Soon</span>
          </h1>
        </div>
      </div>

      {/* Footer minimalista */}
      <footer className="modern-footer">
        <p>&copy; 2025 Hope Aviation. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}