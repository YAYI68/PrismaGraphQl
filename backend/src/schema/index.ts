export const typeDefs = `#graphql 
  type User{
    name: String
    email: String
  }

  input newUserInput{
    name: String
    email: String
  }

  type Mutation {
    createUser(input:newUserInput):User!
  }

  type Query {
     users :[User]!
  }
`