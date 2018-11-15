import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'btn-styled',
    styleUrl: 'btn-styled.scss',
    shadow: true
})
export class BtnStyled {

    @Prop() label: string;

    // @Event() click: EventEmitter;

    render() {
        return (

            <a class="btn">{this.label}</a>

        );
    }
}