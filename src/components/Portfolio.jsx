import React from "react";
import bubble_game from "../assets/portfolio/bubble_game.webp";
import keyGenerate from "../assets/portfolio/key_generate.webp";
import snakeLadder from "../assets/portfolio/snake_ladder.webp";
import toDoList from "../assets/portfolio/todo_list.webp";
import password_generator from "../assets/portfolio/password_generate.webp";
import searchPage from "../assets/portfolio/search_page.webp";

const Portfolio = () => {
  const arr = [
    {
      title: "Bubble game",
      stack:['html','css','javascript'],
      id: 1,
      src: bubble_game,
      web: 'https://nishikantraj.github.io/Bubble-Game/',
      code:'https://github.com/nishikantraj/Bubble-Game'
    },
    { title: "DES Key Generation",
      stack:['Java','cryptography','oops'],
      id: 2,
      src: keyGenerate,
      web: 'https://github.com/nishikantraj/DES_Key_Generation-JAVA',
      code:'https://github.com/nishikantraj/DES_Key_Generation-JAVA'
    },
    { title: "Snake & ladder game",
    stack:['java','oops'],
      id: 3,
      src: snakeLadder,
      web: 'https://github.com/nishikantraj/Snake_Ladder_Game_LLD',
      code:'https://github.com/nishikantraj/Snake_Ladder_Game_LLD'
    },
    { title: "Todo list",
    stack:['html','css','javascript'],
      id: 4,
      src: toDoList,
      web: 'https://nishikantraj.github.io/TODO-LIST/',
      code:'https://github.com/nishikantraj/TODO-LIST'
    },
    { title: "Password Generator",
    stack:['React.js'],
      id: 5,
      src: password_generator,
      web: 'https://nishikant-password-generate.vercel.app/',
      code:'https://github.com/nishikantraj/password_generator'
    },
    {
      title: "Search Page",
    stack:['html','css'],
      id: 6,
      src: searchPage,
      web: 'https://nishikant-searchpage.netlify.app/',
      code:'https://github.com/nishikantraj/Search-Page/tree/master/HTML/SearchPage'
    }
  ];
  return (
    <div
      name="portfolio"
      className="pt-16 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-400">
            Portfolio
          </p>
          <p className="pt-5">Check out some of my Projects</p>
        </div>
        <div className="flex flex-wrap  gap-8 md:justify-between justify-center">
          {arr.map(({ id, src,title,stack,web,code}) => (
            <div key={`project-${id}`} className="border border-cyan-400 hover:bg-cyan-500/10 duration-200 hover:scale-105 ease-out overflow-hidden group rounded-lg">
              <img
                src={src}
                alt="bubble"
                className="rounded-md group-hover:scale-105 duration-200 h-40 object-cover"
              />
              <div className="p-3 ">
                <h2 className="text-lg font-bold">{title}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {stack.map((item, id) => (
                    <div key={`tag-${id}`} className="bg-cyan-500 px-2 rounded-md text-black font-semibold text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              <div className="flex items-center justify-center pt-3 mt-3 border-t gap-3 border-cyan-400/25">
                <a href={web} target="_blank" className="flex items-center justify-center w-1/2 duration-200 h-10 bg-gray-900 hover:bg-cyan-400 hover:font-bold tracking-widest text-sm hover:text-black ring-1 rounded-md ring-cyan-400 ">
                  Website
                </a>
                <a href={code} target="_blank" className="flex items-center justify-center w-1/2 duration-200 h-10 bg-gray-900 hover:bg-cyan-400 hover:font-bold tracking-widest text-sm hover:text-black ring-1 rounded-md ring-cyan-400 ">
                  Code
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
