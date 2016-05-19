import { Component,Input, ViewEncapsulation, Output, EventEmitter } from "angular2/core";
@Component({
    encapsulation:ViewEncapsulation.None,
    selector:"todo-item-renderer",
    template:`
            <style>
            .completed{
                text-decoration: line-through;
            }
            </style> 
            <div>
                <span [ngClass]="task.status">{{task.title}}</span>
                <button (click)="toggle.emit(task)" type="button">Toggle</button>
            </div>`
})
export class TodoItemRenderer{
    @Input() task;
    @Output() toggle = new EventEmitter();
}