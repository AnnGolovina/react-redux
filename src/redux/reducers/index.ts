import { combineReducers} from "redux";
import { counterReducer } from "./counter";
import { todosReducer } from "./todos";

//з'єднує всі редьюсери

export const allReducers = combineReducers({
	counter: counterReducer,
	todos: todosReducer,
});