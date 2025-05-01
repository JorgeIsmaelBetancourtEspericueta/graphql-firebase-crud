// index.js
require("dotenv").config();
require("./config/database.config"); // inicializa Firebase

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schemas/taskSchema");
const resolvers = require("./resolvers/taskResolver");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
