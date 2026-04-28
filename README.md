# babyshower_michelle_michael

## Deploy en Vercel

Este proyecto es estático (`index.html`, `styles.css`, `script.js`), así que puede desplegarse directamente en Vercel.

### Opción 1: Dashboard
1. Sube este repo a GitHub.
2. Entra a Vercel y elige **New Project**.
3. Importa el repositorio.
4. Framework preset: **Other**.
5. Deploy.

### Opción 2: CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

> Si el entorno bloquea npm (HTTP 403), corre esos comandos en tu máquina local o en CI con acceso a npm.
