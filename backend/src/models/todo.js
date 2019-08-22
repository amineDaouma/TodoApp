var mongoose = require("mongoose");

var schema = new mongoose.Schema({ text: "string", isCompleted: "boolean" });

const Todo = mongoose.model("Todo", schema);

module.exports = Todo;
