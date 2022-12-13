export const resolvers = {
    Query:{
        users:(_,__,{dataSources})=>{
            return dataSources.userModels.allUser()
        }
    },
    Mutation:{
      createUser:(_,{input},{dataSources})=>{
        return dataSources.userModels.signUp(input)
      }
    }
  }
