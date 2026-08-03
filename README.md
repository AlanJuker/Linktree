# DJ Linktree

Página tipo [Linktree](https://linktr.ee) para un perfil de DJ. Estática, servida por un pequeño servidor Express para que Railway la pueda desplegar sin configuración extra.

## Personalizar

Todo tu contenido vive en un solo archivo: [`public/config.js`](public/config.js).

```js
window.PROFILE = {
  name: 'DJ NOVA',
  handle: '@djnova',
  bio: 'Open format · House · Techno',
  avatar: 'avatar.jpg',
  links: [
    { label: 'YouTube', url: 'https://youtube.com/@djnova', icon: 'youtube' },
    { label: 'SoundCloud', url: 'https://soundcloud.com/djnova', icon: 'soundcloud' },
  ],
};
```

- **Foto de perfil:** copia tu imagen a `public/avatar.jpg`. Si no hay imagen, se muestran tus iniciales sobre un degradado.
- **Iconos disponibles:** `youtube`, `soundcloud`, `instagram`, `spotify`, `tiktok`, `mixcloud`, `beatport`, `mail`, `link`.
- **Colores:** las variables están arriba de [`public/styles.css`](public/styles.css) (`--accent`, `--accent-2`, fondos).

## Correr en local

```bash
npm install
npm start
# http://localhost:3000
```

## Desplegar en Railway

1. Sube este repo a GitHub.
2. En [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo** → elige este repo.
3. Railway detecta Node con Nixpacks, corre `npm install` y arranca con `npm start`. No hay que configurar nada más: el servidor usa `process.env.PORT`.
4. En **Settings → Networking → Generate Domain** para obtener la URL pública.

La configuración de build/deploy está en [`railway.json`](railway.json), con healthcheck en `/health`.

### Dominio propio (opcional)

En Railway: **Settings → Networking → Custom Domain**, añade tu dominio y crea el registro `CNAME` que te indique en tu proveedor de DNS.
