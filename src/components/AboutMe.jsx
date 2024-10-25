import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineTool,
  AiOutlineSchedule,
  AiOutlineTeam,
} from "react-icons/ai";

const AboutMe = () => {
  const skills = [
    {
      icon: AiOutlineTool,
      title: "Problem Solving",
      description:
        "Adept at finding innovative solutions to complex challenges.",
    },
    {
      icon: AiOutlineSchedule,
      title: "Time Management",
      description:
        "Expert in managing multiple priorities and deadlines efficiently.",
    },
    {
      icon: AiOutlineTeam,
      title: "Team Coordination",
      description:
        "Skilled in facilitating seamless communication within organizations.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-gray-700 rounded-lg shadow-lg w-full h-64 md:h-80 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Image Placeholder</span>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-6 text-gray-300">
              As a highly organized and efficient executive assistant with over
              5 years of experience, I've honed my skills in supporting C-level
              executives across various industries.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              My expertise lies in streamlining operations, managing complex
              schedules, and facilitating seamless communication within
              organizations. I pride myself on my ability to anticipate needs,
              solve problems proactively, and maintain confidentiality in
              high-pressure environments.
            </p>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-gray-700 p-6 rounded-lg shadow-md text-center"
            >
              <skill.icon className="text-4xl mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {skill.title}
              </h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
