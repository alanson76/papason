import { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "01170f1d-42f3-469b-89aa-95681027ea79");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Send us a message
                    <img src={msg_icon} alt="message icon" />
                </h3>
                <p>
                    Feel free to reach out through contact form or find our
                    contact information below. Your feedback, questions, and
                    suggestions are important to us as we strive to provide
                    exceptional service to our community.
                </p>
                <ul>
                    <li>
                        <img src={mail_icon} />
                        papasonhomes@gmail.com
                    </li>
                    <li>
                        <img src={phone_icon} />
                        +1 778-268-3830
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                    />
                    <label>Write your messages or job description here</label>
                    <textarea
                        name="message"
                        rows="10"
                        placeholder="Enter your message or job description"
                        required
                    ></textarea>
                    <button type="submit" className="btn dark-btn">
                        Send <img src={white_arrow} />
                    </button>
                </form>

                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
