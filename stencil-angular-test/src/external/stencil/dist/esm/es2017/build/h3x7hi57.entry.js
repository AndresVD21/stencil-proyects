/*! Built with http://stenciljs.com */
import { h } from '../mycomponent.core.js';

class BtnStyled {
    render() {
        return (h("div", null,
            h("a", { class: "btn" }, this.label)));
    }
    static get is() { return "btn-styled"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "label": {
            "type": String,
            "attr": "label"
        }
    }; }
    static get style() { return ".btn{text-decoration:none;padding:1rem 2rem;display:inline-block;border-radius:10rem;background-color:#55c57a;color:#fff;-webkit-transition:all .2s;transition:all .2s}.btn:hover{-webkit-box-shadow:0 .5rem .5rem rgba(0,0,0,.2);box-shadow:0 .5rem .5rem rgba(0,0,0,.2);-webkit-transform:translateY(-.3rem);transform:translateY(-.3rem);background-color:#28b485}"; }
}

export { BtnStyled };
