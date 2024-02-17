import "./Separator.css";

export default function Separator(props) {


  return (
    <div className="separator" onClick={props.onHideContent}>
      <div className="separator-line"></div>
      <div className="separator-title">{props.title}</div>
      <div className="separator-line"></div>
    </div>
  );
}
