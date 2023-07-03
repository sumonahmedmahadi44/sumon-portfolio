import React from 'react'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
      <h2 className="text-5xl text-white text-center font-bold mb-8">MY <span className='text-red-500'>PROJECTS</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SAM PHOTOGRAPHY"
          des=" A Photography camp school website where display different type of photography skills and classes.In out camp their has many famous instructor and they show their classes about some of photography skill.Any of student can look all over the classes and their instructor also and they can enroll their favorite class by stripe payment system "
          src={projectOne}
        />
        <ProjectsCard
          title="UNIQUE CAR TOYS"
          des=" A Car toys website where many of seller can add their car to show all of their cars for all viewers. Our website provides an intuitive and user-friendly navigation system, allowing visitors to easily explore different categories, filter options, and find their desired car toys with convenience. Each car toy listing on our website includes comprehensive product details, high-quality images . "
          src={projectTwo}
        />
        <ProjectsCard
          title="INDIAN CHEF PROJECTS"
          des=" A Chef project where looking for many of chef are landing in a details page . Our website provides different kind of chef from indian cuisine . Where any of user can explore them. Each  of chef has different recipe and they show the details for their all of recipes So anyone can explore their all recipes and they choose their favorite recipe after registration this website ."
          src={projectThree}
        />
        
      </div>
    </section>
  );
}

export default Projects