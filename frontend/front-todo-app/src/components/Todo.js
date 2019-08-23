import React, { useState } from "react";
import "./TodoList.css";

const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <button
        style={{ background: "red" }}
        onClick={() => completeTodo(todo.id, todo.isCompleted)}
      >
        Complete
      </button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default Todo;
