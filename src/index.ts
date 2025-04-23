import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphql/schemas";
import { resolvers } from "./graphql/resolvers";
import { ApolloServer } from "@apollo/server";
import { services } from "./config/dependencies";
import { config } from "./config/env";
import jwt from "jsonwebtoken";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  introspection: true,
  csrfPrevention: true,
  allowBatchedHttpRequests: true,
  includeStacktraceInErrorResponses: true,
  
  // plugins: [
  //   ApolloServerPluginLandingPageGraphQLPlayground(), 
  // ],

  formatError: (err) => {
    console.error("GraphQL Error:", err);
    return err;
  },

  

});
startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    let user = null;

    if (token) {
      try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), config.SECRET_KEY) as { userId: string; role: string };
        user = { id: decoded.userId, role: decoded.role };
      } catch (err) {
        console.error("Invalid token");
      }
    }

    return {
      user,
      ...services
    };
  },


}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
