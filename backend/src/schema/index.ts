export const typeDefs = `#graphql 
  type User{
    id:     String  
   name:    String
   email:     String
   phoneNumber: String
   imageUrl:    String
  
  }

  input newUserInput{
    name:    String
    email:     String
    phoneNumber: String
    password: String
  }

  type Mutation {
    signUp(input:newUserInput):User!
  }

  type Query {
     users :[User]!
  }
`