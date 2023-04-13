import React from "react";
import Heroimg from "../assets/pose_43.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaInstagram, FaGithubAlt } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row ">
        <div className="flex flex-col justify-center h-full mt-32">
          <h2 className="text-4xl sm:text-7xl font-bold text-white capitalize">
            i'm a fullstack developer
          </h2>
          <p className="py-4 text-gray-500 max-w-md capitalize">
            I'm a 2021 BCA graduate currently pursuing a master's degree in
            computer science. My skills include Python programming,Django,
            ReactJS, OOPS, HTML, CSS, Mongodb, Git, Github,
          </p>
          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-cyan-500 to-blue-500 cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1fAevG4bTt3f3BHCA3GhPMkZG2ZZxX5l7/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <span className="group-hover:rotate-90 duration-300 ">
                <MdKeyboardArrowRight className="ml-1" />
              </span>
            </button>
          </div>
          <div className="bg-transparent flex justify-start mt-5 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/pawansuthar1537/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={30} className="text-blue-700 text-xl mr-5" />
            </a>
            <a
              href="https://github.com/pawan-suthar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubAlt size={30} className="text-gray-200 text-xl mr-5" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} className="text-pink-600 text-xl mr-5" />
            </a>
          </div>
        </div>

        <div>
          <img
            src={Heroimg}
            alt="my pic"
            className="rounded-full mx-auto object-cover h-120  ml-16  md:w-full h-4/5 w-4/5  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
