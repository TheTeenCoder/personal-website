import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import Section from "../components/Section";
import { PROJECTS_INTRO, PROJECT_1, PROJECT_2 } from "../content/content";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Projects = () => {

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col justify-center items-center h-screen p-5">
          <Navbar about home />
          <motion.div
            whileHover={{
              rotate: 5,
              transition: { duration: 0.25 },
            }}
            className="mt-5"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl lg:text-9xl">
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-teal-500">
                Projects.
              </span>
            </h1>
          </motion.div>
          <div className="flex flex-col">
            <Section title="Projects are Everything!">{PROJECTS_INTRO}</Section>
            <div className="flex flex-col space-y-2 max-w-xl">
              <Card link="https://check-in-prj2.vercel.app/" title="SLMCS Check-in System">{PROJECT_1}</Card>
              <Card link="/" title="Personal Website">{PROJECT_2}</Card>
              <Card title="PAAS">{PROJECT_2}</Card>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
