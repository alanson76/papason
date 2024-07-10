import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/papason-logo.png";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    const toggleMenu = () => {
        mobileMenu === true ? setMobileMenu(false) : setMobileMenu(true);
    };

    return (
        <nav className={`container ${sticky ? "dark-nav" : "clear-nav"}`}>
            <div className="logo-container">
                <Link to="hero" smooth={true} offset={0} duration={500}>
                    <img src={logo} alt="" className="logo" />
                </Link>
            </div>

            <div className="menu-container">
                <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                    <li>
                        <Link to="hero" smooth={true} offset={0} duration={500}>
                            Home
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to="about"
                            smooth={true}
                            offset={-150}
                            duration={500}
                        >
                            About us
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            to="services"
                            smooth={true}
                            offset={-260}
                            duration={500}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="gallery"
                            smooth={true}
                            offset={-260}
                            duration={500}
                        >
                            Gallery
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to="testimonials"
                            smooth={true}
                            offset={-260}
                            duration={500}
                        >
                            Testimonials
                        </Link>
                    </li> */}
                    <li>
                        <div className="nav-contact">
                            <Link
                                to="contact"
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="btn"
                            >
                                Contact us
                            </Link>
                            <h3>778.268.3830</h3>
                        </div>
                    </li>
                </ul>
                <img
                    src={menu_icon}
                    alt=""
                    className="menu-icon"
                    onClick={toggleMenu}
                />
            </div>
        </nav>
    );
};

export default Navbar;
