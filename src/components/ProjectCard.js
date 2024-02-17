import "./ProjectCard.css";
import { HiCursorClick } from "react-icons/hi";
import { useState } from "react";

export default function ProjectCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped((flipState) => !flipState);
  };

  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
      <div className="project-card-container">
        <div className="project-card-front" onClick={handleCardFlip}>
          <div className="project-card-img">
            <img src={props.img} alt="home" />
          </div>
          <div className="project-card-front-text">
            <h3>{props.title}</h3>
            <h4>{props.stack}</h4>
          </div>
          <div className="project-card-click">
            <HiCursorClick />
          </div>
        </div>
        <div className="project-card-back" onClick={handleCardFlip}>
          <h3>{props.desc}</h3>
        </div>
      </div>
    </div>
  );
}
