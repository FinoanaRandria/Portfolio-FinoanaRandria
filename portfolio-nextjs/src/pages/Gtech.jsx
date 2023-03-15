import React from "react";
import Image from "next/image";
import imageG from "../../public/assets/projects/proj3.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import Link from "next/link";
const Gtech = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={imageG}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Gthech 🏫</h2>
          <h3>React Js/Node JS/SQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p>
            <strong> Description:</strong>
            G-Tech is an innovative platform that aims to digitize and simplify
            university administrative tasks, including room management, faculty
            salaries, schedules and invoices. This platform offers a practical
            and efficient solution for universities and higher education
            institutions that wish to modernize their administrative management.
            <br />
            <strong>Features:</strong>
            With G-Tech, universities can manage their rooms intuitively and in
            real time. The platform allows you to view the availability of each
            room and easily reserve time slots according to your needs.<br/>
            b
            Likewise, the management of professors' salaries is simplified
            thanks to an automated system that calculates salaries based on
            hours worked and hourly rates. When it comes to scheduling, G-Tech
            makes it easy to create online schedules and share them with
            students and teachers. The platform also offers features to manage
            absences and substitutions in real time, making it easier to manage
            classes. <br/>
            Finally, G-Tech facilitates billing by providing a solution
            for generating and sending electronic invoices, as well as making
            online payments. This feature automates payment management and
            reduces the time spent on invoicing.
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
                <RiRadioButtonFill className="pr-1" /> Node JS
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link href="/#projects">
            <div className="rounded-full flex items-center justify-center shadow-lg shadow-gray-400 p-3 w-10 h-10 cursor-pointer">
              <TbArrowBackUp className="" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gtech;
