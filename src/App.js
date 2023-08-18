// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import "../src/styles/home.css";
import { Routes, Route } from "react-router-dom";
import Info from "./components/Info";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import ContactForm from "./components/ContactForm";
import linkedinIcon from "../src/images/linkedinIcon.png";

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="home-container"
      >
        <div className="nav-container">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Jackson Spindle
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Creative Developer
          </motion.h3>

          <Nav />
        </div>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jackson-spindle-13a932219/"
        >
          <img
            className="linkedinIcon"
            src={linkedinIcon}
            alt="linkedinIcon"
          ></img>
        </a>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Home />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
        </Routes>
      </motion.div>
    </div>
  );
}

export default App;
