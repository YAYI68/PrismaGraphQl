import { ApolloServer } from '@apollo/server';
import gql from 'graphql-tag';
import { startStandaloneServer } from '@apollo/server/standalone';
import bookModels from './model/book';
import resolvers from './resolvers';
import typeDefs from './schema';


  const server = new ApolloServer({
    typeDefs,
    resolvers,

  })

  const runServer = async ()=>{
     const { url } = await startStandaloneServer(server, {
     context: async()=>{
      return {
        dataSources: {
          bookModels,
        },
      }
     },
 
    listen: { port: 4000 },   
  });
  console.log(url)
  }

  runServer()



// console.log('Hello server')