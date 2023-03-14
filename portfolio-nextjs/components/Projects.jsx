import React from "react";
import Image from "next/image";
import proj1 from "../public/assets/projects/proj1.png";
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
          />

          <ProjectsItems
            title="G-Tech Esti"
            backgroundImg={Gtech}
            projectUrl="/Gtech"
          />

          <ProjectsItems
            title="Weather Apps"
            backgroundImg={proj1}
            projectUrl="/proprety"
          />

          <ProjectsItems
            title="Weather Apps"
            backgroundImg={proj1}
            projectUrl="/proprety"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
