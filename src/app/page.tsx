"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const beers = [
  {
    emoji: "🍺",
    name: "IPA Tropical",
    style: "India Pale Ale",
    desc: "Explosiva y lupulada, con notas cítricas y tropicales que te transportan a otro nivel.",
    abv: "6.5% ABV",
    color: "#D4860A",
  },
  {
    emoji: "🌾",
    name: "Amber Ale",
    style: "Amber Ale",
    desc: "Malta caramelizada en perfecta armonía. Equilibrada, suave y reconfortante.",
    abv: "5.2% ABV",
    color: "#B87333",
  },
  {
    emoji: "🌑",
    name: "Stout Oscura",
    style: "Imperial Stout",
    desc: "Cuerpo denso y envolvente. Notas profundas de café tostado y chocolate amargo.",
    abv: "8.0% ABV",
    color: "#4a3728",
  },
  {
    emoji: "🍋",
    name: "Wheat Beer",
    style: "Weizen",
    desc: "Refrescante y liviana. Cítricos brillantes con un toque de especias y levadura.",
    abv: "4.8% ABV",
    color: "#c8a84b",
  },
];

const steps = [
  {
    num: "01",
    title: "Selección de Ingredientes",
    desc: "Cada receta comienza con la selección cuidadosa de maltas, lúpulos, levaduras y agua. Solo los mejores ingredientes.",
    icon: "🌾",
  },
  {
    num: "02",
    title: "Fermentación & Macerado",
    desc: "El arte de la temperatura, el tiempo y la química. Cada lote fermenta en condiciones controladas para desarrollar su carácter único.",
    icon: "🧪",
  },
  {
    num: "03",
    title: "Embotellado & Degustación",
    desc: "El momento de la verdad. Cada botella es una promesa de calidad, sellada con cuidado y lista para ser compartida.",
    icon: "🍺",
  },
];

