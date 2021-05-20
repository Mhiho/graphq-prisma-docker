import { GraphQLServer } from 'graphql-yoga';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();


const typeDefs = `
type Query {
    hello: String!
    dupa: String!
}
`

const resolvers = {
    Query: {
        hello() {
            return `This is my query`
        },
        dupa() {
            return `PindA`
        },
    },
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(()=> [
    console.log('Server up')
])