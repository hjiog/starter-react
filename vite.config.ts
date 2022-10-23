import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unocss(), react(), Pages()],
});
