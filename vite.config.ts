import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
  plugins: [uni(), UnoCSS()],
});
