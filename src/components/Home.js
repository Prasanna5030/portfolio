import React from 'react'
import img from "../assets/newimgs.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll';
import '../index.scss';
const Home = () => {
    return (
        <div name="home" className='bg-white text-black h-screen w-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 text-black md:flex-row'>
                <div className="flex flex-col justify-center h-full mt-[5%] ">
                    
                    
<div class="content">
<div class="content__container">
  <p class="content__container__text text-black md:text-5xl">
    Hello
  </p>
  
  <ul class="content__container__list md:text-5xl">
    <li class="content__container__list__item">world !</li>
    <li class="content__container__list__item">there !</li>
    <li class="content__container__list__item">users !</li>
    <li class="content__container__list__item">everybody !</li>

  </ul>
</div>
</div>
<h1 className="text-4xl py-4 md:py-0 sm:text-4xl font-bold animate-pulse md:mt-[25%] mt-[60%] typing "> This is Prasanna Kumar</h1>

                    <p className='text-gray-500 py-4 max-w-md' >a passionate Full Stack Developer with one year of hands-on experience in building robust web applications. My expertise spans across front-end and back-end technologies, enabling me to deliver comprehensive and efficient solutions.
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