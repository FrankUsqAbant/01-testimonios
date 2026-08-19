const testimonios = [
  {
    id: "shawn",
    nombre: "Shawn Wang",
    pais: "Singapur",
    imagen: "shawn",
    cargo: "Ingeniero de Software",
    empresa: "Amazon",
    testimonio: (
      <>
        &ldquo;<strong>Da miedo cambiar de carrera.</strong> Solo gané la confianza de que podía programar trabajando a través de cientos de horas de lecciones gratuitas. En un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.&rdquo;
      </>
    ),
  },
  {
    id: "sarah",
    nombre: "Sarah Chima",
    pais: "Nigeria",
    imagen: "sarah",
    cargo: "Ingeniera de Software",
    empresa: "ChatDesk",
    testimonio: (
      <>
        &ldquo;<strong>freeCodeCamp fue la puerta de entrada a mi carrera</strong> como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de principiante total a un nivel muy seguro.&rdquo;
      </>
    ),
  },
  {
    id: "emma",
    nombre: "Emma Bostian",
    pais: "Suecia",
    imagen: "emma",
    cargo: "Ingeniera de Software",
    empresa: "Spotify",
    testimonio: (
      <>
        &ldquo;Siempre tuve problemas para aprender JavaScript. He tomado muchos cursos, pero el de freeCodeCamp fue el que se quedó. <strong>Estudiar estructuras de datos y algoritmos me dio las habilidades</strong> y la confianza para conseguir el trabajo de mis sueños.&rdquo;
      </>
    ),
  },
];

function Testimonio({ nombre, pais, imagen, cargo, empresa, testimonio }) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={`${import.meta.env.BASE_URL}imagenes/testimonio-${imagen}.webp`}
        alt={`Foto de ${nombre}`}
        loading="lazy"
        decoding="async"
        width="220"
        height="220"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{nombre}</strong> en {pais}
        </p>
        <p className="cargo-testimonio">
          {cargo} en <strong>{empresa}</strong>
        </p>
        <p className="texto-testimonio">{testimonio}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="contenedor-principal">
      <h1 className="titulo-principal">
        Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
      </h1>
      {testimonios.map((t) => (
        <Testimonio key={t.id} {...t} />
      ))}
    </main>
  );
}