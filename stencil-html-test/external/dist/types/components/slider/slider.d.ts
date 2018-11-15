import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class Slider {
    min: number;
    max: number;
    value: number;
    valueChanged: EventEmitter;
    valueChangeHandler(event: any): void;
    render(): JSX.Element;
}
