import React from "react";
import Image from "next/image";
import imageEchat from "../../public/assets/projects/proj4.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import Link from "next/link";
const Echat = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={imageEchat}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">E-chat📨</h2>
          <h3>Node JS/Express JS/Socket.io/SCSS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p>
            <strong> Description:</strong>
            The weather app is a simple web application that allows the user to
            get the weather forecast for a specific city. The application uses
            the OpenWeather API to retrieve the weather data.
            <br />
            <strong>Features:</strong>
            The user can enter the city name to get the current and upcoming
            weather forecast for that city. The weather forecast includes the
            current temperature, time, wind speed and humidity. The application
            also displays an icon representing the current weather. The user can
            toggle between Celsius and Fahrenheit temperature units.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies </p>

            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express JS
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Socket.io
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SCSS
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

export default Echat;
