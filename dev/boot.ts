///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from "./app.component";
import {TodoService} from "./todo-service";

bootstrap(AppComponent, [TodoService, ROUTER_PROVIDERS]);