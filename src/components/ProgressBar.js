import { useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar(props) {

  const [showLevel, setShowLevel] = useState(false);
  const percentage = props.percentage;

  return (
    <div className="progress-bar-container"
    onMouseEnter={() => setShowLevel(true)}
    onMouseLeave={() => setShowLevel(false)}
    >
      <img  className="progress-bar-logo" src={props.logo} alt=" "/>

      <div className="progress-bar-content">
        <div className="progress-bar-text">
          <div className="progress-bar-desc">{props.description}</div>
          <div className={`progress-bar-level ${showLevel ? "show" : ""}`}>{props.level}</div>
        </div>

        <div className="progress-bar">
          <div className="progress-bar-percentage" style={{left: `${percentage < 5 ? 0 : percentage > 95 ? 100 : percentage}%` ,
              transform: `translateX(${percentage < 5 ? 0 : percentage > 95 ? -100 : -50}%)`}}>{percentage}%</div>
          <div className="progress-bar-line" style={{ width: `${percentage}%` }}>
        </div>
        </div>
      </div>
    </div>
  );
}
