gh auth login
# React + TypeScript + Vite
# Portafolio 3D de Carlos Hidalgo

Portafolio web moderno, interactivo y creativo, desarrollado con React, Tailwind CSS, Framer Motion y efectos 3D personalizados. Incluye animaciones, previsualización de proyectos con video y una experiencia visual única.

## Características

- HeroSection con tarjeta 3D animada y efectos de parallax, flotación y seguimiento al scroll.
- Sección de proyectos con previsualización automática de video y fallback robusto.
- Modal de detalles de proyecto con reproducción automática de video.
- Diseño responsive y visualmente atractivo.
- Componentes reutilizables y código organizado.

## Instalación

1. Clona el repositorio:
  ```bash
  git clone https://github.com/carlhidalgo/portaflio_3d.git
  cd portaflio_3d
  ```
2. Instala las dependencias:
  ```bash
  npm install
  ```
3. Inicia el servidor de desarrollo:
  ```bash
  npm run dev
  ```

## Uso

- Accede a `http://localhost:5173` en tu navegador.
- Explora las secciones: presentación, sobre mí, proyectos y contacto.
- Haz clic en "Ver Detalle" en un proyecto para ver el video y más información.

## Estructura principal

- `src/components/sections/` — Secciones principales del sitio.
- `src/components/ui/` — Componentes de interfaz reutilizables.
- `src/components/3d/` — Efectos y utilidades 3D.
- `public/` — Recursos estáticos (videos, imágenes, PDF).

## Tecnologías

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Autor

Carlos Hidalgo — [LinkedIn](https://www.linkedin.com/in/carloshidalgo-dev/)

---
¿Te gusta el proyecto? ¡Dale una estrella en GitHub!
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
