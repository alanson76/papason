import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img" />
                <img
                    src={play_icon}
                    alt=""
                    className="play-icon"
                    onClick={() => {
                        setPlayState(true);
                    }}
                />
            </div>
            <div className="about-right">
                <h3>About Us</h3>
                <h2>sub title</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi, deleniti illo eos fuga voluptas accusantium cum
                    molestiae vitae dolores, expedita totam provident beatae
                    molestias blanditiis voluptates, alias fugiat ea laboriosam.
                </p>
            </div>
        </div>
    );
};

export default About;
