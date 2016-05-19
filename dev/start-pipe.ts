import {Pipe} from "angular2/core"
@Pipe({
    name:"start"
})
export class StartPipe{
    transform(value){
        console.log("run")
        return value.filter((item)=>{
            return item.status =="start"
        })
    }
}