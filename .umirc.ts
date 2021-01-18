import { defineConfig } from 'umi';
import router from './src/router/index';
// @ts-ignore
import postcssPx2vw from 'postcss-px-to-viewport';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  routes: router,
  extraPostCSSPlugins: [
    postcssPx2vw({
      viewportWidth: 750,
      unitPrecision: 5,
      viewportUnit: 'vw',
      minPixelValue: 1,
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
      // include: /\/src\//
    }),
  ],
});
