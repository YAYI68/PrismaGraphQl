
import bcrypt from 'bcrypt';
import jwt from  'jsonwebtoken';


export const hashPassword = async(password)=>{
    const hash = await bcrypt.hash(password,7)
    return hash
}

export const comparePassword = async(newPassword, password)=>{
    const isValid = await bcrypt.compare(newPassword, password)
    return isValid
}

export const  createJWT = (user)=>{
    const token = jwt.sign({id:user.id, name:user.name }, process.env.JWT_SECRET);
    return token;
}