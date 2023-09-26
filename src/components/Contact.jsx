import React from 'react'

const Contact = () => {
  return (
      <div name='contact' className='w-full p-4 h-screen bg-gradient-to-b from-black to-gray-800 '>
          <div className=" h-full max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
              
              <div className='pb-8'>
                  <p className='text-4xl font-bold border-gray-500 inline border-b-2'>Contact</p>
                  <p className='pt-6'>Submit the form below to get in touch with me.</p>
              </div>

              <div className='flex justify-center items-center'>
                  <form action="https://getform.io/f/bad49fd4-a3c3-4e82-bcca-48711a18467f" method="POST" className='flex flex-col w-full md:w-1/2'>
                      
                      <input name='Name' type="text" placeholder='Enter your name'
                          className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                      
                      <input name='Email' type="text" placeholder='Enter your em@il'
                          className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                      
                      <textarea name="Message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2
                       rounded-md text-white focus:outline-none'></textarea>
                      
                      <button className='text-white flex items-center cursor-pointer rounded-md px-6 py-3 my-8 mx-auto
                       hover:scale-105 bg-gradient-to-b from-cyan-500 to-blue-500'>
                          Let's talk
                      </button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Contact