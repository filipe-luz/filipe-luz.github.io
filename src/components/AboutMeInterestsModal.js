import "./AboutMeInterestsModal.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function AboutMeInterestsModal(props) {
  
  const { theme } = useContext(ThemeContext);
  const { backgroundColor3, backgroundColor2, backgroundColor, textColor, mainColor } = theme;

  return (
    <Modal
      show={props.showModal}
      onHide={() => props.setShowModal(false)}
      size="lg"
      centered
      className="custom-modal"
      style={{ '--background-color': backgroundColor, '--background-color-2': backgroundColor2, '--background-color-3': backgroundColor3,'--text-color':  textColor,'--main-color':  mainColor}}
    >
      <Modal.Header className="custom-header">
        <Modal.Title className="custom-header-title">{props.selectedInterest?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-body"
      >
        <p>{props.selectedInterest?.description}</p>
      </Modal.Body>
      <Modal.Footer className="custom-footer">
        <Button onClick={() => props.setShowModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
