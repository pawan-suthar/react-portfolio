import React from "react";
import pblog from "../assets/portfolio/pblog.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import jobmatchup from "../assets/portfolio/jobmatchup.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { FaGithubAlt } from "react-icons/fa";
import { TiLink } from "react-icons/ti";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pblog,
      title: "Pblogs",
      demo: "https://pawansuthar.pythonanywhere.com/",
      github: "https://github.com/pawan-suthar/Pblog",
      hashtag: "#python #Django #bootstrap",
      desc: "With this application, the admin can easily post blogs and manage them according to categories they create. Users can access all the blogs and filter them based on categories, ensuring they can easily find the content they're interested in.",
    },
    {
      id: 2,
      src: jobmatchup,
      title: "JobMatchup",
      demo: "https://jobb.pythonanywhere.com/",
      github: "https://github.com/pawan-suthar/JobMatchup",
      hashtag: "#python #Django #bootstrap",
      desc: "JobMatchup is a user-friendly HR portal built with Python and the Django framework that allows HR professionals to post job openings with detailed descriptions, and job seekers to apply for jobs by upload their resumes with details. ",
    },
    {
      id: 3,
      src: navbar,
      title: "famework",
      demo: "link",
      github: "link",
      hashtag: "#python #tech",
      desc: "With this application, the admin can easily post blogs and manage them according to categories they create. Users can access all the blogs and filter them based on categories, ensuring they can easily find the content they're interested in.",
    },
    {
      id: 4,
      src: reactSmooth,
      title: "famework",
      demo: "link",
      github: "link",
      hashtag: "#python #tech",
      desc: "With this application, the admin can easily post blogs and manage them according to categories they create. Users can access all the blogs and filter them based on categories, ensuring they can easily find the content they're interested in.",
    },
    {
      id: 5,
      src: installNode,
      title: "famework",
      demo: "link",
      github: "link",
      hashtag: "#python #tech",
      desc: "With this application, the admin can easily post blogs and manage them according to categories they create. Users can access all the blogs and filter them based on categories, ensuring they can easily find the content they're interested in.",
    },
    {
      id: 6,
      src: reactWeather,
      title: "famework",
      demo: "link",
      github: "link",
      hashtag: "#python #tech",
      desc: "With this application, the admin can easily post blogs and manage them according to categories they create. Users can access all the blogs and filter them based on categories, ensuring they can easily find the content they're interested in.",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white h-screen md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center justify-items-center w-full h-full">
        <div className="pb-4 pt-96 ">
          <p className="text-4xl font-bold  border-b-4 border-gray-500 pb-2">
            Projects
          </p>
        </div>

        <div class="p-5 grid sm:grid-cols-2 md:grid-cols-3 gap-8  flex-col justify-center">
          {portfolios.map(({ id, src, title, demo, github, hashtag, desc }) => (
            <div key={id} class="  max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={src} alt="Mountain" />
              <div class="px-6 py-4">
                <div class="font-bold text-lg mb-1   text-white">{title}</div>
                <p class="text-gray-200 text-base ">{desc}</p>
              </div>
              <div class="">
                <div className="bg-transparent flex justify-start mt-2 mb-2 ml-3 cursor-pointer">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <TiLink size={29} className="text-white text-xl mr-5" />
                    <p className="text-sm font-light">Demo</p>
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithubAlt
                      size={29}
                      className="text-gray-200 text-xl mr-5"
                    />
                    <p className="text-sm font-light">Github</p>
                  </a>
                </div>
                <span class="inline-block  px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb">
                  {hashtag}
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
