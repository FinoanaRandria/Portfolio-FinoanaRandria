import React from "react";
import Image from "next/image";
import proj1 from "../public/assets/projects/proj1.png";
import proj2 from '../public/assets/projects/proj2.png'
import proj3 from '../public/assets/projects/proj3.png'
import proj4 from '../public/assets/projects/proj4.png'
import Link from "next/link";
import ProjectsItems from "./ProjectsItems";
import Gtech from "@/pages/Gtech";
import { motion } from 'framer-motion'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Projects = () => {
  return (
    <div id="projects" className="w-full  min-h-[900px]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <motion.p whileInView={{ opacity: [0, 1], x: [-30, 0] }} transition={{ duration: 0.4, }} className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </motion.p>
        <motion.h2 whileInView={{ opacity: [0, 1], x: [-50, 0] }} transition={{ duration: 0.4, }} className="py-4">What I've Built </motion.h2>
        <motion.div whileInView={{ opacity: [0, 1], x: [-100, 0] }} transition={{ duration: 0.4, }} className="flex justify-center align- items-center">
            {/* grid md:grid-cols-2 gap-8 */}
          <AwesomeSlider>
            


            <div>



              <ProjectsItems
                title="Weather Apps"
                backgroundImg={proj1}
                projectUrl="/proprety"
                techno="React JS"
              />
            </div>


            <div>


              <ProjectsItems
                title="G-Tech Esti"
                backgroundImg={proj3}
                projectUrl="/Gtech"
                techno="Node JS/Express JS"
              />
            </div>

            <div>


              <ProjectsItems
                title="E-find"
                backgroundImg={proj2}
                projectUrl="/Efind"
                techno="React JS /Sanity"
              />
            </div>




            <div>
              <ProjectsItems
                title="Echat App "
                backgroundImg={proj4}
                projectUrl="/Echat"
                techno="Node JS/Socket io"
              />

            </div>

          </AwesomeSlider>




        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
