import React from "react";
import Image from "next/image";
import Link from "next/link";
import pdp1 from '../assets/imagepdp.jpg'
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen flex items-center min-h-[900px] py-16"
    >
      <div className="max-w-[1240px] px-2 mx-auto md:grid grid-cols-3 gap-8">
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          className="col-span-2 "
        >
          <motion.p
            whileInView={{ opacity: [0, 1], x: [-30, 0] }}
            transition={{ duration: 0.4 }}
            className="uppercase text-xl tracking-widest text-[#5651e5]"
          >
            About
          </motion.p>
          <motion.h2
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.4 }}
            className="py-4"
          >
            Who I Am
          </motion.h2>

          <motion.p
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.4 }}
            className="py-2 text-gray-600"
          >
            // I am Finoana Randri a junior developer
          </motion.p>

          <motion.p
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.4 }}
            className="py-2 text-gray-600"
          >
            I am a fast learner, passionate about solving complex problems and
            and developing quality software. I also have an excellent ability to
            work in a team and communicate effectively effectively with
            stakeholders.
          </motion.p>

          <motion.p
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 0.4 }}
            className="py-2 text-gray-600"
          >
            My goal is to continue to gain knowledge and skills while working on
            challenging projects that allow me to grow as a MERN-stack developer.
            I am confident that I will be an asset to any company looking for a
            talented and motivated MERN-stack developer.
          </motion.p>

          <Link href="/#projects">
            <motion.p
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 0.4 }}
              className="py-2 text-gray-600 underline cursor-pointer mb-5"
            >
              {" "}
              Check out some of my latest projects.
            </motion.p>
          </Link>

          <motion.div whileInView={{ opacity: [0, 1], x: [-50, 0] }}
              transition={{ duration: 0.4 }}  className="mb-7">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1EwtuiiJC-7p3M6Nahcu8J4ljTs84qKyQ/view?usp=sharing"
              download="cv.pdf"
              className=" shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] px-20 p-3 text-gray-100 transform hover:scale-125 "
            >
              CV
            </a>
          </motion.div>
        </motion.div>
        <div  className="w-full h-full  m-auto shadow-xl shadow-gray-400  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={pdp1}
            alt="pdp"
            width="325"
            height="65"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
