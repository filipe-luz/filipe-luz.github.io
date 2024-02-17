import './Timeline.css'
import TimelineComponent from './TimelineComponent'
import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { BiSwim } from "react-icons/bi";

export default function Timeline() {

    const cards = [
        {
            title: 'Fullstack Software Developer',
            date: 'May 2023 - Present',
            location: 'CGI',
            icon: MdWork,
            desc: 'Participation in various projects using tools like Angular, React, C#, SQL, etc.'
        }, {
            title: 'University Studies',
            date: 'Sep 2016 - Sep 2021',
            location: 'ISEL',
            icon: IoSchool,
            desc: 'Bachelor\'s Degree in Electronics, Telecommunications and Computer Engineering'
        }, {
            title: 'Competitive Swimmer',
            date: 'Sep 2011 - Jun 2022',
            location: 'Gesloures',
            icon: BiSwim,
            desc: 'Competitive swimmer for Gesloures'
        }
    ]


   return (
    <TimelineComponent cards = {cards}/>
   )
};
