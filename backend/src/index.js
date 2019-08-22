const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const dbConfig = require("../db");

// getting-started.js
var mongoose = require("mongoose");
mongoose.connect(dbConfig.url, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connec&ted!
  console.log("we are connected to the mongo database");
});

const server = new ApolloServer({ typeDefs, resolvers, uploads: false });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
