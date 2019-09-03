let todos = [
  { id: 1, text: "Todo1", isCompleted: false },
  { id: 2, text: "Todo-two", isCompleted: false },
  { id: 3, text: "Todo-three", isCompleted: false },
  { id: 4, text: "Todo-four", isCompleted: false },
  { id: 5, text: "Todo-five", isCompleted: false },
  { id: 6, text: "Todo1-six", isCompleted: false }
];
var lengthOfTodos = todos.length + 1;

const resolvers = {
  Query: {
    todos: () => {
      return todos;
    }
  },
  Mutation: {
    addTodo: (_, { text }) => {
      const todo = { id: lengthOfTodos++, text: text, isCompleted: false };
      return todo;
    },
    deleteTodo: (_, { id }) => {
      todos = todos.filter(todo => todo.id != id);
      return id;
    },
    updateTodo: (_, { id, isCompleted }) => {
      const todo = todos.find(todo => todo.id == id);
      return { ...todo, isCompleted };
    }
  }
};

export default resolvers;
