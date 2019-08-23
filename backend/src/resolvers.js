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
    updateTodo: async (_, { id, isCompleted }) => {
      console.log(isCompleted);
      const foundTodo = await Todo.findById(id);
      foundTodo.isCompleted = isCompleted;
      return foundTodo;
    }
  }
};

module.exports = resolvers;
