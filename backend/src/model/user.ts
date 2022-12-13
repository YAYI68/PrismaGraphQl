import prisma from "../db";
import { hashPassword } from "../utils/auth";

const signUp = async(data)=>{
    const password = await hashPassword(data.password)
    const user = await prisma.user.create({
        data:{
            name:data.name,
            email:data.email,
            phoneNumber:data.phoneNumber,
            password:password
        }
    })
    return user
}

const allUsers = async()=>{
    const users = await prisma.user.findMany()
    return users
}

export const  userModels = {
    signUp,
    allUsers
}