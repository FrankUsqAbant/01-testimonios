import "./Testimonio.css";

function Testimonio({ nombre, pais, imagen, cargo, empresa, testimonio }) {
  return (
    <article className="testimonio">
      <img
        className="testimonio-img"
        src={`${import.meta.env.BASE_URL}imagenes/testimonio-${imagen}.png`}
        alt={`Foto de ${nombre}`}
        loading="lazy"
        width="120"
        height="120"
      />
      <div className="testimonio-text">
        <p className="testimonio-nombre">
          {nombre} · <span>{pais}</span>
        </p>
        <p className="testimonio-cargo">
          {cargo} en {empresa}
        </p>
        <blockquote className="testimonio-quote">&ldquo;{testimonio}&rdquo;</blockquote>
      </div>
    </article>
  );
}

export default Testimonio;