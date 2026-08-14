import "./App.css";
import Testimonio from "./componentes/Testimonio";

const testimonios = [
  {
    nombre: "Shawn Wang",
    pais: "Singapur",
    imagen: "shawn",
    cargo: "Ingeniero de Software",
    empresa: "Amazon",
    testimonio:
      "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de cientos de horas de lecciones gratuitas. En un año tuve un trabajo de seis cifras como ingeniero de software.",
  },
  {
    nombre: "Sarah Chima",
    pais: "Nigeria",
    imagen: "sarah",
    cargo: "Ingeniera de Software",
    empresa: "Amazon",
    testimonio:
      "La puerta de entrada a mi carrera como desarrolladora. El plan de estudios bien estructurado llevó mis conocimientos de programación de principiante total a un nivel muy seguro.",
  },
  {
    nombre: "Emma Bostian",
    pais: "Suecia",
    imagen: "emma",
    cargo: "Ingeniera de Software",
    empresa: "Spotify",
    testimonio:
      "Siempre tuve problemas para aprender JavaScript. El curso fue el que se quedó. Estudiar estructuras de datos y algoritmos me dio las habilidades y la confianza para conseguir el trabajo de mis sueños.",
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Testimonios</h1>
        <p>Lo que dicen quienes transformaron su carrera con la programación.</p>
      </header>

      <main className="testimonios">
        {testimonios.map((t) => (
          <Testimonio key={t.nombre} {...t} />
        ))}
      </main>
    </div>
  );
}

export default App;