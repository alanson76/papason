import { Link } from "react-scroll";
import "./Footer.css";

const Footer = ({ setTermsOfUseState }) => {
    return (
        <div className="footer">
            <p>
                © {new Date().getFullYear()} Papason Home Builders. All rights
                reserved
            </p>
            <ul>
                <li>
                    <button
                        className="btn"
                        onClick={() => setTermsOfUseState(true)}
                    >
                        Terms of Use
                    </button>
                </li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    );
};

export default Footer;
