import React from 'react'
import img from "../assets/newimgs.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'
const Home = () => {
    return (
        <div name="home" className='bg-gradient-to-b from-black via-black to-gray-800 h-screen w-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 text-white md:flex-row'>
                <div className="flex flex-col justify-center h-full mt-[10%] md:mt-[5%] ">
                    <h1 className="text-4xl py-4 md:py-0 sm:text-7xl font-bold ">Hi, I'm Prasanna Kumar</h1>
                    <p className='text-gray-500 py-4 max-w-md' > I have nearly 2 years of experience in building and designing software web application
                        I'm good in technologies like React JS, Angular JS frameworks and tailwind css frameworks. and I'm also learing backend technologies java and pytho to became a full stack developer
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
                        <img src={img} alt="my_img" className='mx-auto w-2/3 h-3/4 md:w-full object-cover md:h-full overflow-hidden rounded-full hover:shadow-lg hover:shadow-white hover:scale-110 duration-500' />
                    </div>
                </div>
        </div>
    )
}

export default Home