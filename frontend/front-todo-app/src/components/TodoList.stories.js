import React from "react";
import { storiesOf } from "@storybook/react";

import TodoList from "./TodoList";

import { todo, actions } from "./Todo.stories";

export const unCompletedTodos = [
  { ...todo, id: "1", text: "Todo1" },
  { ...todo, id: "2", text: "Todo2" },
  { ...todo, id: "3", text: "Todo3" },
  { ...todo, id: "4", text: "Todo4" },
  { ...todo, id: "5", text: "Todo5" },
  { ...todo, id: "6", text: "Todo6" }
];

export const todos = [
  ...unCompletedTodos.slice(0, 5),
  { id: "6", text: "Todo 6 ", isCompleted: false }
];

export const completedTodos = unCompletedTodos.map(unCompletedTodo => ({
  ...unCompletedTodo,
  isCompleted: true
}));

export const mixedTodos = [...unCompletedTodos, ...completedTodos];

storiesOf("TodoList", module)
  .add("unCompletedTodos", () => <TodoList todos={todos} />)
  .add("CompletedTodos", () => <TodoList todos={completedTodos} />)
  .add("UncompletedTodosFirst", () => <TodoList todos={mixedTodos} />);
