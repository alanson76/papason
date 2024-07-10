import "./Services.css";
import additions_img from "../../assets/home-additions.jpg";
import full_reno_img from "../../assets/home-full-renovations.jpg";
import kitchen_reno_img from "../../assets/home-kitchen-renovations.jpg";
import bathroom_reno_img from "../../assets/home-bathrooms.jpg";
import exterior_decking_img from "../../assets/home-decking.jpg";
// import play_icon from "../../assets/play-icon.png";

// const About = ({ setPlayState }) => {
const Services = () => {
    return (
        <div>
            {/* additions */}
            <div className="services">
                <div className="service-left">
                    <img src={additions_img} alt="" className="service-img" />
                </div>
                <div className="service-right">
                    <h3>Additions</h3>
                    {/* <h2>sub title</h2> */}
                    <p>
                        Expansion or extension of an existing home to increase
                        its living space or functionality. This can involve
                        adding new rooms, extending existing rooms, or even
                        constructing entirely new sections of the house. House
                        additions can vary in scope and complexity, from simple
                        single-room expansions to multi-level extensions.
                    </p>
                </div>
            </div>
            {/* full renovations */}
            <div className="services">
                <div className="service-left">
                    <img src={full_reno_img} alt="" className="service-img" />
                </div>
                <div className="service-right">
                    <h3>Full Renovations</h3>
                    {/* <h2>sub title</h2> */}
                    <p>
                        Comprehensive process of updating and improving a
                        property, typically involving significant changes and
                        upgrades to its structure, systems, and aesthetics. This
                        can include:
                        <ul>
                            <li>Structural Work</li>
                            <li>Systems Upgrades</li>
                            <li>Interior Remodeling</li>
                            <li>Exterior Improvements</li>
                            <li>Compliance and Safety</li>
                            <li>Energy Efficiency</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* kitchen renovations */}
            <div className="services">
                <div className="service-left">
                    <img
                        src={kitchen_reno_img}
                        alt=""
                        className="service-img"
                    />
                </div>
                <div className="service-right">
                    <h3>Kitchen Renovations</h3>
                    {/* <h2>sub title</h2> */}
                    <p>
                        Updating and improving a kitchen's layout, design,
                        functionality, and aesthetics. This can range from minor
                        updates to a complete overhaul and typically includes
                        several key elements:
                        <ul>
                            <li>Layout Changes</li>
                            <li>Cabinetry</li>
                            <li>Countertops</li>
                            <li>Appliances</li>
                            <li>Plumbing and Electrical</li>
                            <li>Lighting</li>
                            <li>Flooring</li>
                            <li>Backsplash</li>
                            <li>Paint and Finishes</li>
                            <li>Fixtures and Hardware</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* bathroom renovations */}
            <div className="services">
                <div className="service-left">
                    <img
                        src={bathroom_reno_img}
                        alt=""
                        className="service-img"
                    />
                </div>
                <div className="service-right">
                    <h3>Bathroom Renovations</h3>
                    {/* <h2>sub title</h2> */}
                    <p>
                        Updating and improving a bathroom's design,
                        functionality, and aesthetics. This can involve minor
                        updates or a complete overhaul and typically includes
                        several key elements:
                        <ul>
                            <li>Layout Changes</li>
                            <li>Plumbing and Electrical</li>
                            <li>Fixtures and Fittings</li>
                            <li>Cabinetry and Storage</li>
                            <li>Flooring</li>
                            <li>Wall Treatments</li>
                            <li>Lighting</li>
                            <li>Ventilation</li>
                            <li>Mirrors and Accessories</li>
                            <li>Energy Efficiency</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* exterior works */}
            <div className="services">
                <div className="service-left">
                    <img
                        src={exterior_decking_img}
                        alt=""
                        className="service-img"
                    />
                </div>
                <div className="service-right">
                    <h3>Exterior Work</h3>
                    {/* <h2>sub title</h2> */}
                    <p>
                        A range of renovation, repair, and maintenance
                        activities aimed at improving the appearance,
                        functionality, and structural integrity of the exterior
                        parts of a residential property. This can encompass a
                        variety of tasks and projects, including:
                        <ul>
                            <li>Siding</li>
                            <li>Roofing</li>
                            <li>Windows and Doors</li>
                            <li>Painting and Finishing</li>
                            <li>Gutters and Downspouts</li>
                            <li>Decks and Patios</li>
                            <li>Landscaping</li>
                            <li>Fencing</li>
                            <li>Driveways and Walkways</li>
                            <li>Exterior Lighting</li>
                            <li>Garage and Outbuildings</li>
                            <li>Insulation</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
