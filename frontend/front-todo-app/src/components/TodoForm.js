import React, { useState } from "react";
import { GET_TODOS, ADD_TODO } from "../utils/queries";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";

const TodoForm = () => {
  const [value, setValue] = useState("");

  /**
   * Add mutation HOOK with optimistic UI and updating the cache
   * after the mutation is completed on the GraphQL server
   */
  const [addTodo] = useMutation(ADD_TODO, {
    variables: { text: value },
    optimisticResponse: {
      __typename: "Mutation",
      addTodo: {
        id: -1,
        text: value,
        isCompleted: false,
        __typename: "Todo "
      }
    },
    update: async (cache, { data: { addTodo } }) => {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      await cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([addTodo]) }
      });
    }
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new todo"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
