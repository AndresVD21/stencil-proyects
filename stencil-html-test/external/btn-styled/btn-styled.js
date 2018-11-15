export class BtnStyled {
    render() {
        return (h("a", { class: "btn" }, this.label));
    }
    static get is() { return "btn-styled"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "label": {
            "type": String,
            "attr": "label"
        }
    }; }
    static get style() { return "/**style-placeholder:btn-styled:**/"; }
}
