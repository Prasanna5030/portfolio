import React from 'react'
import img from "../assets/newimgs.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'
const Home = () => {
    return (
        <div name="home" className='bg-gradient-to-b from-black via-black to-gray-800 h-screen w-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 text-white md:flex-row'>
                <div className="flex flex-col justify-center h-full mt-[5%] ">
                    <h1 className="text-4xl py-4 md:py-0 sm:text-7xl font-bold animate-pulse ">Hi there, I'm Prasanna Kumar</h1>
                    <p className='text-gray-500 py-4 max-w-md' > I have nearly 2 years of experience in building and designing software web application
                        I'm good in technologies like React JS, Angular JS ,tailwind css and  Node JS  . and I'm also learning backend technologies java and python to became a full stack developer
                    </p>
                
                    <div>
                    <Link
                    to="projects"
                    smooth
                    duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                  > Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight  size={30} className='ml-1'/></span></Link>                    </div>
                    </div>
                    <div>
                        <img src={img} alt="my_img" className='mx-auto w-2/3 h-full md:w-3/4 object-cover md:h-1/2 overflow-hidden rounded-2xl md:rounded-full hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-500 ' />
                    </div>
                </div>
        </div>
    )
}

export default Home