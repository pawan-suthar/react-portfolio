import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const navlinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },

    {
      id: 5,
      link: "contact me",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-2xl font-spe ml-2 cursor-pointer capitalize">
          Pawan suthar
        </h1>
      </div>

      {/* //^ navlinks */}
      <ul className="hidden md:flex">
        {navlinks.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer hover:scale-110 text-gray-500 font-medium duration-200 capitalize "
          >
            {link}
          </li>
        ))}
      </ul>
      {/* //^ navlinks */}

      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500  text-white  ">
          {navlinks.map(({ id, link }) => (
            <li
              key={id}
              className=" cursor-pointer capitalize  text-lg   rounded-lg mt-6 py-4 px-4"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
