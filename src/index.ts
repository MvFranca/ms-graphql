import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphql/schemas";
import { resolvers } from "./graphql/resolvers";
import { ApolloServer } from "@apollo/server";
import { services } from "./config/dependencies";

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

startStandaloneServer(server, {
  listen: { port: 5000 },
  context:
   async () => ({
    ...services, 
  }),
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
