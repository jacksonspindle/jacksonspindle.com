import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navItemVariants = {
  rest: { opacity: 1 },
  hover: { opacity: 0.7, transition: { duration: 0.2 } },
};

const Nav = () => {
  const navItems = ["projects", "info", "contact"];

  return (
    <div>
      <nav>
        <ul>
          {navItems.map((item, index) => {
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                animate="rest"
                whileHover="hover"
                variants={navItemVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Link to={item}> {item}</Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
