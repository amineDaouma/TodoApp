import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const GET_TODOS = gql`
  query AllTodos {
    todos {
      id
      text
      isCompleted
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $isCompleted: Boolean!) {
    updateTodo(id: $id, isCompleted: $isCompleted) {
      id
      text
      isCompleted
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      isCompleted
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  /**
   * Query
   */
  const { todosResults, loading, error } = useQuery(GET_TODOS, {
    onCompleted: results => {
      setTodos(results.todos);
    }
  });

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
  const handleAddTodo = async todoText => {
    await addTodo({ variables: { text: todoText } });
  };

  /**
   * Method to handle the completion of a todo
   * @param index
   */
  const handleCompleteTodo = index => {
    const updatedTodo = updateTodo({
      variables: { id: index, isCompleted: true }
    });
  };

  /**
   * Method to handle the removing of a todo
   * @param  index
   */
  const handleRemoveTodo = index => {
    deleteTodo({
      variables: { id: index }
    });
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
