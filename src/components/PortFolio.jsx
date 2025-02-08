import React from "react";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Portfolio</h1>

        <span className="text-red-700 font-bold underline">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] border-black rounded-lg shadow-lg p-5 cursor-pointer hover:scale-110 duration-300 flex flex-col items-center justify-center"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] rounded-full border-2 border-black mb-4 mt-6" // Black border applied to the image
                alt={name}
              />
              <div className="text-center">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700">Good Enough in Above Technical Skills</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
