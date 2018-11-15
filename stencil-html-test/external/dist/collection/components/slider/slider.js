export class Slider {
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
    static get style() { return "/**style-placeholder:slider-input:**/"; }
}
