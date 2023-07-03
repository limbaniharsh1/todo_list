import { Add_todo, Auth_email, Todo_Data } from "./ActionType";

const initialstate = { data: [{}] };

export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case Add_todo:
      return { ...state, data: action.data };

    case Auth_email:
      return { ...state, email: action.email};

    case Todo_Data:
      return{...state,todos:action.todo}

    default:
      return state;
      break;
  }
};
