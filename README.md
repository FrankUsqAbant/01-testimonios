<div align="center">
  <br>
  <img src="https://readme-typing-svg.demolab.com?font=Syne&weight=700&size=34&duration=1800&pause=800&color=C6A962&center=true&vCenter=true&width=600&lines=Testimonios;React+%2B+Vite" alt="Testimonios" />
  <br><br>

  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-2A8C5A?style=for-the-badge&logo=github&logoColor=white" />
  <br><br>
</div>

---

## 💬 Testimonios

Ejercicio de React que demuestra el renderizado de listas con `map`, el paso de props y buenas prácticas de accesibilidad.

### ✨ Características

- **Datos como array de objetos** — renderizado declarativo con `.map()`
- **Componente reutilizable** — `Testimonio` recibe props con desestructuración
- **Accesibilidad** — `alt` descriptivo, `loading="lazy"`, HTML semántico (`<article>`, `<blockquote>`)
- **Rutas correctas en Pages** — `import.meta.env.BASE_URL` para imágenes
- **Diseño moderno** — glassmorphism, tipografía Syne + DM Sans
- **Responsive** — mobile-first

### 🚀 Demo

**[Ver demo en vivo](https://frankusqabant.github.io/01-testimonios/)**

### 🛠️ Instalación

```bash
npm install
npm run dev     # Desarrollo
npm run build   # Producción
```

### 📂 Estructura

```
src/
├── App.jsx                    # Datos + renderizado de lista
├── App.css                    # Estilos de la app
├── index.css                  # Estilos globales
├── componentes/
│   └── Testimonio.jsx         # Componente reutilizable
└── main.jsx                   # Punto de entrada
```

---

<div align="center">
  <sub>Ejercicio de freeCodeCamp mejorado · © 2026 Frank Abanto</sub>
</div>