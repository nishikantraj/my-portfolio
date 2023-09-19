import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import {TbArrowRightCircle} from 'react-icons/tb'

const Home = () => {
  return (
    <div class='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h1 className='text-white text-4xl font-bold sm:text-6xl'>I'm a Web Developer</h1>
          <p className='text-gray-500 max-w-md py-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veritatis
            facere quos nostrum explicabo ex, iusto cupiditate sit expedita suscipit,
            repellat modi quaerat incidunt eaque culpa. Blanditiis distinctio excepturi
            quasi?
          </p>
          <div >
            <button className='group text-white w-fit flex items-center cursor-pointer rounded-md px-4 py-3 my-2 bg-gradient-to-r from-cyan-500 to-blue-500'>
              Portfolio
              <span className='text-gray-800 ml-2 px-2 group-hover:rotate-90 duration-500'><TbArrowRightCircle size={25}/></span>
            </button>
          </div>
        </div>
        <div >
          <img src={heroImage} alt="my portfolio" className='object-contain rounded-2xl w-2/3 mx-auto md:w-2/3' />
        </div>
      </div>
    </div>
  )
}

export default Home