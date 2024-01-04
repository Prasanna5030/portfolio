import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full  bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
                <div className="pb-8">
                    <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</h1>
                </div>
                <div>
                    <p className='text-xl mt-20'>
                    Hello everyone , I'm Prasanna Kumar and I'm a Front-end Developer. I have spent 2+ years working across different areas of digital design and developing UI/UX
                    I have developed many web applications using javascript frameworks such as Angular JS and React JS
                    and I'm also learning back-end technologies Java and python to became a passionate Full-stack Devloper.     
                    </p>
                </div>
                <div>
                <p className='text-xl mt-5'>
                  Out of the office you'll find me playing cricket, watching movies.my hobbies also include travelling and riding bikes </p>
                </div>
            </div>
        </div>
    )
}

export default About