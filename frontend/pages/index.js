import Link from 'next/link'
import Image from 'next/image'
import { CgArrowLongRight } from 'react-icons/cg';

const Home = (props) => {
  return (
    <div>
      <div className="px-8">
        <main className="mt-10 flex flex-col items-center">
          <h1 className='text-3xl mb-8 font-semibold'>
            codeloggers - Home
          </h1>
          <Image src="/profile.jpg"
            alt="next-blog"
            className='rounded-full object-cover'
            width={160}
            height={160}
          />
          <h2 className="text-[28px] mt-16 font-semibold">Popular Articles</h2>
          <div className="mt-5 flex flex-col items-center">
            <div>
            {props.blogs.map((blog, index) => {
          return <div key={index} className='mb-5'>
            <Link href={`/blogpost/${blog.slug}`}><h2 className="hover:underline cursor-pointer text-2xl font-semibold">{blog.title}?</h2></Link>
            <p className='text-lg mt-1 leading-8'>{blog.content.slice(0, 70)}...</p>
            <Link href={`/blogpost/${blog.slug}`}><button className='my-4 bg-gray-800 rounded-[6px] hover:bg-gray-700 text-white p-[8px]'>Read Article</button></Link>
            <hr />
          </div>
        })}
            </div>
            <Link href="/blogs"><a className="text-xl mt-6 mb-4 hover:underline text-center text-black inline">Browse All Articles <CgArrowLongRight className='inline text-black text-2xl' /></a></Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/api/blogs")
  const blogs = await res.json()
  return {
    props: { blogs: blogs }
  }
}
export default Home