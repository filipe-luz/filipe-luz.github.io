import "./Skills.css";
import Card from "./Card";
import ProgressBar from "./ProgressBar";
import reactLogo from '../assets/react-logo.svg';
import angularLogo from '../assets/angular-logo.svg';
import javaLogo from '../assets/java-logo.svg';
import tsLogo from '../assets/typescript-logo.svg';
import sqlLogo from '../assets/sql-database.svg';
import cssLogo from '../assets/css-logo.svg';
import htmlLogo from '../assets/html-logo.svg';

export default function Skills() {
  const content = (
    <div className="skills-container">
      <ProgressBar logo = {reactLogo} description = {'React'} level = {'Advanced'} percentage = {70}/>
      <ProgressBar logo = {angularLogo} description = {'Angular'} level = {'Advanced'} percentage = {65}/>
      <ProgressBar logo = {sqlLogo} description = {'SQL'} level = {'Intermediate'} percentage = {60}/>
      <ProgressBar logo = {javaLogo} description = {'Java'} level = {'Intermediate'} percentage = {50}/>
      <ProgressBar logo = {tsLogo} description = {'TypeScript'} level = {'Intermediate'} percentage = {50}/>
      <ProgressBar logo = {cssLogo} description = {'CSS'} level = {'Intermediate'} percentage = {50}/>
      <ProgressBar logo = {htmlLogo} description = {'HTML'} level = {'Intermediate'} percentage = {40}/>
    </div>
  );

  return <Card title={"Skills"} content={content} />;
}
