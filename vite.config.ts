import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// En esta carpeta ingresamos todos los plugin
//por ejemplo si quiero un pluggin para hacer test

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
