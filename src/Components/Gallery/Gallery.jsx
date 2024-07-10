import "./Gallery.css";
// import white_arrow from "../../assets/white-arrow.png";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

// Dynamically import all images in the _fairImages folder
const images = import.meta.glob("../../assets/gallery/`*.{png,jpg,jpeg,svg}`", {
    eager: true,
});

function Gallery() {
    const imageList = Object.values(images).map((image, index) => ({
        index,
        src: image.default,
        alt: `Image ${index + 1}`,
        className: "galleryImg",
    }));

    return (
        <div className="galleryContainer">
            <div className="gallery">
                <Carousel
                    images={imageList}
                    style={{ width: "100%", height: "100%", maxHeight: 500 }}
                />
            </div>
        </div>
    );
}

export default Gallery;
