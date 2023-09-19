import React from 'react'
import { FaLinkedin, FaGithub, } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  const arr = [
    {
      id: 1,
      child: (
        <>LinkedIn<FaLinkedin size={24} /></>
        ),
      href:'https://www.linkedin.com/in/nishikant6969/',
      style:'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>GitHub<FaGithub size={24} /></>
        ),
      href:'https://github.com/nishikantraj'
    },
    {
      id: 3,
      child: (
        <>Leetcode<SiLeetcode size={24} /></>
        ),
      href:'https://leetcode.com/nishikant_/'
    },
    {
      id: 4,
      child: (
        <>Mail<HiOutlineMail size={24} /></>
        ),
      href:'mailto:nishikantraj1977@gmail.com'
    },
    {
      id: 5,
      child: (
        <>Resume<BsFillPersonLinesFill size={24} /></>
        ),
      href:'./NISHIKANT_SOA.pdf',
      style:'rounded-br-md',
      download: true
    }
  ]
  return (
      <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
          <ul>
            {arr.map(({id,child,href,style,download}) => (
              <li key={id} className={"flex justify-between w-36 h-10 px-4 ml-[-100px]  bg-gray-600 hover:ml-[-10px] hover:rounded-md duration-300" +" "+ style}>
                <a href={href} download={download} rel="noreferr" target='_blank' className='flex justify-between items-center w-full text-white'>
                      {child}
                </a>
                </li>
              ))}
          </ul>
    </div>
  )
}

export default SocialLinks