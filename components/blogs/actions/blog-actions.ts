'use server';
import prisma from './../../../lib/prisma';
import { revalidatePath } from "next/cache";

interface IBlog {
    title: string,
    content:string,
    id?: string
}
export const deleteBlog = async(id:string) => {

    const blog = await prisma.blog.findFirst({where:{id: id}});
    if(!blog){
        throw new Error("No existe entrada");
        
    }
    const deleteBlog = await prisma.blog.delete({where:{id:id}})
    revalidatePath('/blog');
    return deleteBlog;
}

export const addBlog = async(body:IBlog) =>{

    const newBlog = await prisma.blog.create({data: body})
    revalidatePath('/blog');
    return newBlog;

}

export const editBlog = async(body:IBlog) =>{

    const blog = await prisma.blog.findFirst({where:{id: body.id}});
    if(!blog){
        throw new Error("No existe entrada");
        
    }
    const updatedBlog = await prisma.blog.update({where:{id: body.id},data: {
      title: body.title,
      content: body.content  
    }})
    revalidatePath('/blog');
    return updatedBlog
}