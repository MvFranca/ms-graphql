"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schemas_1 = require("./graphql/schemas");
const resolvers_1 = require("./graphql/resolvers");
const env_1 = require("./config/env");
const server = new apollo_server_1.ApolloServer({ typeDefs: schemas_1.typeDefs, resolvers: resolvers_1.resolvers });
server.listen(env_1.config.PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
