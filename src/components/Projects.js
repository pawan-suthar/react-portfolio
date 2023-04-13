import React from "react";
import pblog from "../assets/portfolio/pblog.png";
// import installNode from "../assets/portfolio/installNode.jpg";
import fluterfresh from "../assets/portfolio/flutterfresh.png";
import jobmatchup from "../assets/portfolio/jobmatchup.png";

import gym from "../assets/portfolio/gym.png";

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
      src: gym,
      title: "Aarogyam",
      demo: "https://sutharpawan1537.pythonanywhere.com/",
      github: "https://github.com/pawan-suthar/aarogyam-gym-project",
      hashtag: "#python #bootstrap #Django",
      desc: `This is a Gym website Arogyam I made using a free bootstrap template with backend functionality by Django
      
      
    features login signup user authorization enrolling apply attendance see all info of your daily workout add trainers , add plans`,
    },
    {
      id: 4,
      src: fluterfresh,
      title: "flutterfresh",
      demo: "https://www.linkedin.com/posts/pawansuthar1537_flutterfresh-flutter-mobileappdevelopment-activity-7046165824553771008-tRCL?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/pawan-suthar/foodpp-flutter",
      hashtag: "#flutter #dart",
      desc: "Flutter its a grocery app built using Flutter. With FlutterFresh, you can easily add and delete fruits, vegetables, and other grocery items to your list.One of the key features of this app is the Google Authentication login, which I have seamlessly integrated using Firebase.  users can quickly and securely log in to the app using their Google account.",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 via-gra to-black text-white min-h-screen flex flex-col"
    >
      <div className="container flex-1 px-4 py-8 mx-auto">
        <div className="max-w-screen-lg mx-auto">
          <div className="pb-4 pt-12 md:pt-24">
            <p className="text-4xl font-bold pb-2">Projects</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {portfolios.map(
              ({ id, src, title, demo, github, hashtag, desc }) => (
                <div
                  key={id}
                  className="max-w-sm rounded overflow-hidden shadow-lg"
                >
                  <img className="w-full" src={src} alt="Mountain" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-mb mb-1 text-white">
                      {title}
                    </div>
                    <p className="text-gray-200 text-sm">{desc}</p>
                  </div>
                  <div className="">
                    <div className="bg-transparent flex justify-start mt-2 mb-2 ml-3 cursor-pointer">
                      <a href={demo} target="_blank" rel="noopener noreferrer">
                        <TiLink size={29} className="text-white text-xl mr-5" />
                        <p className="text-sm font-light">Demo</p>
                      </a>
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithubAlt
                          size={29}
                          className="text-gray-200 text-xl mr-5"
                        />
                        <p className="text-sm font-light">Github</p>
                      </a>
                    </div>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb">
                      {hashtag}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