export default function Home() {
  const sectionRefs = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: "#111111", color: "#F5F0E8" }}>
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
          background: "rgba(17,17,17,0.9)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(212,134,10,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#D4860A", fontWeight: 700 }}>
            🍺 TecnoBeer
          </span>
          <div style={{ display: "flex", gap: "32px" }}>
            {["Inicio", "Sobre Mí", "Cervezas", "Proceso", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-").replace("é", "e").replace("í", "i")}`}
                style={{ color: "#aaa", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D4860A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/hero-beer.png"
          alt="TecnoBeer Hero"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(17,17,17,0.5) 0%, rgba(17,17,17,0.75) 60%, rgba(17,17,17,1) 100%)",
          }}
        />
        <div style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: "800px" }}>
          <p
            style={{
              color: "#D4860A",
              fontSize: "0.95rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            Artesano Cervecero
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "16px",
              color: "#F5F0E8",
            }}
          >
            Nelson Ripper
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#ccc",
              marginBottom: "40px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            TecnoBeer · Donde la ciencia se convierte en sabor
          </p>
          <a
            href="#sobre-mi"
            style={{
              display: "inline-block",
              background: "#D4860A",
              color: "#111",
              padding: "14px 40px",
              borderRadius: "4px",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "1rem",
              transition: "background 0.2s, transform 0.2s",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F0A020";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#D4860A";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Conoce mi Arte
          </a>
        </div>
        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ color: "#666", fontSize: "0.75rem", letterSpacing: "0.2em" }}>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #D4860A, transparent)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre-mi" style={{ padding: "120px 24px", background: "#141414" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div className="animate-on-scroll" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                border: "2px solid rgba(212,134,10,0.3)",
                borderRadius: "12px",
                transform: "rotate(-2deg)",
              }}
            />
            <Image
              src="/images/nelson-portrait.png"
              alt="Nelson Ripper - TecnoBeer"
              width={500}
              height={500}
              style={{ borderRadius: "10px", width: "100%", height: "auto", position: "relative" }}
            />
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: "0.15s" }}>
            <p style={{ color: "#D4860A", fontSize: "0.85rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
              Sobre Mí
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              Bienvenido a <span style={{ color: "#D4860A" }}>TecnoBeer</span>
            </h2>
            <p style={{ color: "#bbb", lineHeight: 1.8, marginBottom: "32px", fontSize: "1.05rem" }}>
              Soy Nelson Ripper, cervecero artesanal apasionado por crear experiencias únicas en cada sorbo.
              Combino tradición, técnica y creatividad para elaborar cervezas que cuentan historias. Cada receta
              es un experimento, cada lote es una obra.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Más de 5 años elaborando cervezas artesanales",
                "Ingredientes 100% seleccionados con rigurosidad",
                "Recetas únicas desarrolladas con método científico",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "#D4860A", fontSize: "1.2rem", marginTop: "2px" }}>✦</span>
                  <span style={{ color: "#ccc", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEERS */}
      <section id="cervezas" style={{ padding: "120px 24px", background: "#111111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ color: "#D4860A", fontSize: "0.85rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
              Mis Creaciones
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Especialidades
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {beers.map((beer, i) => (
              <div
                key={beer.name}
                className="animate-on-scroll"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  background: "#1a1a1a",
                  border: "1px solid rgba(212,134,10,0.2)",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  transition: "border-color 0.3s, transform 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212,134,10,0.7)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212,134,10,0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{beer.emoji}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", marginBottom: "4px" }}>
                  {beer.name}
                </h3>
                <p style={{ color: "#D4860A", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
                  {beer.style} · {beer.abv}
                </p>
                <p style={{ color: "#999", lineHeight: 1.7, fontSize: "0.95rem" }}>{beer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" style={{ padding: "120px 24px", background: "#141414" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ color: "#D4860A", fontSize: "0.85rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
              El Arte Detrás de Cada Botella
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              El Proceso
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="animate-on-scroll"
                style={{
                  transitionDelay: `${i * 0.15}s`,
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "32px",
                  alignItems: "flex-start",
                  paddingBottom: i < steps.length - 1 ? "48px" : "0",
                  position: "relative",
                }}
              >
                {/* Number + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      border: "2px solid #D4860A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: "2px", flex: 1, background: "rgba(212,134,10,0.3)", marginTop: "8px", minHeight: "40px" }} />
                  )}
                </div>
                <div style={{ paddingTop: "12px" }}>
                  <span style={{ color: "#D4860A", fontSize: "0.75rem", letterSpacing: "0.2em", fontWeight: 600 }}>
                    {step.num}
                  </span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", margin: "8px 0 12px" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "#999", lineHeight: 1.75, fontSize: "0.97rem" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EASTER EGG */}
      <section
        style={{
          padding: "64px 24px",
          background: "#0f0f0f",
          borderTop: "1px solid rgba(212,134,10,0.1)",
          borderBottom: "1px solid rgba(212,134,10,0.1)",
        }}
      >
        <div className="animate-on-scroll" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#555", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
            🕹️ Easter Egg
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            <Image
              src="/images/char_nelson.png"
              alt="Nelson Ripper — Street Fighter Edition"
              width={80}
              height={80}
              className="pixel-art"
              style={{ imageRendering: "pixelated" }}
            />
            <div style={{ textAlign: "left" }}>
              <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: 1.6 }}>
                ¿Sabías que Nelson también es un{" "}
                <span style={{ color: "#D4860A", fontWeight: 600 }}>luchador legendario</span>?
                <br />
                <span style={{ fontSize: "0.85rem", color: "#666" }}>
                  Tan peligroso con sus puños como con sus recetas.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" style={{ padding: "120px 24px", background: "#111111" }}>
        <div className="animate-on-scroll" style={{ maxWidth: "650px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#D4860A", fontSize: "0.85rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
            Contacto
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "20px" }}>
            ¿Hablamos de Cerveza?
          </h2>
          <p style={{ color: "#999", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "48px" }}>
            ¿Interesado en mis cervezas, una colaboración o simplemente quieres tomarte una? Escríbeme.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <a
              href="mailto:nelson.ripper@tecnobeer.cl"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "#ccc",
                textDecoration: "none",
                fontSize: "1.05rem",
                padding: "16px 32px",
                border: "1px solid rgba(212,134,10,0.3)",
                borderRadius: "8px",
                transition: "border-color 0.2s, color 0.2s",
                minWidth: "300px",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D4860A";
                e.currentTarget.style.color = "#D4860A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,134,10,0.3)";
                e.currentTarget.style.color = "#ccc";
              }}
            >
              📧 nelson.ripper@tecnobeer.cl
            </a>
            <a
              href="https://instagram.com/tecnobeer"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "#ccc",
                textDecoration: "none",
                fontSize: "1.05rem",
                padding: "16px 32px",
                border: "1px solid rgba(212,134,10,0.3)",
                borderRadius: "8px",
                transition: "border-color 0.2s, color 0.2s",
                minWidth: "300px",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D4860A";
                e.currentTarget.style.color = "#D4860A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,134,10,0.3)";
                e.currentTarget.style.color = "#ccc";
              }}
            >
              📱 @tecnobeer
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "32px 24px",
          background: "#0d0d0d",
          borderTop: "1px solid rgba(212,134,10,0.15)",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#555", fontSize: "0.9rem" }}>
          © 2026 <span style={{ color: "#D4860A" }}>TecnoBeer</span> · Nelson Ripper · Hecho con ❤️ y 🍺
        </p>
      </footer>
    </main>
  );
}
