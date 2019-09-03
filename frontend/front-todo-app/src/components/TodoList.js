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

const TodoList = ({ todos }) => {
  // /**
  //  * Query
  //  */

  // const {
  //   data: { todos }
  // } = useQuery(GET_TODOS);

  /**
   * Complete mutation hook
   */
  const [updateTodo] = useMutation(UPDATE_TODO);

  /**
   * Delete mutation hook
   *
   */
  const [deleteTodo] = useMutation(DELETE_TODO, {
    optimisticResponse: {
      __typename: "Mutation",
      deleteTodo: {
        id: -1
      }
    },
    update: async (cache, { data: { deleteTodo } }) => {
      const existingTodos = cache.readQuery({ query: GET_TODOS });
      const newTodos = existingTodos.todos.filter(
        todo => todo.id !== deleteTodo
      );
      try {
        await cache.writeQuery({
          query: GET_TODOS,
          data: { todos: newTodos }
        });
      } catch (e) {
        console.log({ e });
      }
    }
  });

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
        <TodoForm />
      </div>
    </div>
  );
};

export default TodoList;
