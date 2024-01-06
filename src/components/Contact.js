import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full  bg-white text-black">
    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
    <div className='pb-8'>
    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
    <p className='py-6'>Submit the form below to get in touch with with me</p> 
    <div className="flex justify-center items-center">
        <form action="https://getform.io/f/90b7f356-da88-4462-ba3e-52e21df4cb8d" method="POST" className="flex flex-col w-full md:w-1/2">
        <input type="text" name="name" placeholder='Enter your name ' className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>
        <input type="email" name="email" placeholder='Enter your email ' className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>
        <textarea name="message" type="message" rows="6" placeholder='Enter your Message' className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"></textarea>
        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
        </form>
    </div>
     </div></div>
    </div>
  )
}

export default Contact