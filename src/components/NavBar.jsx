import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
const Nav = () => {
  const [nav, setNav] = useState(false);
  const arr = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "portfolio"
    },
    {
      id: 4,
      link: "experience"
    },
    {
      id: 5,
      link: "contact"
    }
  ];
  return (
    <div className="flex justify-between items-center bg-black/50 backdrop-blur-lg w-full h-16 text-white px-5 fixed top-0">
      <div>
        <h1 className=" mt-3 text-5xl font-signature text-white">
          Nishikant
        </h1>
      </div>
      <ul className="hidden md:flex">
        {arr.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-gray-400 cursor-pointer font-medium capitalize hover:scale-110 ease-out duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="text-gray-500 cursor-pointer pr-3 z-10 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full
        h-screen bg-gradient-to-b from-black to-gray-500"
        >
          {arr.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize cursor-pointer m-4 py-2 text-5xl text-gray-400"
            >
              <Link onClick={()=>(setNav(!nav))} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
