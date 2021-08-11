import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [list] = useState([
    "dreamer 💭",
    "basketball player 🏀",
    "creator",
    "coder 💻",
    "pasta lover 🍝",
    "minimalist 🔹",
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      index === list.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col justify-center items-center h-screen">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.25 },
          }}
        >
          <h1>
            <span className="text-4xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-teal-500">
              I am Mark Fang.
            </span>
          </h1>
        </motion.div>
        <span className="md:text-4xl text-gray-600 text-2xl">
          I am a <span className="font-bold font-mono">{list[index]}</span>
        </span>
        <Navbar about projects services />
      </div>
    </motion.div>
  );
};

export default Home;
