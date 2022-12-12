import prisma from "../db";

const createBook = async(data)=>{
  const book = await prisma.book.create({
    data:{
        author:data.author,
        title :data.title
    }
  })
  return book;
}

const getBooks = async()=>{
    const book = await prisma.book.findMany()
    return book
}

const bookModels = {
    createBook,
    getBooks,
}

export default bookModels