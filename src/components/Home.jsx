import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import { TbArrowRightCircle } from 'react-icons/tb'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='pt-16 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h1 className='text-white text-4xl font-bold sm:text-6xl'>I'm a Web Developer</h1>
          <p className='text-gray-500 max-w-md text-lg py-4'>
            I am a passionate tech enthusiast, deeply immersed in the world of technology. Currently, I'm
            actively engaged with technologies such as React, Tailwind CSS, and proficient in
            the programming language Java.
          </p>
          <div >
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit flex items-center cursor-pointer rounded-md px-4 py-3 my-2 bg-gradient-to-r from-cyan-500 to-blue-500'>
              Portfolio
              <span className='text-gray-800 ml-2 px-2 group-hover:rotate-90 duration-500'><TbArrowRightCircle size={25}/></span>
            </Link>
          </div>
        </div>
        
        <div className='p-8'>
          <img src={heroImage} alt="my portfolio" className=' aspect-[3/4] overflow-hidden object-cover rounded-2xl h-80' />
        </div>
      </div>
    </div>
  )
}

export default Home