import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery = ({ images }) => {
    let modalIsOpen = false;

    const toggleModal = function () {
        modalIsOpen = !modalIsOpen;
    };

    return (
        <ModalGateway>
            {modalIsOpen ? (
                <Modal onClose={toggleModal}>
                    <Carousel views={images} />
                </Modal>
            ) : null}
        </ModalGateway>
    );
};

export default Gallery;
