import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center min-h-[900px]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHINGS TOGETHER
          </p>

          <h1 className="py-4 text-gray-700">
            <span className="text-[#5651e5]">
              <TypeAnimation
                sequence={["", 2000, "Hey I'am Finoana"]}
                wrapper="div"
                cursor={true}
              />
            </span>{" "}
          </h1>

          <h1 className="py-4 text-gray-700">A Mern-Stack Web Developer </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a Junior MERN-stack Developer with a passion for creating
            innovative and effective solutions to meet user needs. I am
            currently studying for my degree in Computer Science at Esti and am
            looking forward to applying my skills to create great user
            experiences and add value to the projects I work on.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://www.linkedin.com/in/randri-finoana-ba771b24a/">
                <FaLinkedin />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://github.com/FinoanaRandria">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://mail.google.com/mail/u/0/?tab=km#inbox">
                <HiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="">
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
