import "./Footer.css";

const Footer = ({ setTermsOfUseState, setPrivacyState }) => {
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
                        Terms and Conditions
                    </button>
                </li>
                <li>
                    <button
                        className="btn"
                        onClick={() => setPrivacyState(true)}
                    >
                        Privacy Policies
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
