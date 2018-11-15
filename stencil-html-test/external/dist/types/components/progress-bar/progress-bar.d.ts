import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class ProgressBar {
    progress: number;
    bar: HTMLElement;
    progressDone: EventEmitter;
    componentDidLoad(): void;
    progressDoneEmitter(): void;
    didChangeHandler(): void;
    private updateWidth;
    render(): JSX.Element;
}
