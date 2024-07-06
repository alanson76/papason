import { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
    const slider = useRef();
    let transX = 0;

    const slideForward = () => {
        if (transX > -50) {
            transX -= 25;
        }
        slider.current.style.transform = `translateX(${transX}%)`;
    };
    const slideBackward = () => {
        if (transX < 0) {
            transX += 25;
        }
        slider.current.style.transform = `translateX(${transX}%)`;
    };

    return (
        <div className="testimonials">
            <img
                src={next_icon}
                className="next-btn"
                alt=""
                onClick={slideForward}
            />
            <img
                src={back_icon}
                className="back-btn"
                alt=""
                onClick={slideBackward}
            />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h2>William Jackson</h2>
                                    <span>Coquitlam, BC</span>
                                </div>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h2>William Jackson</h2>
                                    <span>Coquitlam, BC</span>
                                </div>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h2>William Jackson</h2>
                                    <span>Coquitlam, BC</span>
                                </div>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h2>William Jackson</h2>
                                    <span>Coquitlam, BC</span>
                                </div>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
