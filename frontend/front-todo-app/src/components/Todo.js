import React, { useState } from "react";
import "./TodoList.css";

const Todo = ({ todo, completeTodo, removeTodo }) => {
  if (todo) {
    return (
      <div
        className="todo"
        style={{
          textDecoration: todo.isCompleted ? "line-through" : ""
        }}
      >
        {todo.text}
        <button
          style={{ background: "green" }}
          onClick={() => completeTodo(todo.id, todo.isCompleted)}
        >
          Complete
        </button>
        <button
          style={{ background: "blue" }}
          onClick={() => removeTodo(todo.id)}
        >
          Remove
        </button>
      </div>
    );
  } else {
    return <div className="todo"></div>;
  }
};

export default Todo;
