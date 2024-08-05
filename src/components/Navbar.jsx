import React from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="navheading">Abdul Hanan</h2>{" "}
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;