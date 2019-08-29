import gql from "graphql-tag";

export const GET_TODOS = gql`
  query AllTodos {
    todos {
      id
      text
      isCompleted
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $isCompleted: Boolean!) {
    updateTodo(id: $id, isCompleted: $isCompleted) {
      id
      text
      isCompleted
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      isCompleted
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;
