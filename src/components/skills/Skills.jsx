import React from 'react';
import { motion } from 'framer-motion';
import Skill from './useSkill';

const Skills = () => {
    const skills = [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'React JS', percentage: 90 },
        { name: 'Bootstrap', percentage: 90 },
        { name: 'Tailwind', percentage: 90 },
        { name: 'Firebase', percentage: 80 },
        { name: 'MongoDB', percentage: 80 },
        { name: 'Node.js', percentage: 50 },
        { name: 'Express.js', percentage: 80 },
        { name: 'React-router', percentage: 80 },
        { name: 'JWT', percentage: 80 },
        { name: 'React Hook Form', percentage: 80 },
        // Add more skills and percentages here
      ];
    return (
        <div id='Skills' className="w-full py-10 border-b-[1px] border-b-black">
      {/* Rest of the code */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-5xl text-white text-center font-bold mb-8">MY <span className='text-red-500'>SKIILS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <Skill key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </section>
      {/* Rest of the code */}
    </div>
    );
};

export default Skills;