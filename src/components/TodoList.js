import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
  // console.log(todos);

  const todoList = todos.map((todo) => {
    return <TodoItem key={todo._id} todo={todo} onDelete={onDelete} />;
  });

  return <React.Fragment>{todoList}</React.Fragment>;
}
