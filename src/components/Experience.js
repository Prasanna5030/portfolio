import React from 'react'
import html from '../assets/html.png';
import node from '../assets/node.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactimg from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';





const Experience = () => {
    const skills=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:reactimg,
            title:'REACT JS',
            style:'shadow-blue-600'
        },
        {
            id:4,
            src:node,
            title:'NODE JS',
            style:'shadow-green-500'
        },
        {
            id:5,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:7,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-100'
        },
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full '>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                <h1 className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</h1>
                <p className='py-6'> These are the technologies Ive worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {skills.map(({id,src, title ,style})=>{
                    return ( <div key={id} className={"shadow-md hover:scale-110 duration-500 py-2 rounded-lg" +" "+style}>
                    <img src={src} alt="img" className='w-20 mx-auto' />
                    <p className='mt-4'> {title}</p>
                    </div>)
                })}
                
               
                </div>
            </div>
        </div>
    )
}

export default Experience