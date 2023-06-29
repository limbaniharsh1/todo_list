import { Add_todo, Auth_email } from "./ActionType";

const initialstate = { data: [] };

export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case Add_todo:
      return { ...state, data: action.data };

    case Auth_email:
      return { ...state, email: action.email};

    default:
      return state;
      break;
  }
};
