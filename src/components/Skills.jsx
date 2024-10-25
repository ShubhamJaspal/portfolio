import React from 'react'
import HTML from '../assets/html.png' 
import CSS from '../assets/css.png'
import TAILWIND from '../assets/tailwind.png'
import JAVASCRIPT from '../assets/javascript.png'
import REACTIMG from '../assets/react.png'
import GITHUB from '../assets/github.png' 

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-red-500 inline'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTML Icon" className="w-20 mx-auto" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} alt="HTML Icon" className="w-20 mx-auto" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={TAILWIND} alt="HTML Icon" className="w-20 mx-auto" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JAVASCRIPT} alt="HTML Icon" className="w-20 mx-auto" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={GITHUB} alt="HTML Icon" className="w-20 mx-auto" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={REACTIMG} alt="HTML Icon" className="w-20 mx-auto" />
                    <p className='my-4'>React JS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills