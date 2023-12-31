import React from "react";
import Projects from "./Projects";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Projects />
      </div>
    </motion.div>
  );
};

export default Home;
