import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import dsa from "../../public/dsa.webp";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: dsa,
      name: "DSA",
    },
  ];

  return (
    <div
      name="Skills" 
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"  
    >
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">Skills</h1>
        <p>
          I learned the following technologies in my 3 years of Diploma.
        </p>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 border-black rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 hover:bg-gray-200 duration-300 transition-all"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] h-[150px] rounded-full"
                alt={name}
              />
              <div className="mt-2 text-center">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
