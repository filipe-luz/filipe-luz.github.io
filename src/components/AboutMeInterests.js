import "./AboutMeInterests.css";

import { ImAirplane } from "react-icons/im";
import { FaGamepad } from "react-icons/fa";
import { BiSwim } from "react-icons/bi";
import { GiThreeFriends } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import AboutMeInterestsModal from "./AboutMeInterestsModal";

export default function AboutMeInterests() {
  const interests = [
    {
      title: "TRAVEL",
      icon: <ImAirplane />,
      description: <>I absolutely love to travel! There is something magical about discovering other countries' 
      culture and landscapes. I did 2 interrails across Europe! Visited countries: <br/><br/>
      <li>Austria (Vienna)</li> <li>Czechia (Prague)</li><li>France (Nice, Paris)</li> 
      <li>Germany (Berlin, Munich, Munster)</li> <li>Italy (Como, Milan, Venice)</li> <li>Monaco</li> 
      <li>Netherlands (Amsterdam, Leiden, Utrech, Zaandam)</li> <li>Poland (Kraków)</li></>
    },
    {
      title: "SWIM",
      icon: <BiSwim />,
      description: `As a former competitive swimmer I would swim around 50 kms per week.
      I decided to stop when I started to work because my priorities changed.
      That being said, I still enjoy to swim a little bit during the week!`
    },
    {
      title: "MUSIC",
      icon: <FaHeadphones />,
      description: `Rare are the days that I don't put the headphones on and listen to some music. 
      Whether it is to get motivaded or just to pass the time, music has become a part of my life! 
      My music taste is very wide; some of my favourite artists are: 
      Coldplay, Linkin Park, Red Hot Chili Peppers, Kygo and Two Door Cinema Club.`
    },
    {
      title: "GAMES",
      icon: <FaGamepad />,
      description: `When I have some free time I also like to play videogames. 
      Some of my favourite games are Age of Empires II and Rocket League. 
      In terms of board games I'm into Chess, Checkers and Monopoly.`
    },
    {
      title: "FRIENDS",
      icon: <GiThreeFriends />,
      description: `Like everyone else, I love spending time with friends! I'm rarely alone
      when I go to the gym, the pool, to play games, or just to hang out somewhere!`
    },
    {
      title: "REACT",
      icon: <FaReact />,
      description:  <>
      I decided to include React as part of my interests because it's something I enjoy learning. I learned 
      a little bit at CGI when I was asked to do some forms, even though I had no experience in frontend 
      development. I then decided to learn more and took a paid course about it. That's when my passion for 
      frontend started! <br/><br/>I built a lot of small apps during that course and decided to build this page 
      about myself using React and created most of the dynamic components you see on this page. It was a lot of fun!
    </>
    },
  ];

  const [selectedInterest, setSelectedInterest] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleInterestClick = (interest) => {
    setSelectedInterest(interest);
    setShowModal(true);
  };

  return (
    <div className="about-interests-content">
      {interests.map((interest, index) => (
        <div
          className="about-interests"
          key={index}
          onClick={() => handleInterestClick(interest)}
        >
          <div className="about-icons">{interest.icon}</div>
          <p>{interest.title}</p>
        </div>
      ))}

      <AboutMeInterestsModal 
        showModal={showModal}
        setShowModal={setShowModal}
        selectedInterest = {selectedInterest}
      />
    </div>
  );
}
