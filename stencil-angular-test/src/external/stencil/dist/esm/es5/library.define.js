
// library: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './library.core.js';
import {
  BtnStyled,
  ProgressBar,
  Slider
} from './library.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    BtnStyled,
    ProgressBar,
    Slider
  ], opts);
}
