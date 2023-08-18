import React from "react";
import { motion } from "framer-motion";
import cvIcon from "../images/cvIcon.png";
import linkedinIcon from "../images/linkedinIcon.png";
import mailIcon from "../images/mailIcon.png";

const Info = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="info-container"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ staggerChildren: 0.4 }} // This will stagger the direct children of .info-container
    >
      <motion.p variants={fadeInVariants}>Info</motion.p>
      <motion.div
        className="info-content"
        variants={fadeInVariants}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.p variants={fadeInVariants}>
          From past experience in fashion, film, graphic/3D design, to web
          development, I am passionate about creating innovative digital
          experiences that fuse art with technology.
        </motion.p>

        <motion.div className="contact-container">
          <motion.div className="cv-container">
            <h3>CV</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://sprinkle-town-d52.notion.site/Resume-27913e27a3544d868692469ec84ff2f8"
            >
              <motion.img className="cvIcon" src={cvIcon}></motion.img>
            </a>
          </motion.div>
          <motion.div className="mail-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://sprinkle-town-d52.notion.site/Resume-27913e27a3544d868692469ec84ff2f8"
            >
              <motion.img
                style={{ width: "30px" }}
                className="cvIcon"
                src={mailIcon}
              ></motion.img>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://sprinkle-town-d52.notion.site/Resume-27913e27a3544d868692469ec84ff2f8"
            >
              <motion.img
                className="linkedInIcon2"
                src={linkedinIcon}
              ></motion.img>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="info"
          variants={fadeInVariants}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h3 variants={fadeInVariants}>
            Education / Experience
          </motion.h3>
          <motion.ul className="info-ul" variants={fadeInVariants}>
            <motion.p variants={fadeInVariants}>
              Full Stack Academy 6-month Bootcamp (2022)
            </motion.p>
            <motion.p variants={fadeInVariants}>
              The New School - Bachelors of Science - Liberal Arts. (2019-2022)
            </motion.p>
            <motion.p variants={fadeInVariants}>
              University of Michigan (2017-2019)
            </motion.p>
            <motion.p variants={fadeInVariants}>
              Northfield Mount Hermon Highschool (2013-2017)
            </motion.p>
          </motion.ul>
        </motion.div>

        <motion.div
          className="info"
          variants={fadeInVariants}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h3 variants={fadeInVariants}>Skills</motion.h3>
          <motion.ul className="info-ul" variants={fadeInVariants}>
            <motion.p variants={fadeInVariants}>
              Web Development: HTML, CSS, Javascript, React.js, Node.js,
              Three.js, Framer Motion
            </motion.p>
            <motion.p variants={fadeInVariants}>
              3D Modeling: Blender, Unity
            </motion.p>
            <motion.p variants={fadeInVariants}>
              Media Tools: Photoshop, Premiere, After Effects
            </motion.p>
            <motion.p variants={fadeInVariants}>
              Music Production: FL Studios
            </motion.p>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Info;
