import React from "react";
import Image from "next/image";
import imageEfind from "../../public/assets/projects/proj2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import Link from "next/link";
const Efind = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={imageEfind}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">E-find🔍</h2>
          <h3>React Js/Tailwind CSS/Sanity</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p>
            <strong> Description:</strong>
            E-Find is an innovative platform designed to help companies find students looking for a work-study program. This platform connects companies and students by offering a simple, fast and efficient solution for the recruitment needs of each party.
            <br />
            <strong>Features:</strong>
            Thanks to E-Find, companies can post work-study offers on the platform and consult the profiles of students looking for a work-study position. Companies can filter candidates according to their academic profile, professional experience, skills and interests to find the most suitable candidates for their needs
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies </p>

            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Sanity
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              
            </div>
          </div>
        </div>
        <div>
          <Link  href="/#projects">
            <div className="rounded-full flex items-center justify-center shadow-lg shadow-gray-400 p-3 w-10 h-10 cursor-pointer">
              <TbArrowBackUp className="" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Efind;
