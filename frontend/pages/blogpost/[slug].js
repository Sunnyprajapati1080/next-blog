import React from "react"

const Blogpost = (props) => {
  return (
    props && <div className='w-[900px] mx-auto mt-8'>
      <h1 className='text-3xl mb-6 font-semibold text-center'>{props.blog.title}</h1>
      <p className='text-xl leading-10'>{props.blog.content}</p>
    </div>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:8000/api/blogs")
  const blogs = await res.json()
  const slug = context.query.slug
  const blog = blogs.filter((blog) => {
    return blog.slug === slug
  })
  if (blog.length !== 0) {
    return {
      props: { blog: blog[0] }
    }
  }else{
    return{
      props:{blog:{title:"sorry! no such blog found"}}
    }
  }
}
export default Blogpost
