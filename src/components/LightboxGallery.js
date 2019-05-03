import React from "react";
import Lightbox from "react-images";

export default class LightboxGallery extends React.Component {
    constructor() {
		super();

		this.state = {
            currentImage: 0,
            lightboxIsOpen: false
        };

        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
    }

    gotoPrevious() {
        let {currentImage} = this.state;

        currentImage--;

		this.setState({currentImage});
    }

	gotoNext() {
		let {currentImage} = this.state;

        currentImage++;

		this.setState({currentImage});
    }

    openLightbox(index, event) {
        event.preventDefault();

		this.setState({
			currentImage: index,
			lightboxIsOpen: true
		});
	}

    closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
    }

    renderGallery() {
        const { images } = this.props;

		if (!images) return;

		const gallery = images.map((item, i) => {
			return (
				<a href={item.src} onClick={(e) => this.openLightbox(i, e)} key={i}>
					<img src={item.src} alt="" />
				</a>
			);
		});

		return (
            <div id="lightgallery" className="clearfix">
                {gallery}
            </div>
		);
	}

    render() {
        return (
            <div>
                {this.renderGallery()}

                <Lightbox
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeLightbox}
                />
            </div>
        );
    }
}
