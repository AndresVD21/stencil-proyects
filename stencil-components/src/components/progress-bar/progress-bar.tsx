import { Component, Prop, Element, Event, EventEmitter, Watch } from '@stencil/core';


@Component({
    tag: 'progress-bar',
    styleUrl: 'progress-bar.scss'
})
export class ProgressBar {

    @Prop() progress: number;
    @Element() bar: HTMLElement;
    @Event() progressDone: EventEmitter;

    componentDidLoad() {
        this.updateWidth()
    }


    progressDoneEmitter() {
        this.progressDone.emit();
    }

    @Watch('progress')
    didChangeHandler() {
        this.updateWidth();
    }

    private updateWidth() {
        (this.bar.children[0] as HTMLElement).style.width = `${this.progress}%`;
        if (this.progress == 100) {
            this.progressDoneEmitter();
        }
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}
