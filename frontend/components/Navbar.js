import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-center space-x-8 text-lg pt-10 font-semibold'>
      <Link href="/">home</Link>
      <Link href="/blogs">blogs</Link>
      <Link href="/about">about</Link>
      <Link href="/contact">contact</Link>
    </div>
  )
}

export default Navbar
