import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import path from 'path';

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server : {
   proxy : {
    "/api" : {
      target : "http://localhost:5000"
    }
   } 
  }
};
