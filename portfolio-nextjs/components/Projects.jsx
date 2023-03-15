import React from "react";
import Image from "next/image";
import proj1 from "../public/assets/projects/proj1.png";
import proj2 from '../public/assets/projects/proj2.png'
import proj3 from '../public/assets/projects/proj3.png'
import proj4 from '../public/assets/projects/proj4.png'
import Link from "next/link";
import ProjectsItems from "./ProjectsItems";
import Gtech from "@/pages/Gtech";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItems
            title="Weather Apps"
            backgroundImg={proj1}
            projectUrl="/proprety"
            techno="React JS"
          />

          <ProjectsItems
            title="G-Tech Esti"
            backgroundImg={proj3}
            projectUrl="/Gtech"
            techno="Node JS/Express JS"
          />

          <ProjectsItems
            title="E-find"
            backgroundImg={proj2}
            projectUrl="/Efind"
            techno="React JS /Sanity"
          />

          <ProjectsItems
            title="Echat App "
            backgroundImg={proj4}
            projectUrl="/Echat"
            techno="Node JS/Socket io"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
