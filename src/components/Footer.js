import React from 'react'
import SocialLinks from './SocialLinks';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {
    const links = [
        {
            id: 1,
            child: (<><FaLinkedin size={30} /> </>),

            href: 'www.linkedin.com/in/prasanna-kumar-m-444016273',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (<>
                 <FaGithub size={30} />
            </>),
            href: 'https://github.com/Prasanna5030',
        },
        {
            id: 3,
            child: (<>
                
                <HiOutlineMail size={30} />
            </>),
            href: 'mailto:msprasannakumar19@gmail.com',
        },
        {
            id: 4,
            child: (<>
                 <BsFillPersonLinesFill size={30} />
            </>),
            href: './resume.pdf',
            style: 'rounded-br-md',
            download: true,

        }
    ];
    const date=new Date().getFullYear();
    return (
        <div name="footer" className="relative w-full bg-black text-white flex flex-row justify-between">
        
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pb-2">
                <div className="absolute right-0 bottom-0">
                <h1 className="text-xl">copyright &copy; {date}</h1>
                </div>
                <div>
                <h1>Mail to : msprasannakumar@gmail.com</h1>
                <h1>Get in touch : +91-9390535662</h1></div>
                <ul className='flex flex-row'>
            {
                links.map(({id, href,child ,download})=>{
                    return <li key={id}><a href={href} download={download} className=' ml-16'>{child}</a></li>
                })
            }
            </ul>
           
            </div>
            
           
        </div>
    )
}

export default Footer