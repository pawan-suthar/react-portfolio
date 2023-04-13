import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div class="w-1/2 h-screen  mx-auto my-auto flex flex-col  justify-center items-center ">
        <div class="w-full shadow-2xl subpixel-antialiased rounded h-96 bg-black border-black mx-auto">
          <div
            class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
            id="headerTerminal"
          >
            <div
              class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
              id="closebtn"
            ></div>
            <div
              class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
              id="minbtn"
            ></div>
            <div
              class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
              id="maxbtn"
            ></div>
            <div class="mx-auto pr-16" id="terminaltitle">
              <p class="text-center text-sm">About Me</p>
            </div>
          </div>
          <div
            class="pl-1 pt-3  h-auto  text-green-200 font-mono text-xs bg-black"
            id="console"
          >
            <p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
            <p class="pb-1">Pawan$:cd About me</p>
            <p class="pb-1">
              A graduate of BCA 2021, I am pursuing a master's degree in
              computer science completing in 2023 have a good knowledge of
              Python programming<br></br>
              <br></br> Knowledge of Python,ReactJs ,OOPS, HTML, CSS, Mongodb,
              Git, Github, Django (Basic) and subjects like CN,software
              engineering ,SDLC In Python programming,<br></br>
              <br></br> I have certificates from Udemy, DataCamp, and Congnitive
              Classes Additionally, I have uploaded some projects in Python to
              my Github account - https://github.com/pawan-suthar <br></br>
              <br></br>
              Interested in full-time work or internships that match my skillset
            </p>
            <p class="pb-3"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
