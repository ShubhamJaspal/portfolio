import React from 'react'
import WEATHER from '../assets/weather.jpg'
import MOVIES from '../assets/MOVIES.jpg'
import MERCEDES from '../assets/Mercedes.jpg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-red-500 inline'>Work</p>
                    <p className='py-4'>Check out some of my recent work.</p>
                </div>

                <div
                    className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 '>
                    <div style={{ backgroundImage: `url(${MERCEDES})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Mercedes G-Wagon
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://65e840724a9c5ef524a3f9b0--melodious-cobbler-8d7072.netlify.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${MOVIES})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Movie Search App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://movie-search-mu-gilt.vercel.app/#contact'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${WEATHER})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://weather-check-clone.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work