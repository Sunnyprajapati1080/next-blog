import Link from 'next/link'
import React, { useState } from 'react'

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.blogs)
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className='text-3xl font-semibold'>
        codeloggers - Blogs
      </h1>
      <div className='mt-8'>
      {blogs.map((blog, index) => {
          return <div key={index} className='mb-5'>
            <Link href={`/blogpost/${blog.slug}`}><h2 className="hover:underline cursor-pointer text-2xl font-semibold">{blog.title}?</h2></Link>
            <p className='text-lg mt-1 leading-8'>{blog.content.slice(0, 70)}...</p>
            <Link href={`/blogpost/${blog.slug}`}><button className='my-4 bg-gray-800 rounded-[6px] hover:bg-gray-700 text-white p-[8px]'>Read Article</button></Link>
            <hr />
          </div>
        })}
      </div>
    </div>
  )
}
export async function getServerSideProps(context){
  const res = await fetch("http://localhost:8000/api/blogs")
  const blogs = await res.json()
  return{
    props:{blogs}
  }
}
export default Blogs
