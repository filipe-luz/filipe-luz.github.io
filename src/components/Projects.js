import Card from "./Card";
import ProjectCard from "./ProjectCard";
import './Projects.css'

import timeline from "../assets/TimelineComponent.png"
import progressBar from "../assets/ProgressBarComponent.png"
import wordCounter from "../assets/wordCounter.png"

export default function Projects(params) {

    const content = <div className="project-cards-container">
        <ProjectCard title='Timeline Custom Component' stack='React, JS, HTML, CSS' img={timeline} desc='A custom dynamic component created using React. It receives a title, location, date, description and icon. Adjusts dynamically to the available space in a right/left sequence.'/>
        <ProjectCard title='Progress Bar Custom Component' stack='React, JS, HTML, CSS' img={progressBar} desc='A custom dynamic component created using React. It receives a SVG logo, description, percentage and a second description which is displayed when the mouse hovers the progress bar.'/>
        <ProjectCard title='Word Counter' stack='React, JS, HTML, CSS' img={wordCounter} desc='A simple application that counts chars, words, sentences and paragraphs. It also displays the longest word and estimates reading time.'/>
    </div>

    return (
        <Card title='Projects' content = {content}/>
    )
};
