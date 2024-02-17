import "./Home.css";
import myImg from "../assets/CVImage_noBK.jpg";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h4>Hi,</h4>
        <h3>I'm Filipe Luz!</h3>
        <h1> Software Developer</h1>
        <div className="home-detail">
          <RxDoubleArrowRight className="right-animation" /> 
          <h4>Focused on Frontend Development </h4>
          <RxDoubleArrowLeft className="left-animation" />
        </div>
      </div>
      <div className="home-img-container">
        <div className="home-img-bk"></div>
        <img className="home-img" src={myImg} alt="me"></img>
      </div>
    </div>
  );
}
