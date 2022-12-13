import { ApolloServer } from '@apollo/server';
import gql from 'graphql-tag';
import { startStandaloneServer } from '@apollo/server/standalone';
import {resolvers} from './resolvers';
import {typeDefs} from './schema';
import { userModels } from './model/user';



  const server = new ApolloServer({
    typeDefs,
    resolvers,

  })

  const runServer = async ()=>{
     const { url } = await startStandaloneServer(server, {
     context: async()=>{
      return {
        dataSources: {
          userModels,
        },
      }
     },
 
    listen: { port: 4000 },   
  });
  console.log(url)
  }

  runServer()



// console.log('Hello server')