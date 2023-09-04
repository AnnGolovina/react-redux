import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoInteface } from "../redux/types";

export const Todos = () => {
  const todos = useSelector((store: { todos: TodoInteface[] }) => store.todos);
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>("");

  const onInputChange = (e: { target: { value: string } }) =>
    setValue(e.target.value);

  const createTodo = () => {
    dispatch({
      type: "CREATE_TODO",
      payload: { id: todos.length, isDone: false, title: value },
    });

    setValue("");
  };

  const toggleTodoCompleteness = (todo: TodoInteface) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { ...todo, isDone: !todo.isDone },
    });
  };


  const deleteTodo = (todo: TodoInteface) => {
    dispatch({
      type: "DELETE_TODO",
      payload: {id: todo.id}
    })
  }

  return (
    <div className="todos-wrapper">
      <h1>Todos</h1>

      <div className="todos-form-wrapper">
        <input
          type="text"
          placeholder="Enter new todo"
          value={value}
          onChange={onInputChange}
        />
        <button onClick={createTodo}>Create Todo</button>
      </div>

      {todos.map(({ id, isDone, title }) => (
        <div key={id} className={`todo ${isDone ? "todo-done": ""}`}>
          <div>
            <span>{id}</span>
            <span>{title}</span>
          </div>

          <div>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => toggleTodoCompleteness({ id, isDone, title })}
          />

          
          <button onClick={() => deleteTodo({ id, isDone, title })}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};