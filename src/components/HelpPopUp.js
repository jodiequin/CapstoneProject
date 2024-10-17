import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function HelpPopUp() {

    // To handle opening and closing og popup
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    // Displaying info popup
    return (
        <div>
            <button onClick={handleOpen}> Help </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1> Choosing a Delivery Option </h1>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h2> Standard Delivery </h2>
                    <p> 
                        Arrives at your door in 5 - 7 
                        business days, depending on
                        delivery location. 
                    </p>
                    <h2> Express Delivery </h2>
                    <p>
                        Arrives at your door in 2 - 5
                        business days, depending on
                        delivery location.
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
}