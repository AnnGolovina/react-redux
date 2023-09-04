import { ReduxActionInterface, TodoInterface } from "../types";

export const todosReducer = (
  todos: TodoInterface[] = [],
  action: ReduxActionInterface
) => {

  switch (action.type) {

    case "CREATE_TODO":
      return [...todos, action.payload];

    case "UPDATE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

	  case "DELETE_TODO":
		  return todos.filter((todo) => todo.id !== action.payload.id
    );


    default:
      return todos;
  }
};
