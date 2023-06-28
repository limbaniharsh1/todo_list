import { Add_todo, Auth_email } from "./ActionType"

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