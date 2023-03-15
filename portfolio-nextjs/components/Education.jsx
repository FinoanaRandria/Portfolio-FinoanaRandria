import React from "react";
import {IoIosSchool} from 'react-icons/io'
import {FaLaptopCode,FaLaptop} from 'react-icons/fa'


const Education = () => {
  return (
    <div div id="education" className="w-full lg:h-screen  flex items-center">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Education
        </p>

        <h2 className="py-4">My Education </h2>

        <div className="container mx-auto px-4 mt-10" >
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-[#ecf0f3] w-full mb-8 shadow-xl shadow-gray-400 rounded-lg  hover:bg-white hover:scale-105 ease-in duration-300">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400 hover:scale-105 ease-in duration-300 ">
                    <IoIosSchool/>
                  </div>
                  <h6 className="text-xl font-semibold">Bachelor</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                  I graduated from the High School Seraphin Itaosy in 2021
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-[#ecf0f3] w-full mb-8 shadow-xl shadow-gray-400 rounded-lg hover:bg-white hover:scale-105 ease-in duration-300 ">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400  hover:scale-105 ease-in duration-300  ">
                    <FaLaptopCode />
                  </div>
                  <h6 className="text-xl font-semibold">L2</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Actually I am in L2 at the University Esti, filière IT integration and development
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-[#ecf0f3] w-full mb-8 shadow-xl shadow-gray-400 rounded-lg  hover:bg-white hover:scale-105 ease-in duration-300">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400  hover:scale-105 ease-in duration-300">
                    <FaLaptop />
                  </div>
                  <h6 className="text-xl font-semibold">L1</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                   First year at Esti University 2022 to get my computer engineering degree
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
