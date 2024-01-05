import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';
import hat from '../assets/hat.png'

const Navbar = () => {
  const [navItems , setNavItems]= useState(true);
  const links=[
    {
      id:1,
      link:"home",
    },
    {
      id:2,
      link:"projects",
    },
    {
      id:3,
      link:"experience",
    },
    {
      id:4,
      link:"about",
    },
    {
      id:5,
      link:"contact",
    },
  ];

  const handleNavItems=()=>{
    setNavItems(!navItems);
  }


  return (
    <div className="flex justify-between items-center bg-white text-black h-20 w-full fixed">
      <div className="flex flex-row">
        <h1 className="font-signature text-3xl my-4 pl-4">Prasanna</h1>
        <img src={hat} alt="hat-img" className="w-16 h-16 animate-pulse hover:animate-bounce"/>
      </div>
      
      
        <ul className='hidden md:flex text-xl'>
        {links.map(({id , link}) => <li key={id} className="cursor-pointer px-4 hover:scale-110 duration-500 hover:underline-offset-2 hover:underline uppercase"> <Link to={link} smooth duration={500}>{link}</Link></li>
        )} 
        </ul>    
        <div className=' px-4 md:hidden z-10' onClick={handleNavItems}>
       {navItems ? <FaBars size={30}/> : <FaTimes size={30}/> }   
        </div>

        {!navItems &&  <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-gray-500 to-black text-white">
        {links.map(({id , link}) => <li key={id} className="cursor-pointer px-4 hover:scale-110 py-6 duration-200"> <Link to={link} smooth duration={500} onClick={()=>setNavItems(!navItems)}>{link}</Link></li>
        )}
        </ul>} 
      </div>
  
  )
}

export default Navbar