import {Pipe} from "angular2/core"
@Pipe({
    name:"search"
})
export class SearchPipe{
    transform(value){
        console.log("run")
        return value.filter((item)=>{
            return item.title.startsWith("t")
        })
    }
}