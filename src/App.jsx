import { useState, useMemo } from "react";
import "./App.css";

// Datos de los testimonios
const TESTIMONIOS_DATA = [
  {
    id: "shawn-wang",
    nombre: "Shawn Wang",
    pais: "Singapur",
    imagen: "shawn",
    cargo: "Ingeniero de Software",
    empresa: "Amazon",
    testimonio:
      "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de cientos de horas de lecciones gratuitas. En un año tuve un trabajo de seis cifras como ingeniero de software.",
  },
  {
    id: "sarah-chima",
    nombre: "Sarah Chima",
    pais: "Nigeria",
    imagen: "sarah",
    cargo: "Ingeniera de Software",
    empresa: "Amazon",
    testimonio:
      "La puerta de entrada a mi carrera como desarrolladora. El plan de estudios bien estructurado llevó mis conocimientos de programación de principiante total a un nivel muy seguro.",
  },
  {
    id: "emma-bostian",
    nombre: "Emma Bostian",
    pais: "Suecia",
    imagen: "emma",
    cargo: "Ingeniera de Software",
    empresa: "Spotify",
    testimonio:
      "Siempre tuve problemas para aprender JavaScript. El curso fue el que se quedó. Estudiar estructuras de datos y algoritmos me dio las habilidades y la confianza para conseguir el trabajo de mis sueños.",
  },
];

// Componente Testimonio individual
function Testimonio({ nombre, pais, imagen, cargo, empresa, testimonio }) {
  const imageUrl = `${import.meta.env.BASE_URL}imagenes/testimonio-${imagen}.webp`;

  return (
    <article className="testimonio-card" aria-label={`Testimonio de ${nombre}`}>
      <div className="testimonio-avatar-wrapper">
        <img
          className="testimonio-img"
          src={imageUrl}
          alt={`Retrato de ${nombre}`}
          loading="lazy"
          decoding="async"
          width="100"
          height="100"
        />
        <span className="testimonio-badge-country" title={`País: ${pais}`}>
          {pais}
        </span>
      </div>

      <div className="testimonio-content">
        <header className="testimonio-header">
          <h2 className="testimonio-nombre">{nombre}</h2>
          <p className="testimonio-cargo">
            <span className="cargo-text">{cargo}</span> en{" "}
            <strong className="empresa-text">{empresa}</strong>
          </p>
        </header>

        <blockquote className="testimonio-quote">
          <p>&ldquo;{testimonio}&rdquo;</p>
        </blockquote>
      </div>
    </article>
  );
}

// Componente Principal
export default function App() {
  const [selectedEmpresa, setSelectedEmpresa] = useState("Todas");

  const empresas = useMemo(() => {
    const unique = Array.from(new Set(TESTIMONIOS_DATA.map((t) => t.empresa)));
    return ["Todas", ...unique];
  }, []);

  const filteredTestimonios = useMemo(() => {
    if (selectedEmpresa === "Todas") return TESTIMONIOS_DATA;
    return TESTIMONIOS_DATA.filter((t) => t.empresa === selectedEmpresa);
  }, [selectedEmpresa]);

  return (
    <div className="app-container">
      <header className="hero-header">
        <span className="hero-badge">Historias de Éxito</span>
        <h1 className="hero-title">Testimonios de la Comunidad</h1>
        <p className="hero-subtitle">
          Descubre cómo estudiantes y profesionales transformaron sus vidas y carreras a través de la programación.
        </p>

        <nav className="filter-bar" aria-label="Filtrar testimonios por empresa">
          {empresas.map((empresa) => (
            <button
              key={empresa}
              type="button"
              className={`filter-btn ${selectedEmpresa === empresa ? "active" : ""}`}
              onClick={() => setSelectedEmpresa(empresa)}
            >
              {empresa}
            </button>
          ))}
        </nav>
      </header>

      <main className="testimonios-list" aria-live="polite">
        {filteredTestimonios.map((t) => (
          <Testimonio key={t.id || t.nombre} {...t} />
        ))}
      </main>

      <footer className="app-footer">
        <p>
          Proyecto interactivo optimizado con <strong>React</strong> &amp; <strong>Vite</strong>.
        </p>
      </footer>
    </div>
  );
}