import "./Card.css";
import Separator from './Separator';

export default function Card(props) {


  return (
    <div className="card-container">
      <Separator title={props.title} />
      <div className='card-content'>
        {props.content}
      </div>
    </div>
  );
}
