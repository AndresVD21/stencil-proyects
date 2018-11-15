/*! Built with http://stenciljs.com */
import { h } from '../mycomponent.core.js';

class ProgressBar {
    componentDidLoad() {
        this.updateWidth();
    }
    progressDoneEmitter() {
        this.progressDone.emit();
    }
    didChangeHandler() {
        this.updateWidth();
    }
    updateWidth() {
        this.bar.children[0].style.width = `${this.progress}%`;
        if (this.progress == 100) {
            this.progressDoneEmitter();
        }
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "progress-bar"; }
    static get properties() { return {
        "bar": {
            "elementRef": true
        },
        "progress": {
            "type": Number,
            "attr": "progress",
            "watchCallbacks": ["didChangeHandler"]
        }
    }; }
    static get events() { return [{
            "name": "progressDone",
            "method": "progressDone",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "progress-bar{display:block;height:20px;width:100%;border:1px solid #777;background-color:#fff;margin:10px;padding:2px}progress-bar div{background-color:#7ed56f;height:100%;-webkit-transition:width .3s;transition:width .3s}"; }
}

export { ProgressBar };
