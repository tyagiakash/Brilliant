import React from "react";
import { Modal } from "react-bootstrap";

function appModal({ modalShow, setModalShow, ModalItemComponent, modalTitle }) {
  return (
    <>
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="app-modal"
      >
        {modalTitle && (
          <>
            {" "}
            <Modal.Header closeButton>
              <Modal.Title className="text-primary" id="app-modal">
                {modalTitle}
              </Modal.Title>
            </Modal.Header>{" "}
          </>
        )}
        <Modal.Body style={{ padding: 0 }}>{ModalItemComponent}</Modal.Body>
      </Modal>
    </>
  );
}

export default appModal;
