import { legacy_createStore } from "redux";
import { Reducer } from "./Reducer";

export const Store = legacy_createStore(Reducer);