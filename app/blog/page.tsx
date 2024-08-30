export const dynamic = 'force-dynamic';
import { title } from "@/components/primitives";
import prisma from './../../lib/prisma';
import image_default from './../../.next/static/chunks/_3cdb9c._';
import ButtonDeleteBlog from './../../components/blogs/components/ButtonDeleteBlog';
import FormAddBlog from './../../components/blogs/components/FormAddBlog';
import ModalEditBlog from './../../components/blogs/components/ModalEditBlog';


export default async function BlogPage() {
  const blogs = await prisma.blog.findMany();
  console.log(blogs)
  return (
    <div>
      <div className="flex w-full justify-between items-center">
      <h1 className={title()}>Blog</h1>
      <FormAddBlog />
      </div>
      <div className="flex flex-col gap-4 my-4">
        {blogs.map(blog => (
          <div className="border border-white rounded-md p-4" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <div className=" mt-4 w-full flex justify-end items-center gap-4">
              <ModalEditBlog blog={blog}/>
            <ButtonDeleteBlog id={blog.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
