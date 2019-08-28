import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import gql from "graphql-tag";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from "../utils/queries";

const TodoList = () => {
  /**
   * Query
   */

  const client = useApolloClient();
  const {
    data: { todos }
  } = useQuery(GET_TODOS);

  //client.writeData({ data: { todos: todos } });

  /**
   * Add mutation HOOK
   */
  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [
      { query: GET_TODOS, variables: { awaitRefetchQueries: true } }
    ]
  });

  /**
   * Complete mutation hook
   */
  const [updateTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [
      { query: GET_TODOS, variables: { awaitRefetchQueries: true } }
    ]
  });

  /**
   * Delete mutation hook
   *
   */
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [
      { query: GET_TODOS, variables: { awaitRefetchQueries: true } }
    ]
  });

  /**
   * Method to handle the adding of a todo to the todolist
   * @param  todoText
   */
  const handleAddTodo = todoText => {
    addTodo({ variables: { text: todoText } });
  };

  /**
   * Method to handle the completion of a todo to the todolist
   * @param index
   */
  const handleCompleteTodo = index => {
    updateTodo({ variables: { id: index, isCompleted: true } });
  };

  /**
   * Method to handle the removing of a todo to the todolist
   * @param  index
   */
  const handleRemoveTodo = index => {
    deleteTodo({ variables: { id: index } });
  };

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="todos">
        {todos &&
          todos.map(todo => (
            <Todo
              todo={todo}
              key={todo.id}
              completeTodo={handleCompleteTodo}
              removeTodo={handleRemoveTodo}
            />
          ))}
      </div>
      <div className="create-todo">
        <TodoForm addTodo={handleAddTodo} />
      </div>
    </div>
  );
};

export default TodoList;
