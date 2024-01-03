import React from 'react'
import netflix from '../assets/portfolio/netflix-gpt.jpg';
import todolist from '../assets/portfolio/Todolist.jpg';
import clientmeeting from '../assets/portfolio/homepage.png';
import cocktailsdb from '../assets/portfolio/cocktailsdb.png';
import portfolio from '../assets/portfolio/myportfolio.png';
const Portfolio = () => {
    const handleDemo=(id)=>{

    }
    const handleCode=(url)=>{
        window.open(url ,'_blank')
    }

    const portfolios = [
        {
            id: 1,
            src: netflix,
            url:"https://github.com/Prasanna5030/NetflixGPT"

        },
        {
            id: 2,
            src: todolist,
            url:"https://github.com/Prasanna5030/ToDolist-app"
        },
        {
            id: 3,
            src: clientmeeting,
            url:"https://github.com/Prasanna5030/alphaArchy"
        }, {
            id: 4,
            src: cocktailsdb,
            url: "https://github.com/Prasanna5030/react-js/tree/master"
        }, {
            id: 5,
            src: portfolio,
        }, {
            id: 6,
            src: netflix,
        }
    ]
    return (
        <div name="projects" className="bg-gradient-to-b from-black to-gray-800 text-white ">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h1 className="text-4xl font-bold inline border-b-4"> Portfolio</h1>
                    <p className="py-6"> CheckOut some of my work right here below </p>
                </div>
              
                <div className="grid sm:px-0 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12">
                    
                    {
                        portfolios.map(({id ,src, url})=>{
                            return(
                                <div key={id} className='md:my-5'>
                                <img src={src} alt="img" className="rounded-md duration-200 hover:scale-110 md:h-[80%] md:object-cover" />
        
                                <div className="flex items-center justify-center ">
                                    <button className='bg-yellow-500 rounded-sm w-1/2 px-6 py-2 border shadow-md hover:shadow-white duration-300' onClick={()=>handleDemo(id)}>Demo</button>
                                    <button className='bg-yellow-500 rounded-sm w-1/2 px-6 py-2 border shadow-md hover:shadow-white duration-300'onClick={()=>handleCode(url)}>Code</button>
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