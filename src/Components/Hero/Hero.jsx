import "./Hero.css";
import { Link } from "react-scroll";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>We Ensure better home for your family</h1>
                <p>
                    Papason home builders provides top-notch building solutions
                    tailored to meet the unique needs of our clients.
                </p>
                <p>
                    Our mission is to provide superior construction services
                    that exceed our client's expectations. We aim to build
                    lasting relationships based on trust, integrity, and mutual
                    respect, contributing to the growth and development of the
                    community we serve.
                </p>
                <Link
                    to="contact"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="btn"
                >
                    Free Estimate <img src={dark_arrow} alt="dark_arrow"></img>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
