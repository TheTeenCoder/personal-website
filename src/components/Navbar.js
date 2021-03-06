import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const { home, about, projects, services } = props;

  return (
    <div>
      <div className="mt-5">
        <ol className="flex flex-row underline space-x-5 justify-center">
          {home && (
            <motion.li
              whileHover={{
                scale: 1.2,
                rotate: -15,
                boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.25 },
              }}
            >
              <Link to="/">Home.</Link>
            </motion.li>
          )}
          {about && (
            <motion.li
              whileHover={{
                scale: 1.2,
                rotate: -15,
                boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.25 },
              }}
            >
              <Link to="/about">About.</Link>
            </motion.li>
          )}
          {projects && (
            <motion.li
              whileHover={{
                scale: 1.2,
                rotate: -15,
                boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.25 },
              }}
            >
              <Link to="/projects">Projects.</Link>
            </motion.li>
          )}
          {services && (
            <motion.li
              whileHover={{
                scale: 1.2,
                rotate: -15,
                boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.25 },
              }}
            >
              <Link to="/services">Services.</Link>
            </motion.li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
