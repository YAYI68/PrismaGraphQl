export const resolvers = {
    Query:{
        users:(_,__,{dataSources})=>{
            return dataSources.userModels.allUsers()
        }
    },
    Mutation:{
        signUp:(_,{input},{dataSources})=>{
        return dataSources.userModels.signUp(input)
      }
    }
  }
