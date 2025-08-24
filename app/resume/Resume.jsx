"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiBootstrap,
  SiBulma,
  SiRedux,
  SiGit
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam laboriosam consequatur molestiae.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Amir Abdollahi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+98) 9225621256",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Amir.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Iranian",
    },
    {
      fieldName: "Email",
      fieldValue: "amirenzevadev@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Availabel",
    },
    {
      fieldName: "Languages",
      fieldValue: "Farsi, English, Turkish",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam laboriosam consequatur molestiae.",
  items: [
    {
      company: "Ofogh Iranian",
      position: "Trainee",
      duration: "Summer 2024",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam laboriosam consequatur molestiae.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development",
      duration: "2025",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2024",
    },
    {
      institution: "Online Course",
      degree: "Prigramming Course",
      duration: "2021 - 2022",
    },
    {
      institution: "School Courses",
      degree: "How dose webs work",
      duration: "2021 - 2023",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam laboriosam consequatur molestiae.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JS",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCss",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiBulma />,
      name: "bulma",
    },
    {
      icon: <SiRedux />,
      name: "ReduxToolkit",
    },
    {
      icon: <SiGit />,
      name: "git",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col justify-center w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <h2 className="text-4xl font-bold text-white">Why hire me ?</h2>
            <p className="text-white/60 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70dvh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{experience.title}</h2>
                <p className="text-white/60">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <div
                        className="flex flex-col gap-[10px] bg-[#27272c] py-6 px-10 rounded-xl"
                        key={index}
                      >
                        <p className="text-accent">{item.duration}</p>
                        <p className="text-white font-bold">{item.position}</p>
                        <p className="text-white/60">
                          <span className="text-accent"> . </span>{" "}
                          {item.company}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold  gap-2">{education.title}</h2>
                <p className="text-white/60">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <div
                        className="flex flex-col gap-[10px] bg-[#27272c] py-6 px-10 rounded-xl"
                        key={index}
                      >
                        <p className="text-accent">{item.duration}</p>
                        <p className="text-white font-bold">{item.degree}</p>
                        <p className="text-white/60">
                          <span className="text-accent"> . </span>{" "}
                          {item.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{skills.title}</h2>
                <p className="text-white/60">{skills.description}</p>
                <ScrollArea className="h-[400px]">
                  <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-[30px]">
                    {skills.skillList.map((item, index) => (
                      <div className="group">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className="flex items-center justify-center gap-[10px] bg-[#27272c] p-10 rounded-xl text-6xl group-hover:text-accent transition-all duration-300"
                                key={index}
                              >
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="">
                              {item.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold gap-2">{about.title}</h2>
                <p className="text-white/60">{about.description}</p>
                <ScrollArea className="h-[400px]">
                  <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-[40px]">
                    {about.info.map((item, index) => (
                      <div
                        className="flex flex-row gap-[10px] items-center justify-center xl:justify-start border-b border-white/20"
                        key={index}
                      >
                        <p className="text-white/60">{item.fieldName}</p>
                        <p>{item.fieldValue}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
