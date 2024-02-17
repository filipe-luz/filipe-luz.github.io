import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./App.css";
import Skills from "./components/Skills";
import { Scrollbars } from "rc-scrollbars";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ThemeContext from "./context/ThemeContext";
import FloatingButton from "./components/FloatingButton";

const myOwnStyles = { backgroundColor: "var(--text-color)", borderRadius: "4px" };

function App() {

  const {theme, handleLightModeTheme, handleDarkModeTheme } = useContext(ThemeContext);
  const { backgroundColor3, backgroundColor2, backgroundColor, textColor, mainColor } = theme;

  return (
    <div style={{ '--background-color': backgroundColor, '--background-color-2': backgroundColor2, '--background-color-3': backgroundColor3,'--text-color': textColor,'--main-color': mainColor}}>
      <NavBar light={handleLightModeTheme} dark={handleDarkModeTheme}/>
      <div className="App">
        <Scrollbars
          style={{ width: "100vw", height: "100%"}}
          renderThumbVertical={({ style, ...props }) => (
            <div {...props} style={{ ...style, ...myOwnStyles }} />
          )}
        >
          <div className="Container">
            <div id="home"><Home /></div>
            <div id="about-me" ><AboutMe /></div>
            <div id="skills" ><Skills/></div>
            <div id="timeline" ><Timeline /></div>
            <div id="projects" ><Projects /></div>
          </div>
        </Scrollbars>
        <FloatingButton handleLightModeTheme={handleLightModeTheme} handleDarkModeTheme={handleDarkModeTheme}/>
      </div>
    </div>
  );
}

export default App;
