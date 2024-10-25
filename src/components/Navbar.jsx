import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import { BsFillPersonLinesFill } from 'react-icons/bs';
import shubham from '../assets/shubham.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleclick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 text-xl'>
            <div>
                <img src={shubham} alt="Logo Img" style={{ width: '55px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex gap-10 pr-10'>
                <li className='cursor-pointer'>
                    <Link
                        to="home"
                        smooth={true}

                        duration={500}
                    >Home</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link
                        to="about"
                        smooth={true}

                        duration={500}
                    >About</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link
                        to="skills"
                        smooth={true}

                        duration={500}
                    >Skills</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link
                        to="work"
                        smooth={true}

                        duration={500}
                    >Work</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link
                        to="contact"
                        smooth={true}

                        duration={500}
                    >Contacts</Link>
                </li>

            </ul>

            {/* Hamburger} */}
            <div onClick={handleclick} className='z-10 md:hidden cursor-pointer text-2xl'>
                {!nav ? <FaBars /> : <FaTimes />}

            </div>

            {/*mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl cursor-pointer'>
                    <Link onClick={handleclick}
                        to="home"
                        smooth={true}
                        
                        duration={500}
                    >Home</Link>
                    </li>
                <li className='py-6 text-4xl cursor-pointer'>
                    <Link onClick={handleclick}
                        to="about"
                        smooth={true}
                        
                        duration={500}
                    >About</Link>
                    </li>
                <li className='py-6 text-4xl cursor-pointer'>
                    <Link onClick={handleclick}
                        to="skills"
                        smooth={true}
                        
                        duration={500}
                    >Skills</Link>
                    </li>
                <li className='py-6 text-4xl cursor-pointer'>
                    <Link onClick={handleclick}
                        to="work"
                        smooth={true}
                        
                        duration={500}
                    >Work</Link>
                    </li>
                <li className='py-6 text-4xl cursor-pointer'>
                    <Link onClick={handleclick}
                        to="contact"
                        smooth={true}
                        
                        duration={500}
                    >Contacts</Link>
                    </li>
            </ul>

            {/*social icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/shubham-jaspal-a3412b264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                            LinkedIn<FaLinkedin size={35} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/ShubhamJaspal'>
                            GitHub<FaGithub size={35} />
                        </a>
                    </li>
                    
                        
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-red-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:sbmjaspal01@gmail.com">
                            E-mail<HiOutlineMail size={35} />   
                        </a>
                    </li> */}
                        
                  
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-green-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://wa.me/9896663640" >
                            Whats App<FaWhatsapp size={35} />
                        </a>
                    </li>
                    
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-900'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1N-lGHJXyJgwbeUnRh_qLidG2vrBgtE1i/view?usp=drivesdk'>
                            Resume<BsFillPersonLinesFill size={35} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
