import "./TimelineComponent.css";
import Card from "./Card";

export default function TimelineComponent(props) {
  
  const test = (
    <>
      {props.cards.map((card, index) => (
        <div className="timeline-content" key={index}>
        <div className="timeline-card" >
          <h2>{card.title}</h2>
          <h3 className="timeline-card-date">{card.date}</h3>
          <h3>{card.location}</h3>
          <h5>{card.desc}</h5>
        </div>
        <div className="timeline-card-line"> </div>
        <div className="timeline-card-icon-container">
          <div className="timeline-card-icon-content">
          {card.icon && <card.icon className='timeline-card-icon'/>}</div>
            </div>
        
      </div>
      ))}
    </>
  );

  const content = (
    <div className="timeline-container">
      <div className="timeline-card-container">
        <div className="timeline-line"> </div> 
        {test}
      </div>
    </div>
  );

  return <Card title="Timeline" content={content} />;
}
