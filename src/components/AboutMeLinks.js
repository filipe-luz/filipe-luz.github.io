import './AboutMeLinks.css'
import cvPath from "../assets/FilipeLuz_CV.pdf"
import { FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

export default function AboutMeLinks(params) {
    
    return(
        <div className="about-links">
          <a href="https://www.linkedin.com/in/filipe-luz-672542153/" target="_blank" rel="noopener noreferrer">
            <div className="about-links-icons">
              <FaLinkedin />
            </div>
            linkedin
          </a>
          <a href="https://www.instagram.com/filipeeluz98/" target="_blank" rel="noopener noreferrer">
            <div className="about-links-icons">
              <FaInstagram />
            </div>
            instagram
          </a>
          <a href="https://github.com/filipe-luz" target="_blank" rel="noopener noreferrer">
            <div className="about-links-icons">
              <FaGithub />
            </div>
            github
          </a>
          <a href="https://www.udemy.com/certificate/UC-5c436132-e37e-4ae6-a189-691881591a49/" target="_blank" rel="noopener noreferrer">
            <div className="about-links-icons">
              <FaReact />
            </div>
            react certification
          </a>
          <a href={cvPath} download="FilipeLuz_CV.pdf">
            <div className="about-links-icons">
              <FaDownload />
            </div>
            download cv
          </a>
        </div>
    )
};
