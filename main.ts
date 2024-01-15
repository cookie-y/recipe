import App from './App.vue';
import 'virtual:uno.css';

import { createSSRApp } from 'vue';
export function createApp(): any {
  const app = createSSRApp(App);
  return {
    app,
  };
}
