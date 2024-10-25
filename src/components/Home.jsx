import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>

        {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-400'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Shubham</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-end Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Front-end Developer, specializing in designing and creating
                the webpages or the whole website. Currently I'm focused on
                building responsive web-applications. 
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-400 hover:border-red-400'>
                <Link
                        to="work"
                        smooth={true}

                        duration={500}
                    >View Work</Link> 
                    <span className='group-hover:rotate-90 duration-500'>
                    <HiArrowNarrowRight className='ml-3' />
                    </span>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Home