import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600">// I am Finoana Randri a junior developer</p>

          <p className="py-2 text-gray-600">
            I am a fast learner, passionate about solving complex problems and
            and developing quality software. I also have an excellent ability to
            work in a team and communicate effectively effectively with
            stakeholders.
          </p>

          <p className="py-2 text-gray-600">
            My goal is to continue to gain knowledge and skills while working on
            challenging projects that allow me to grow as a Fullstack developer.
            I am confident that I will be an asset to any company looking for a
            talented and motivated Fullstack developer.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer"> Check out some of my latest projects.</p>

          <button className="w-[30%] p-4 text-gray-100 mt-4 mb-2 hover:scale-105 ease-in duration-300  ">CV</button>
          
        </div>
        <div className="w-full h-full  m-auto shadow-xl shadow-gray-400  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
           < Image className="rounded-xl" src="/../public/assets/IMG_1171.JPG"  alt="pdp" width='325' height='65' />
        </div>
      </div>
    </div>
  );
};

export default About;
