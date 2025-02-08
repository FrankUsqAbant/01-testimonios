import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniera de Software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gane la confianza de que podia programar trabajando a traves de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambio mi vida."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="Amazon"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevo mis conocimientos de programacion de un nivel de principiantes total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increible."
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos
          cursos, pero el curso de freeCodeCamp fue el que se quedo. Estudiar
          JavaScript, asi como estructuras de datos y algoritmos en freeCodeCamp
          me dio habilidades y la confianza que necesitaba para conseguir el
          trabajo de mis sueños como ingeniero de sofware en Spotify."
        />
      </div>
    </div>
  );
}

export default App;
