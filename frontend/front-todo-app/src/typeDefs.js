const typeDefs = `
  type Todo {
    id: ID!
    text: String!
    isCompleted: Boolean!
  }
  type Query {
    todos: [Todo]!
    todo(id: ID!): Todo
  }

  type Mutation {
    addTodo(text: String!): Todo!
    updateTodo(id: ID!, isCompleted: Boolean): Todo!
    deleteTodo(id: ID!): ID!
  }
`;
export default typeDefs;
