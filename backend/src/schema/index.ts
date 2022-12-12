const typeDefs = `#graphql 
  type Book{
    title: String
    author: String
  }

  input newBookInput{
    title: String
    author: String
  }

  type Mutation {
    addBook(input:newBookInput):Book!
  }

  type Query {
     books :[Book]!
  }
`
export default typeDefs