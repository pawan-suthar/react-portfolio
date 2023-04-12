import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      title: "famework",
    },
    {
      id: 2,
      src: reactParallax,
      title: "jobmatchup",
    },
    {
      id: 3,
      src: navbar,
      title: "famework",
    },
    {
      id: 4,
      src: reactSmooth,
      title: "famework",
    },
    {
      id: 5,
      src: installNode,
      title: "famework",
    },
    {
      id: 6,
      src: reactWeather,
      title: "famework",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center justify-items-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold  border-b-4 border-gray-500 pb-2">
            Projects
          </p>
        </div>

        <div class="p-5 grid sm:grid-cols-2 md:grid-cols-3 gap-8  flex-col justify-center">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} class="  max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={src} alt="Mountain" />
              <div class="px-6 py-4">
                <div class="font-bold text-lg mb-2 text-white">{title}</div>
                <p class="text-gray-200 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class=" pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
