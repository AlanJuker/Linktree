# Contexto del proyecto

Página tipo Linktree para el perfil de DJ de **AlanJuker** (raw techno / hardgroove).
Repo: https://github.com/AlanJuker/Linktree

## Estado actual

Funciona y está listo para desplegar. Lo hecho hasta ahora:

- Página estática en `public/` con estilo Linktree clásico oscuro: avatar circular, nombre, `@handle`, bio y botones apilados con iconos SVG inline. Cada botón se tiñe con el color de su marca en hover.
- Servidor Express mínimo (`server.js`) que sirve `public/`, expone `/health` y escucha en `process.env.PORT` — necesario para que Railway lo despliegue sin configuración extra.
- Todo el contenido editable vive en `public/config.js` (nombre, handle, bio, avatar, array de links). No hace falta tocar HTML/CSS para cambiar datos.
- Datos reales ya configurados: YouTube `https://www.youtube.com/@alanjukerdj`, SoundCloud `https://soundcloud.com/alanjuker`.
- `railway.json` (builder Nixpacks, `npm start`, healthcheck en `/health`) y `Procfile`.

Probado en local: `GET /` → 200, `/health` → `{"ok":true}`, todos los assets cargan.

## Pendiente

1. **Foto de perfil.** El usuario va a pasar imágenes. Guardarlas como `public/avatar.jpg` (el nombre ya está referenciado en `config.js`). Mientras no exista el archivo, el avatar cae a las iniciales "AJ" sobre un degradado violeta/cyan — es el comportamiento esperado, no un bug.
2. **Desplegar en Railway.** Requiere que el usuario entre a su cuenta; ver pasos en `README.md`. El repo ya está en GitHub, así que basta con *New Project → Deploy from GitHub repo → Linktree → Settings → Networking → Generate Domain*.

## Convenciones

- **No añadir el trailer `Co-Authored-By` a los commits.** El usuario lo pidió explícitamente.
- Mensajes de commit en español.
- `hola.html` es un archivo vacío del usuario, deliberadamente fuera del repo. No commitearlo ni borrarlo.

## Continuar desde otra PC

```bash
git clone https://github.com/AlanJuker/Linktree.git
cd Linktree
npm install
npm start      # http://localhost:3000
```
