import { Add_todo, Auth_email, Todo_Data } from "./ActionType"

export const Adddb=(data)=>{
    return{
        type:Add_todo,
        data
    }
}
export const Authemail=(email)=>{
    return{
        type:Auth_email,
        email
    }
}
export const Adddata=(todo)=>{
    return{
        type:Todo_Data,
        todo
    }
}