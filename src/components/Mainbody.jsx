import React from "react";
import "./mainbody.css";
//import myimage from "../assets/image1.webp";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Mainbody = ({ image, title, name, id }) => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project");
  return (
    <div className={`main-container ${isProjectPage ? "active" : ""}`}>
      <div className="image-section">
        <Link to={`/project/${id}`}>
          <img src={image} alt="Project" />
        </Link>
      </div>

      <motion.div className="text-section">
        <h1>
          {title} <br />
          <span className="slash">/07</span>
        </h1>
        <p className="author">{name}</p>
      </motion.div>
    </div>
  );
};

export default Mainbody;
