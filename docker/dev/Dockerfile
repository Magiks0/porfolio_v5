FROM node:25-alpine
WORKDIR /app
COPY . .
RUN npm install --dev
CMD ["npm", "run", "dev", "--", "--host"]