import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

import { useGlobalContext } from '../../context';

export default function MoviePlayerModal({title, posterVideo}) {
    
    //Get modal state from context 
    const {modalIsOpen, setModalIsOpen} = useGlobalContext()
    return (
        <Modal
            show={modalIsOpen}
            onHide={() => {
                    setModalIsOpen(false);
                }}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title
                id="contained-modal-title-vcenter"
                style={{ color: "#000000", fontWeight: "bolder" }}
                >
                {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#000000" }}>
                <ReactPlayer
                className="container-fluid"
                url={posterVideo}
                playing
                width="100%"
                ></ReactPlayer>
            </Modal.Body>
        </Modal>
      );
}

