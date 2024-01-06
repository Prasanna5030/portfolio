import React from 'react'
import html from '../assets/html.png';
import node from '../assets/node.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactimg from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
import angular from '../assets/angularjs.png'





const Experience = () => {
    const skills=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-900  bg-orange-600 ,',
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-900 bg-sky-700'
        },
        {
            id:3,
            src:reactimg,
            title:'REACT JS',
            style:'shadow-cyan-900 bg-sky-600'
        },
        {
            id:4,
            src:node,
            title:'NODE JS',
            style:'shadow-green-900 bg-green-800'
        },
        {
            id:5,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400 bg-sky-800'
        },
        {
            id:6,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-600 bg-yellow-500'
        },
        {
            id:7,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-800 bg-gray-800'
        },
        {
            id:8,
            src:angular,
            title:'Angular JS',
            style:'shadow-red-500 bg-red-800 '
        },
    ]

    return (
        <div name="experience" className='bg-white text-black w-full '>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                <h1 className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-black'>Experience</h1>
                <p className='py-6 text-black'> These are the technologies Ive worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {skills.map(({id,src, title ,style})=>{
                    return ( <div key={id} className={"shadow-xl hover:scale-110 duration-500 py-2 rounded-lg"+" "+style}>
                    <img src={src} alt="img" className='w-20 mx-auto animate-pulse' />
                    <p className='mt-4'> {title}</p>
                    </div>)
                })}
                
               
                </div>
            </div>
        </div>
    )
}

export default Experience