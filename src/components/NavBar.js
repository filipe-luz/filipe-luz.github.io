import "./NavBar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { Button, ButtonGroup } from "react-bootstrap";

export default function NavBar(props) {

  const dropdownItemStyle = {color:'white', borderBottom: '1px solid white', fontSize: 'larger'};
  const buttonItemStyle = {display:'block', border: '1px solid var(--main-color)', backgroundColor: 'transparent', width:'4rem'};
  const dropdownToggleStyle = {display: 'flex', alignItems:'center', justifyContent:'center', backgroundColor: 'var(--main-color)', width:'3rem', fontSize: 'large', color: 'black', border:'1px solid var(--main-color)'};

  function scrollToSection(id, event) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="navbar-container">
      <div className="navbar-name">
        <a href="#home" onClick={(e) => scrollToSection("home", e)}>Filipe</a>
      </div>
      <div className="navbar-topics">
        <a href="#about-me" onClick={(e) => scrollToSection("about-me", e)}>About me</a>
        <a href="#skills" onClick={(e) => scrollToSection("skills", e)}>Skills</a>
        <a href="#timeline" onClick={(e) => scrollToSection("timeline", e)}>Timeline</a>
        <a href="#projects" onClick={(e) => scrollToSection("projects", e)}>Projects</a>
      </div>

      <div className='button-group'>
      <ButtonGroup >
        <Button onClick={props.dark} style={buttonItemStyle}><FaMoon color="white"/></Button>
        <Button onClick={props.light} style={buttonItemStyle}><IoSunny color="yellow"/></Button>
        <Dropdown as={ButtonGroup} >
          <Dropdown.Toggle style={dropdownToggleStyle}/>
          <Dropdown.Menu style={{backgroundColor: '#101010', color:'white'}} align='end'>
            <Dropdown.Item href="#about-me" onClick={(e) => scrollToSection("about-me", e)} style={dropdownItemStyle}>about me</Dropdown.Item>
            <Dropdown.Item href="#skills" onClick={(e) => scrollToSection("skills", e)} style={dropdownItemStyle}>skills</Dropdown.Item>
            <Dropdown.Item href="#timeline" onClick={(e) => scrollToSection("timeline", e)} style={dropdownItemStyle}>timeline</Dropdown.Item>
            <Dropdown.Item href="#projects" onClick={(e) => scrollToSection("projects", e)} style={dropdownItemStyle}>projects</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </ButtonGroup>
    </div>
  

    </div>
  );
}
