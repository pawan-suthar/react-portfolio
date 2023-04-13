import React from "react";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen md:h-screen"
    >
      <div className="container flex flex-row justify-center items-center">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center justify-items-center w-full">
          <div className="pb-4 pt-24 ">
            <p className="text-4xl font-bold  pb-2">Skills</p>
          </div>
          <div className="flex flex-wrap justify-evenly mt-28">
            <img
              className="my-2 mr-5 h-28 w-28 rounded-full max-w-xs "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
              alt="python "
            />
            <img
              className="my-2 mr-5 h-28 w-28 rounded-full max-w-xs "
              src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn"
              alt="Contact Person"
            />
            <img
              className="my-2 mr-5 h-28 w-28 rounded-full max-w-xs "
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
              alt="Contact Person"
            />
            <img
              className="my-2 mr-5 h-28 w-28 rounded-full max-w-xs "
              src="https://copyassignment.com/wp-content/uploads/2022/06/Django-logo-474x360-1.jpg"
              alt="django"
            />
            <img
              className="my-2 mr-5 h-28 w-28 rounded-full max-w-xs "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="react"
            />
            <img
              className="my-2 mr-5 h-28 w-28 rounded-full max-w-xs "
              src="https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif"
              alt="Mongodb"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
