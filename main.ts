import App from './App.vue';
import 'virtual:uno.css';
import uviewPlus from '@/uni_modules/uview-plus';

import { createSSRApp } from 'vue';
export function createApp(): any {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  return {
    app,
  };
}
