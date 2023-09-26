import React from "react";
import bubble_game from "../assets/portfolio/bubble_game.png";
import keyGenerate from "../assets/portfolio/key_generate.png";
import snakeLadder from "../assets/portfolio/snake_ladder.png";
import toDoList from "../assets/portfolio/todo_list.png";

const Portfolio = () => {
  const arr = [
    {
      id: 1,
      src: bubble_game,
    },
    {
      id: 2,
      src: keyGenerate,
    },
    {
      id: 3,
      src: snakeLadder,
    },
    {
      id: 4,
      src: toDoList,
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-400">
            Portfolio
          </p>
          <p className="pt-5">Check out some of my Projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {arr.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="bubble"
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 ease-in-out">
                  Website
                </button>
                <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 ease-in-out">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
