import React from 'react'

const contact = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className='text-3xl font-semibold'>
        codeloggers - Contact
      </h1>
      <div className='mt-8 flex flex-col  w-[600px]'>
        <label htmlFor="name" className='text-lg font-semibold mb-1 ml-1'>name</label>
        <input id='name' type="text" className='mb-3 w-full bg-gray-800 rounded h-12 text-white p-2 outline-none py-3 text-lg' />

        <label htmlFor="email" className='text-lg font-semibold mb-1 ml-1'>email</label>
        <input id='email' type="email" className='mb-3 w-full bg-gray-800 rounded h-12 text-white p-2 outline-none py-3 text-lg' />

        <label htmlFor="message" className='text-lg font-semibold mb-1 ml-1'>message</label>
        <textarea id="message" cols="30" className=' w-full bg-gray-800 rounded h-32 text-white p-2 outline-none py-1 text-lg' rows="10"></textarea>

        <button className='self-start font-semibold p-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 text-lg mt-4 w-24'>Submit</button>
      </div>
    </div>
  )
}

export default contact
