import { Component, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
    tag: 'slider-input',
    styleUrl: 'slider.scss'
})
export class Slider {

    @Prop() min: number;
    @Prop() max: number;
    @Prop() value: number;

    @Event() valueChanged: EventEmitter;

    valueChangeHandler(event: any) {
        this.valueChanged.emit(event.target.value);
    }

    render() {
        return (
            <div class="slider-container">
                <input 
                    type="range" 
                    min={this.min} 
                    max={this.max} 
                    value={this.value} 
                    class="slider"
                    onChange={event => this.valueChangeHandler(event)}></input>
            </div>
        );
    }
}
