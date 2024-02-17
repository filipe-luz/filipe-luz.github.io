import './FloatingButton.css'
import { Container, Button } from "react-floating-action-button";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa";

export default function FloatingButton(props) {
    
    return(
        <Container className="floating-button">
        <Button tooltip="Dark Mode" onClick={props.handleDarkModeTheme}>
        <FaMoon color="white"/>
        </Button>
        <Button tooltip="Light Mode" onClick={props.handleLightModeTheme}>
        <IoSunny color="yellow"/>
        </Button>
        <Button tooltip="Change color scheme">
          <FaPalette/>
        </Button>
      </Container>
    )
};
