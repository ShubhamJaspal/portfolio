import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300 justify-center items-center p-4 flex'>
        <form method='POST' action='https://getform.io/f/pbovpvna' className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the Form below or shoot me an E-mail - sbmjaspal01gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 text-gray-800' type='text' placeholder='Name' name='Name'></input>
            <input className='bg-[#ccd6f6] my-4 p-2 text-gray-800' type='email' placeholder='E-mail' name='E-mail'></input>
            <textarea className='bg-[#ccd6f6] text-gray-800' placeholder='Message' name='Message' cols={30} rows={10}></textarea>
            <button className='text-white group border-2 px-6 py-3 my-2 flex justify-center items-center hover:bg-red-400 hover:border-red-400'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact