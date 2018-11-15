/*! Built with http://stenciljs.com */
import { h } from '../library.core.js';

class Slider {
    valueChangeHandler(event) {
        this.valueChanged.emit(event.target.value);
    }
    render() {
        return (h("div", { class: "slider-container" },
            h("input", { type: "range", min: this.min, max: this.max, value: this.value, class: "slider", onChange: event => this.valueChangeHandler(event) })));
    }
    static get is() { return "slider-input"; }
    static get properties() { return {
        "max": {
            "type": Number,
            "attr": "max"
        },
        "min": {
            "type": Number,
            "attr": "min"
        },
        "value": {
            "type": Number,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "valueChanged",
            "method": "valueChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "slider-input .slider-container{width:100%;height:2rem}slider-input .slider-container .slider{padding-top:1rem;padding-bottom:1rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:2rem;outline:none;opacity:.8;border:.1rem solid #777;-webkit-transition:opacity .2s;transition:opacity .2s}slider-input .slider-container .slider:hover{opacity:1}slider-input .slider-container .slider::-webkit-slider-thumb{-webkit-appearance:none;width:1rem;height:2rem;background:#7ed56f;cursor:pointer}slider-input .slider-container .slider::-moz-range-thumb{width:1rem;height:2rem;background:#7ed56f;cursor:pointer}"; }
}

export { Slider as SliderInput };
