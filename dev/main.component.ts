import {Component} from 'angular2/core';
import {TodoInputComponent} from "./todo-input"
import {NavComponent} from "./nav.component";


@Component({
    selector: 'app',
    template: `
        <nav-bar></nav-bar>
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <todo-list></todo-list>
    `,
    directives:[TodoInputComponent, NavComponent]
})

export class MainComponent {

}