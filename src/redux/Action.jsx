import { Add_todo } from "./ActionType"

export const Adddb=(data)=>{
    return{
        type:Add_todo,
        data
    }
}