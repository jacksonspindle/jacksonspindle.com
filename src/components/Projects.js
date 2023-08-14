import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import genieXThumbnail from "../images/genieXThumbnail.png";
import energyAdventurerThumbnail from "../images/energyAdventurerThumbnail.png";
import linkIcon from "../images/linkIcon.png";

const projectVariants = {
  rest: { opacity: 1 },
  hover: { opacity: 0.7, transition: { duration: 0.2 } },
};

const dropdownVariants = {
  hidden: { opacity: 0, maxHeight: 0, overflow: "hidden" },
  visible: {
    opacity: 1,
    maxHeight: "400px",
    overflow: "auto",
    transition: { duration: 0.3 },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      year: "2023",
      type: "Personal Business",
      link: "https://geniex.io/",
      title: "GenieX Landing Page",
      description: (
        <div className="description-container">
          <div>
            <p>
              This is the landing page for an AI fashion business I am building.
              The app will allow users to design graphics on 3D garments using
              ChatGPT. The garments can then be ordered as real-life products
              shipped to their door.
            </p>
            <button className="learn-more-button">
              <a target="_blank" href="https://geniex.io/">
                Learn More{" "}
              </a>
            </button>
          </div>
          <img
            className="thumbnail-image"
            alt="genieX thumnail"
            src={genieXThumbnail}
          ></img>
        </div>
      ),
    },
    {
      year: "2023",
      type: "Commission",
      link: "https://energyadventurer.com/",
      title: "Energy Adventure(r)",
      description: (
        <div className="description-container">
          <div>
            <p>
              Energy Adventurer is an interactive map-based blog covering
              various topics surrounding the climate changes faced by India.
              Users are able to explore the map and click on pins to read
              different blog posts pertaining to that location.
            </p>
            <button className="learn-more-button">
              <a target="_blank" href="https://energyadventurer.com/">
                Learn More{" "}
              </a>
            </button>
          </div>
          <img
            className="thumbnail-image"
            alt="energyAdventurer thumnail"
            src={energyAdventurerThumbnail}
          ></img>
        </div>
      ),
    },
    {
      year: "2023",
      type: "Commission",
      link: "https://hedgey.finance/",
      title: "Hedgey Finance",
      description: (
        <div className="description-container">
          <div>
            <p>
              Energy Adventurer is an interactive map-based blog covering
              various topics surrounding the climate changes faced by India.
              Users are able to explore the map and click on pins to read
              different blog posts pertaining to that location.
            </p>
            <button className="learn-more-button">
              <a target="_blank" href="https://hedgey.finance/">
                Learn More{" "}
              </a>
            </button>
          </div>
          <img
            className="thumbnail-image"
            alt="energyAdventurer thumnail"
            src={energyAdventurerThumbnail}
          ></img>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>Projects</p>
      {projects.map((project, index) => (
        <div key={index} className="project-wrapper">
          <motion.div
            className="project-container"
            initial="rest"
            animate="rest"
            whileHover="hover"
            variants={projectVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() =>
              setSelectedProject(selectedProject === index ? null : index)
            }
          >
            <p>
              {project.year} / {project.type}
            </p>
            <h2>
              {/* <a target="blank_" href={project.link}> */}
              {project.title}
              {/* </a> */}
            </h2>
            <a target="blank_" href={project.link}>
              <img
                src={linkIcon}
                className="linkIcon"
                alt="link Icon"
                width={40}
              ></img>
            </a>
          </motion.div>
          <AnimatePresence>
            {selectedProject === index && (
              <motion.div
                className="dropdown-container"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {project.description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
