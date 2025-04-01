import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphql/schemas";
import { resolvers } from "./graphql/resolvers";
import { ApolloServer } from "@apollo/server";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  introspection: true,
  csrfPrevention: true,
  allowBatchedHttpRequests: true,
  includeStacktraceInErrorResponses: false, 
});

import { startStandaloneServer } from "@apollo/server/standalone";

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
