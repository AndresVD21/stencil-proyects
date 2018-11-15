import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'library',
  bundles: [
    {components: ['progress-bar']},
    {components: ['btn-styled']},
    {components: ['slider-input']}
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  globalStyle: 'src/globals/main.css',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/variables.scss',
      ]
    })
  ]
};
