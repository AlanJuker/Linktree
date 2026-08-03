FROM node:20-alpine

WORKDIR /app

# Instala solo dependencias de producción usando el lockfile
COPY package*.json ./
RUN npm ci --omit=dev

# Copia el resto del proyecto (server.js + public/)
COPY . .

ENV NODE_ENV=production
# Railway inyecta PORT en tiempo de ejecución; server.js ya lo respeta
EXPOSE 3000

CMD ["node", "server.js"]
