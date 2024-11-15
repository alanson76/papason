import "./Services.css";
import home_additions from "../../assets/home-additions.jpg";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Services = () => {
    return (
        <div className="services">
            <div className="service">
                <img src={home_additions} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, dolorem.
                    </p>
                </div>
            </div>
            <div className="service">
                <img src={program_2} alt="" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, dolorem.
                    </p>
                </div>
            </div>
            <div className="service">
                <img src={program_3} alt="" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, dolorem.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
