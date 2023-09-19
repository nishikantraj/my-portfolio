import React from 'react'
import { FaLinkedin, FaGithub, } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  return (
      <div className='flex flex-col top-[35%] left-0 fixed'>
          <ul>
              <li className='flex justify-between w-36 h-10 px-4 ml-[-100px]  bg-gray-600 hover:ml-[-10px] hover:rounded-md duration-300'>
                  <a href='' className='flex justify-between items-center w-full text-white'><>LinkedIn<FaLinkedin size={24}/></>
                  </a>
              </li>
          </ul>
    </div>
  )
}

export default SocialLinks