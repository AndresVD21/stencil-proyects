export class ProgressBar {
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
    static get style() { return "/**style-placeholder:progress-bar:**/"; }
}
