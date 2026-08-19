<div align="center">
  <br>
  <img src="https://readme-typing-svg.demolab.com?font=Syne&weight=700&size=34&duration=1800&pause=800&color=C6A962&center=true&vCenter=true&width=600&lines=Testimonios;React+%2B+Vite;Im%C3%A1genes+WebP+Optimizadas" alt="Testimonios" />
  <br><br>

  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/WebP-Optimized-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-2A8C5A?style=for-the-badge&logo=github&logoColor=white" />
  <br><br>
</div>

---

## 💬 Testimonios

Aplicación interactiva y moderna construida en React + Vite, diseñada con foco en rendimiento, seguridad, accesibilidad y máxima optimización de recursos.

### ✨ Características Clave

- **Separación Limpia de Datos y Vista:** Los testimonios se gestionan de forma desacoplada en `src/data/testimonios.js`.
- **Rendimiento & Optimización de Carga:** Imágenes convertidas a formato `.webp` de ultra-bajo peso (~65% de reducción de tamaño), con carga diferida (`loading="lazy"`) y decodificación asíncrona (`decoding="async"`).
- **Filtrado Interactivo:** Permite filtrar testimonios por empresa de manera instantánea y fluida.
- **Accesibilidad & HTML Semántico:** Marcado semántico completo (`<article>`, `<figure>`, `<blockquote>`, `<figcaption>`, `aria-*`).
- **Despliegue Continuo (CI/CD):** Configurado con GitHub Actions para despliegue automático en GitHub Pages respetando la ruta base.
- **Diseño Moderno & Glassmorphism:** Paleta oscura premium con acentos dorados, tipografía Syne & DM Sans y microinteracciones en hover.

### 🚀 Demo en Vivo

👉 **[Ver demo en vivo en GitHub Pages](https://frankusqabant.github.io/01-testimonios/)**

### 🛠️ Instalación y Uso Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar compilación local
npm run preview
```

### 📂 Estructura del Proyecto

```
01-testimonios/
├── .github/workflows/
│   └── deploy.yml             # Workflow de despliegue a GitHub Pages
├── public/
│   ├── imagenes/              # Imágenes optimizadas en formato .webp
│   └── vite.svg               # Favicon
├── src/
│   ├── componentes/
│   │   └── Testimonio.jsx     # Componente reutilizable y accesible
│   ├── data/
│   │   └── testimonios.js     # Datos estructurados y desacoplados
│   ├── App.jsx                # Lógica principal y barra de filtros
│   ├── App.css                # Estilos de componentes y animaciones
│   ├── index.css              # Reset y variables del tema oscuro
│   └── main.jsx               # Punto de entrada de React
├── index.html                 # Plantilla HTML con SEO y metadatos
├── package.json
└── vite.config.js             # Configuración de base path para GitHub Pages
```

---

<div align="center">
  <sub>Proyecto de testimonios optimizado · © 2026 Frank Abanto</sub>
</div>