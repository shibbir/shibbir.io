import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

export default class Gallery extends React.Component {
    state = { modalIsOpen: false };

    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    };

    render() {
        const { modalIsOpen } = this.state;

        return (
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={this.toggleModal}>
                        <Carousel views={this.props.images} />
                    </Modal>
                ) : null}
            </ModalGateway>
        );
    }
}
