export class TodoModel{
    status:string="start"
    constructor(public title:string){
        
    }
    toggle():void{
        this.status =
            this.status == "started"
                ? "completed"
                : "started";
    }
    
}