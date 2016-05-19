/**
 * Created by terryshek on 12/5/2016.
 */
import { Component} from "angular2/core";
import { TodoService } from "./todo-service"
import { TodoItemRenderer } from "./todo-item-renderer"
import { SearchPipe } from "./search-pipe"
import { StartPipe } from "./start-pipe"

@Component({
    pipes:[StartPipe],
    selector:"todo-list",
    template:`
            <ul>
                <li  *ngFor="#todo of todoService.todos | start">
                    <todo-item-renderer [task]="todo" (toggle)="todoService.toggleTodo($event)"></todo-item-renderer>
                </li>
            </ul>
            `,
    directives:[TodoItemRenderer]
})
export class TodoList{
    constructor(public todoService:TodoService){

    }
}