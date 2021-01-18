import { defineConfig } from 'umi';
import router from './src/router/index';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  routes: router,
});
