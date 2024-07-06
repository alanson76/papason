import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <p>
                © {new Date().getFullYear()} Papason Home Builders. All rights
                reserved
            </p>{" "}
            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    );
};

export default Footer;
