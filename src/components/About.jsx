import React from 'react'

const About = () => {
  return (
      <div name="about" className=' w-full min-h-screen pt-16 text-white bg-gradient-to-b from-gray-800 to-black' >
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-4'>
                  <p className='text-4xl font-bold inline border-b-2 border-gray-500'>About</p>
              </div>
              <p className='text-lg font-light mt-16'>
              I graduated in 2024 with a B.Tech in CSE from Siksha 'O' Anusandhan University, where my passion for web development and problem-solving took flight. 
              </p>
              <br />
              <p className='text-lg font-light'>
              My mantra? "What we know is a drop, what we don’t know is an ocean." It keeps me hungry to discover more in the fast-paced tech world.
              </p>
              <br />
              <p className='text-lg font-light'>
              Want to see what I can do? Check out my projects – they speak louder than words. Let’s connect for collaborations or inquiries!
              </p>
          </div>
    </div>
  )
}

export default About