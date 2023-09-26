import React from "react";
import css from "../assets/experience/css.png";
import html from "../assets/experience/html.png";
import java from "../assets/experience/java.png";
import javascript from "../assets/experience/javascript.png";
import python from "../assets/experience/python.png";
import react from "../assets/experience/react.png";
import sql from "../assets/experience/sql.png";
import tailwind from "../assets/experience/tailwind.png";

const Experience = () => {
  const arr = [
    {
      id: 1,
      src: html,
      style: "shadow-orange-500",
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      style: "shadow-blue-500",
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      style: "shadow-yellow-500",
      title: "JavaScript",
    },
    {
      id: 4,
      src: react,
      style: "shadow-blue-600",
      title: "React",
    },
    {
      id: 5,
      src: java,
      style: "shadow-pink-600",
      title: "Java",
    },
    {
      id: 6,
      src: python,
      style: "shadow-yellow-200",
      title: "Python",
    },
    {
      id: 7,
      src: sql,
      style: "shadow-pink-300",
      title: "SQL",
    },
    {
      id: 8,
      src: tailwind,
      style: "shadow-sky-400",
      title: "Tailwind",
    },
  ];
  return (
    <div
      name='experience'
      className="bg-gradient-to-b from-gray-800 to-black py-10"
    >
      <div className="w-full h-full max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-gray-400">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {arr.map(({ id, src, style, title }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 rounded-lg py-2 ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
