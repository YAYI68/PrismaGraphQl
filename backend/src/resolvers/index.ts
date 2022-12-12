
  const resolvers = {
    Query:{
        books:(_,__,{dataSources})=>{
            return dataSources.bookModels.getBooks()
        }
    },
    Mutation:{
      addBook:(_,{input},{dataSources})=>{
        return dataSources.bookModels.createBook(input)
      }
    }
  }

  export default resolvers