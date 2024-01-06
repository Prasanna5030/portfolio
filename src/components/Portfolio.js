import React from 'react'
import netflix from '../assets/portfolio/netflix-gpt.jpg';
import todolist from '../assets/portfolio/Todolist.jpg';
import clientmeeting from '../assets/portfolio/homepage.png';
import cocktailsdb from '../assets/portfolio/cocktailsdb.png';
import portfolio from '../assets/portfolio/myportfolio.png';
import node from '../assets/portfolio/installNode.jpg';
const Portfolio = () => {
    const handleDemo=(link)=>{
        window.open(link , '_blank');

    }
    const handleCode=(url)=>{
        window.open(url ,'_blank')
    }

    const portfolios = [
        {
            id: 1,
            src: netflix,
            url:"https://github.com/Prasanna5030/NetflixGPT",
            link:"https://netflixgptsearch.vercel.app/",
            technologies:["React", "JS" , "TailWind"]

        },
        {
            id: 2,
            src: todolist,
            url:"https://github.com/Prasanna5030/ToDolist-app",
            technologies:["Node", "Express JS" , "CSS"]

        },
        {
            id: 3,
            src: clientmeeting,
            url:"https://github.com/Prasanna5030/alphaArchy",
            link:"https://alphaarchy.netlify.app/",
            technologies:["Angular", "CSS" , "HTML"]

        }, {
            id: 4,
            src: cocktailsdb,
            url: "https://github.com/Prasanna5030/react-js/tree/master",
            link:"https://thecocktailsdata.netlify.app/",
            technologies:["React", "JS" , "CSS"]

        }, {
            id: 5,
            src: portfolio,
            url:"https://github.com/Prasanna5030/portfolio",
            technologies:["React", "JS" , "TailWind"]

        }, {
            id: 6,
            src: node,
            url:"https://github.com/Prasanna5030/ToDolist-app",
            technologies:["Node", "Express JS" , "CSS"]

        }
    ]
    return (
        <div name="projects" className="bg-white text-black ">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h1 className="text-4xl font-bold inline border-b-4 border-gray-500"> Portfolio</h1>
                    <p className="py-6"> CheckOut some of my work right here below </p>
                </div>
              
                <div className="grid sm:px-0 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12">
                    
                    {
                        portfolios.map(({id ,src, url, link, technologies})=>{
                            return(
                                <div key={id} className='md:my-5'>
                                <h1 className="flex flex-row justify-between text-xl">{ technologies.map(item=> {
                                    return <span className="">{item}</span>
                                })}</h1>
                                <img src={src} alt="img" className="rounded-md duration-200 hover:scale-110 md:h-[80%] md:object-cover" />
        
                                <div className="flex items-center justify-center ">
                                    <button className='bg-yellow-500 rounded-sm w-1/2 px-6 py-2 border shadow-md hover:shadow-black duration-300' onClick={()=>handleDemo(link)}>Demo</button>
                                    <button className='bg-yellow-500 rounded-sm w-1/2 px-6 py-2 border shadow-md hover:shadow-black duration-300'onClick={()=>handleCode(url)}>Code</button>
                                </div>
                            </div>
                            )
                        })
                    }
                   
                </div>
            </div>

        </div>
    )
}

export default Portfolio