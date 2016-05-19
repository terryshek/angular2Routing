/**
 * Created by terryshek on 12/5/2016.
 */
import {Component} from "angular2/core";
import {TodoService} from "./todo-service"
import {TodoList} from "./todo-list"
import {TodoModel} from "./todoModel"
@Component({
    selector:"todo-list",
    template: `
        <form (submit)="onSubmit()">
        <input type="text" [(ngModel)]="todoModel.title"/>
        <todo-list></todo-list>
        </form>
    `,
    directives:[TodoList]
})
export class TodoInputComponent {
    todoModel:TodoModel = new TodoModel();
    constructor(public todoService:TodoService){
        console.log(todoService)
        console.log(TodoModel)
    }
    onSubmit(){
        console.log(this.todoModel)
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
    
}