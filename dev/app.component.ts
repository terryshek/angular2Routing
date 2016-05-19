import {Component} from 'angular2/core';
import {MainComponent} from "./main.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [MainComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path:"/",
        name:"home",
        component:MainComponent,
        useAsDefault:true
    }
])
export class AppComponent {

}