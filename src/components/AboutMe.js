import Card from "./Card";
import "./AboutMe.css";
import AboutMePersonal from "./AboutMePersonal";
import AboutMeInterests from "./AboutMeInterests";
import AboutMeLinks from "./AboutMeLinks";

export default function AboutMe() {
  
  const content = (
    <div className="about-container">
      <div className="about-container-card">
        <h2>Personal Info</h2>
        <AboutMePersonal/>
      </div>

      <div className="about-container-card">
        <h2>Interests</h2>
        <AboutMeInterests/>
      </div>

      <div className="about-container-card">
        <h2>Relevant Links</h2>
        <AboutMeLinks/>
      </div>
    </div>
  );

  return <Card title="About me" content={content} />;
}
