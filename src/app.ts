import { ApolloServer } from 'apollo-server';
import { resolvers } from "./resolvers/user.resolver";
import { getUserId } from './utils';
import { importSchema } from 'graphql-import';

const typeDefs = importSchema('./src/schemas/schema.graphql');

const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.listen({ port: 4000 })
.then(({url})=> {
  console.log(`server is up at ${url}`)
})

