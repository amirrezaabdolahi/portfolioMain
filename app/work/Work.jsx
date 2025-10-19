"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Image from "next/image";
import WorkSliderBtn from "@/components/ui/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Basic portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae aperiam nostrum.",
    stack: [{ name: "html5" }, { name: "CSS" }, { name: "javascript" }],
    image: "/assets/work/basicportfolio.jpg",
    live: "https://amirenzeva.github.io/darkweb/",
    github: "https://github.com/amirenzeva/darkweb",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Chat app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae aperiam nostrum.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "express" }],
    image: "/assets/work/chatapp.jpg",
    live: "https://chat-app-zhvy.onrender.com/",
    github: "https://github.com/amirrezaabdolahi/chat-app",
  },
  {
    num: "03",
    category: "frontend",
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae aperiam nostrum.",
    stack: [{ name: "React" }],
    image: "/assets/work/portfolio.jpg",
    live: "https://amirrezaabdolahi.github.io/portfolioS/",
    github: "https://github.com/amirrezaabdolahi/portfolioS",
  },
  {
    num: "04",
    category: "frontend",
    title: "clinico",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae aperiam nostrum.",
    stack: [{ name: "React" }],
    image: "/assets/work/clinico.jpg",
    live: "https://amirenzeva.github.io/clinico-1/",
    github: "https://github.com/AmirEnzeva/clinico-1",
  },
  {
    num: "05",
    category: "frontend",
    title: "samin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae aperiam nostrum.",
    stack: [{ name: "Nextjs" }, { name: "MUI" }],
    image: "/assets/work/samin.jpg",
    live: "https://samin-gypsum.vercel.app/",
    github: "https://github.com/amirrezaabdolahi/samin-gypsum",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handelSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80dvh] flex flex-col justify-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between group">
            <div className="flex flex-col gap-[30px] h-[50%] mb-5">
              {/* project num  */}
              <div className="text-8xl leading-none font-extrabold text-outline text-transparent">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold text-white leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* description */}
              <p className="text-white/60">{project.description}</p>
              {/* stacks */}
              <ul className="text-accent capitalize flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl">
                    {item.name}
                    {/* remove last comma */}
                    {index !== project.stack.length - 1 && " ,"}{" "}
                  </li>
                ))}
              </ul>
              {/* divider */}
              <div className="w-full border-b border-white/20"></div>
              {/* links */}
              <div className="flex gap-[30px]">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] bg-[#27272c] text-3xl flex items-center justify-center rounded-full">
                        <BsArrowUpRight className="group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] bg-[#27272c] text-3xl flex items-center justify-center rounded-full">
                        <BsGithub className="group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">Project github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              onSlideChange={handelSlideChange}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide className="w-full" key={index}>
                  <div className="h-[460px] group flex justify-center items-center relative bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover select-none"
                        fill
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtn
                containerStyle="flex absolute text-xl right-0 gap-2 bottom-[calc(50%_-_22px)] xl:bottom-0 text-primary z-10 justify-between xl:justify-end w-full px-2 xl:px-0 "
                buttonStyle="bg-accent hover:bg-accent-hover p-2 rounded "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
