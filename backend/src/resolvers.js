const Todo = require("./models/todo");
const resolvers = {
  Query: {
    todos: () => Todo.find()
  },

  Mutation: {
    addTodo: async (_, { text }) => {
      const todo = new Todo({ text: text, isCompleted: false });
      await todo.save();
      return todo;
    },
    updateTodo: async (_, { todoId, isCompleted }) => {
      console.log(isCompleted);
      const foundTodo = await Todo.findById(todoId);
      foundTodo.isCompleted = isCompleted;
      return foundTodo;
    }
  }
};

module.exports = resolvers;
