/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface BtnStyled {
    'label': string;
  }
  interface BtnStyledAttributes extends StencilHTMLAttributes {
    'label'?: string;
  }

  interface ProgressBar {
    'progress': number;
  }
  interface ProgressBarAttributes extends StencilHTMLAttributes {
    'onProgressDone'?: (event: CustomEvent) => void;
    'progress'?: number;
  }

  interface SliderInput {
    'max': number;
    'min': number;
    'value': number;
  }
  interface SliderInputAttributes extends StencilHTMLAttributes {
    'max'?: number;
    'min'?: number;
    'onValueChanged'?: (event: CustomEvent) => void;
    'value'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'BtnStyled': Components.BtnStyled;
    'ProgressBar': Components.ProgressBar;
    'SliderInput': Components.SliderInput;
  }

  interface StencilIntrinsicElements {
    'btn-styled': Components.BtnStyledAttributes;
    'progress-bar': Components.ProgressBarAttributes;
    'slider-input': Components.SliderInputAttributes;
  }


  interface HTMLBtnStyledElement extends Components.BtnStyled, HTMLStencilElement {}
  var HTMLBtnStyledElement: {
    prototype: HTMLBtnStyledElement;
    new (): HTMLBtnStyledElement;
  };

  interface HTMLProgressBarElement extends Components.ProgressBar, HTMLStencilElement {}
  var HTMLProgressBarElement: {
    prototype: HTMLProgressBarElement;
    new (): HTMLProgressBarElement;
  };

  interface HTMLSliderInputElement extends Components.SliderInput, HTMLStencilElement {}
  var HTMLSliderInputElement: {
    prototype: HTMLSliderInputElement;
    new (): HTMLSliderInputElement;
  };

  interface HTMLElementTagNameMap {
    'btn-styled': HTMLBtnStyledElement
    'progress-bar': HTMLProgressBarElement
    'slider-input': HTMLSliderInputElement
  }

  interface ElementTagNameMap {
    'btn-styled': HTMLBtnStyledElement;
    'progress-bar': HTMLProgressBarElement;
    'slider-input': HTMLSliderInputElement;
  }


}
