import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import gql from "graphql-tag";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import { GET_TODOS } from "../utils/queries";

const Wrapper = () => {
  /**
   * Query
   */

  const {
    data: { todos }
  } = useQuery(GET_TODOS);

  return <TodoList todos={todos} />;
};

export default Wrapper;
