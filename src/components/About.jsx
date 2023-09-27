import React from 'react'

const About = () => {
  return (
      <div name="about" className=' w-full min-h-screen pt-16 text-white bg-gradient-to-b from-gray-800 to-black' >
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-4'>
                  <p className='text-4xl font-bold inline border-b-2 border-gray-500'>About</p>
              </div>
              <p className='text-lg font-light mt-16'>
                  I am currently in my 4<sup>th</sup> year of pursuing a B.Tech degree at Siksha 'O' Anusandhan University,
                  where I've nurtured a deep passion for web development. My journey in the realm of technology
                  has been marked by a strong foundation in Java, honed problem-solving skills, and a fervent
                  belief in continuous learning.
              </p>
              <br />
              <p className='text-lg font-light'>
                  In all my endeavors, I embrace the philosophy that "What we know is a drop, what we do not know is
                  an ocean." This philosophy drives my passion for learning and innovation, reminding me that there
                  is always more to discover and explore in the ever-evolving world of technology.
              </p>
              <br />
              <p className='text-lg font-light'>
                  I invite you to explore my projects in the dedicated section, where you'll witness my dedication to web
                  development, problem-solving, and my unquenchable thirst for knowledge. Thank you for visiting my
                  portfolio, and feel free to reach out for any inquiries or collaborations.
              </p>
          </div>
    </div>
  )
}

export default About