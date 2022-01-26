import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  todoReducer,
  counterReducer,
});

export default rootReducer;
