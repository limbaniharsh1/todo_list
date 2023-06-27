import { Add_todo } from "./ActionType"

const initialstate = {data:[]}

export const Reducer = (state=initialstate,action)=>{
    switch(action.type){
        case Add_todo:
        return{...state,data:action.data}

        default:
        return state
        break;
    }
}