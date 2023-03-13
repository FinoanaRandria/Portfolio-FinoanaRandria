import React from "react";
import Image from "next/image";
import proj1 from "../public/assets/projects/proj1.png";
import Link from "next/link";
import ProjectsItems from "./ProjectsItems";
const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItems
            title="Weather Apps"
            backgroundImg={proj1}
            projectUrl="/weatherapps"
          />

          <ProjectsItems
            title="G-tech"
            backgroundImg={proj1}
            projectUrl="/weatherapps"
          />

          <ProjectsItems
            title="Weather Apps"
            backgroundImg={proj1}
            projectUrl="/weatherapps"
          />

          <ProjectsItems
            title="Weather Apps"
            backgroundImg={proj1}
            projectUrl="/weatherapps"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
