import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
// import { GET_TODOS } from "./utils/queries";
// import gql from "graphql-tag";

import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const cache = new InMemoryCache();

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});
const link = new SchemaLink({ schema: executableSchema });

// const link = new HttpLink({
//   uri: "http://localhost:4000/"
// });

const client = new ApolloClient({
  cache,
  link,
  resolvers: {
    // Todo: {
    //   isDuplicated: async (todo, variables, { cache }) => {
    //     const { todos } = await cache.readQuery({ query: GET_TODOS });
    //     return todos.includes(todo.id);
    //   }
    //}
    // Mutation: {
    //   completeTodo: (_root, variables, { cache, getCacheKey }) => {
    //     const id = getCacheKey({ __typename: "Todo", id: variables.id });
    //     const fragment = gql`
    //       fragment completeTodo on Todo {
    //         isCompleted
    //       }
    //     `;
    //     const todo = cache.readFragment({ fragment, id });
    //     const data = { ...todo, isCompleted: !todo.isCompleted };
    //     cache.writeData({ id, data });
    //     return null;
    //   },
    //   addTodo: async (_root, { text }, { cache }) => {
    //     const query = GET_TODOS;
    //     const previous = cache.readQuery({ query });
    //     const newTodo = {
    //       id: previous.id++,
    //       text,
    //       isCompleted: false,
    //       __typename: "Todo"
    //     };
    //     const data = {
    //       todos: [...previous.todos, newTodo]
    //     };
    //     // you can also do cache.writeData({ data }) here if you prefer
    //     cache.writeQuery({ query, data });
    //     return newTodo;
    //   }
    // }
    // ,
    // Query: {
    //   todos: (_, args, { cache }) => {
    //     console.log("hello people");
    //     const { todos } = cache.readQuery({ query: GET_TODOS });
    //     console.log({ todos });
    //     return todos;
    //   }
    // }
  }
});

//client.onResetStore(() => cache.writeData({ data }));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
