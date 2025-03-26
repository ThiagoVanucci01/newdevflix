import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000, // porta para conexao, altera quando necessario
    open: true, // abre automaticamente o navegador e inicia o server
    host: true, //habilitar rede externa
  },
});
